"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    let progress = { value: 0 };
    tl.to(progress, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (percentRef.current) {
          percentRef.current.innerText = `${Math.round(progress.value)}%`;
        }
      }
    }, 0);

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, 0.5);

    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut",
      delay: 0.2
    }, 2);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center text-cream"
    >
      <div 
        ref={textRef}
        className="opacity-0 translate-y-4 font-body text-xs tracking-[0.2em] mb-4 uppercase"
      >
        Initializing Systems
      </div>
      <div 
        ref={percentRef}
        className="font-display text-4xl md:text-6xl lg:text-8xl"
      >
        0%
      </div>
    </div>
  );
}
