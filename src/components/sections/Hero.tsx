"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLHeadingElement>(null);
  const lastNameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.5 }); // Wait for loader

      // Initial state
      gsap.set([labelRef.current, metaRef.current, roleRef.current], { opacity: 0 });
      
      const firstLetters = firstNameRef.current?.querySelectorAll('span');
      const lastLetters = lastNameRef.current?.querySelectorAll('span');
      
      gsap.set(firstLetters || [], { yPercent: 100, opacity: 0 });
      gsap.set(lastLetters || [], { yPercent: 100, opacity: 0 });

      tl.to(labelRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      })
      .to(metaRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5")
      .to(firstLetters || [], {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.05,
        ease: "expo.out"
      }, "-=0.2")
      .to(lastLetters || [], {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        stagger: -0.05,
        ease: "expo.out"
      }, "-=0.8")
      .to(roleRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
      }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-end pb-[10vh] px-8 md:px-16 overflow-hidden"
    >
      {/* Top Left Label */}
      <div 
        ref={labelRef}
        className="absolute top-8 left-8 font-body text-xs tracking-[0.2em] uppercase"
      >
        YM.
      </div>

      {/* Center Left Label */}
      <div className="absolute top-[45%] left-8 font-body text-[10px] tracking-widest -rotate-90 origin-left hidden md:block">
        01 / INTRO
      </div>

      {/* Abstract Right Element placeholder (can be generated image later) */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[400px] opacity-10 bg-gradient-to-br from-white to-transparent mix-blend-overlay hidden lg:block rounded-full blur-3xl pointer-events-none" />

      {/* Main Typography */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center pt-20">
        <div className="flex flex-col items-start w-full max-w-7xl mx-auto">
          <div className="overflow-hidden pb-4 -mb-4">
            <h1 
              ref={firstNameRef}
              className="font-display text-[clamp(6rem,15vw,16rem)] leading-[0.8] tracking-tighter mix-blend-difference whitespace-nowrap"
            >
              {Array.from("YASH").map((char, i) => (
                <span key={i} className="inline-block relative">{char}</span>
              ))}
            </h1>
          </div>
          
          <div className="overflow-hidden pb-4 -mb-4 md:ml-[15vw]">
            <h1 
              ref={lastNameRef}
              className="font-display text-[clamp(6rem,15vw,16rem)] leading-[0.8] tracking-tighter mix-blend-difference whitespace-nowrap"
            >
              {Array.from("MISHRA").map((char, i) => (
                <span key={i} className="inline-block relative">{char}</span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* Role */}
      <div 
        ref={roleRef}
        className="absolute bottom-8 right-8 md:bottom-16 md:right-16 font-body text-sm md:text-base tracking-[0.1em] uppercase max-w-[200px] text-right"
      >
        DevOps Engineer
        <div className="w-full h-[1px] bg-cream/30 mt-2 mb-2"></div>
        <div className="text-[10px] text-cream/50">CLOUD INFRASTRUCTURE</div>
      </div>

      {/* Metadata */}
      <div 
        ref={metaRef}
        className="absolute bottom-8 right-8 font-body text-[10px] tracking-widest text-right hidden sm:block"
      >
        <p>AWS</p>
        <p>KUBERNETES</p>
        <p>TERRAFORM</p>
        <p>CI/CD</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 font-body text-[10px] tracking-widest uppercase flex flex-col items-center gap-4">
        <span className="-rotate-90 origin-left translate-x-3">Scroll</span>
        <div className="w-[1px] h-12 bg-cream/20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-cream animate-[scrollDown_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
