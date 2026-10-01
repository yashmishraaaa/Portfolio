"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const expertiseList = [
  "CLOUD INFRASTRUCTURE",
  "DEVOPS",
  "CONTAINERIZATION",
  "CI/CD",
  "OBSERVABILITY",
  "BACKEND SYSTEMS"
];

export default function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      
      // We will revert back to Black background for this section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => gsap.to("body", { backgroundColor: "var(--black)", color: "var(--cream)", duration: 1 }),
        onLeaveBack: () => gsap.to("body", { backgroundColor: "var(--cream)", color: "var(--black)", duration: 1 }),
      });

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });

        // Hover effect setup
        const text = item.querySelector('.expertise-text');
        const num = item.querySelector('.expertise-num');
        
        item.addEventListener("mouseenter", () => {
          gsap.to(text, { x: 20, color: "var(--white)", duration: 0.4, ease: "power2.out" });
          gsap.to(num, { color: "var(--white)", opacity: 1, duration: 0.4, ease: "power2.out" });
        });
        
        item.addEventListener("mouseleave", () => {
          gsap.to(text, { x: 0, color: "var(--cream)", duration: 0.4, ease: "power2.out" });
          gsap.to(num, { color: "var(--cream)", opacity: 0.5, duration: 0.4, ease: "power2.out" });
        });
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="expertise" 
      ref={containerRef} 
      className="relative w-full py-[15vh] px-8 md:px-16"
    >
      <div className="mb-24 flex items-start gap-8">
        <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.85]">
          MY<br/>EXPERTISE
        </h2>
      </div>

      <ul className="w-full border-t border-cream/20">
        {expertiseList.map((item, index) => (
          <li 
            key={index}
            ref={el => { itemsRef.current[index] = el; }}
            className="group relative border-b border-cream/20 py-8 md:py-12 cursor-pointer"
            data-cursor="VIEW"
          >
            <div className="flex items-baseline justify-between overflow-hidden">
              <div className="flex items-baseline gap-4 md:gap-12">
                <span className="expertise-num font-body text-xs md:text-sm tracking-widest opacity-50">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="expertise-text font-display text-4xl md:text-6xl lg:text-7xl uppercase inline-block">
                  {item}
                </span>
              </div>
            </div>
            
            {/* Hover Image Reveal Area - Can add actual images later if needed */}
            <div className="absolute top-0 right-1/4 w-[300px] h-full pointer-events-none overflow-hidden opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0 hidden lg:block origin-center">
               <img 
                 src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop`} 
                 alt={item} 
                 className="w-full h-full object-cover grayscale opacity-30 mix-blend-screen"
               />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
