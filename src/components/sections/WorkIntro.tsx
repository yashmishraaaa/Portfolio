"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WorkIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Transition background to white
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => gsap.to("body", { backgroundColor: "var(--white)", color: "var(--black)", duration: 1 }),
        onLeaveBack: () => gsap.to("body", { backgroundColor: "var(--black)", color: "var(--cream)", duration: 1 }),
      });

      // Massive text reveal
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom center",
          scrub: 1,
        },
        scale: 0.8,
        y: 100,
        opacity: 0,
        ease: "none"
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <h2 
        ref={textRef}
        className="font-display text-[25vw] leading-none tracking-tighter mix-blend-difference z-10"
      >
        WORK
      </h2>
    </section>
  );
}
