"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorMode, setCursorMode] = useState<"normal" | "link" | "text">("normal");

  useEffect(() => {
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    const text = cursorTextRef.current;
    if (!cursor || !text) return;

    // Set initial cursor state
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    
    // QuickSetter for performance
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isLink = target.closest("a") || target.closest("button") || target.classList.contains("interactive");
      
      // Look for data-cursor attribute
      let cursorData = null;
      let el: HTMLElement | null = target;
      while (el && el !== document.body) {
        if (el.getAttribute("data-cursor")) {
          cursorData = el.getAttribute("data-cursor");
          break;
        }
        el = el.parentElement;
      }

      if (cursorData) {
        setCursorText(cursorData);
        setCursorMode("text");
        gsap.to(cursor, { width: 80, height: 80, duration: 0.3, ease: "power3.out" });
      } else if (isLink) {
        setCursorText("");
        setCursorMode("link");
        gsap.to(cursor, { width: 40, height: 40, duration: 0.3, ease: "power3.out" });
      } else {
        setCursorText("");
        setCursorMode("normal");
        gsap.to(cursor, { width: 12, height: 12, duration: 0.3, ease: "power3.out" });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] hidden lg:flex items-center justify-center mix-blend-difference overflow-hidden`}
      style={{
        transition: "width 0.3s ease, height 0.3s ease",
      }}
    >
      <div 
        ref={cursorTextRef}
        className={`text-[10px] font-display text-black uppercase text-center leading-none tracking-widest absolute ${cursorMode === "text" ? "opacity-100" : "opacity-0"}`}
        style={{
          transition: "opacity 0.2s ease"
        }}
      >
        {cursorText.split(' ').map((word, i) => (
          <span key={i} className="block">{word}</span>
        ))}
      </div>
    </div>
  );
}
