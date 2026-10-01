"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => gsap.to("body", { backgroundColor: "var(--cream)", color: "var(--black)", duration: 1 }),
        onLeaveBack: () => gsap.to("body", { backgroundColor: "var(--black)", color: "var(--cream)", duration: 1 }),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="contact"
      ref={containerRef} 
      className="relative w-full min-h-screen py-[15vh] px-8 md:px-16 flex flex-col justify-between"
    >
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="font-display text-[clamp(5rem,15vw,20rem)] leading-[0.8] tracking-tighter uppercase mb-16">
          <span className="block overflow-hidden"><span className="block transform translate-y-0">LET'S</span></span>
          <span className="block overflow-hidden ml-[10vw]"><span className="block transform translate-y-0 text-accent/50">BUILD</span></span>
          <span className="block overflow-hidden"><span className="block transform translate-y-0">WHAT'S</span></span>
          <span className="block overflow-hidden ml-[20vw]"><span className="block transform translate-y-0 text-black">NEXT.</span></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-8">
        <div className="col-span-1 md:col-span-4">
          <div className="font-body text-[10px] tracking-widest uppercase mb-4">
            AVAILABLE FOR
          </div>
          <ul className="font-display text-2xl uppercase leading-none opacity-80">
            <li>DEVOPS</li>
            <li>CLOUD</li>
            <li>INFRASTRUCTURE</li>
            <li>AUTOMATION</li>
          </ul>
        </div>
        
        <div className="col-span-1 md:col-span-4 md:col-start-9 flex flex-col gap-2 font-body text-xs md:text-sm tracking-widest uppercase">
          <a href="mailto:yashmishramishra401@gmail.com" className="interactive hover:italic w-fit border-b border-black/20 pb-1 break-all">yashmishramishra401@gmail.com</a>
          <a href="tel:+919833790444" className="interactive hover:italic w-fit border-b border-black/20 pb-1">+91 9833790444</a>
          <a href="https://www.linkedin.com/in/yash-mishra-618142319" target="_blank" rel="noopener noreferrer" className="interactive hover:italic w-fit border-b border-black/20 pb-1">LinkedIn</a>
          <a href="https://github.com/yashmishraaaa" target="_blank" rel="noopener noreferrer" className="interactive hover:italic w-fit border-b border-black/20 pb-1">GitHub</a>
        </div>
      </div>
    </section>
  );
}
