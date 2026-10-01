"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Background transition from Black to Cream
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => gsap.to("body", { backgroundColor: "var(--cream)", color: "var(--black)", duration: 1 }),
        onLeaveBack: () => gsap.to("body", { backgroundColor: "var(--black)", color: "var(--cream)", duration: 1 }),
      });

      // Text reveal
      const chars = textRef.current?.querySelectorAll(".char");
      if (chars) {
        gsap.from(chars, {
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
          yPercent: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.02,
          ease: "power4.out"
        });
      }

      // Copy fade in
      gsap.from(copyRef.current, {
        scrollTrigger: {
          trigger: copyRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Image parallax and reveal
      if (imageContainerRef.current && imageRef.current) {
        gsap.fromTo(imageContainerRef.current, 
          { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
          {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "expo.inOut",
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: "top 80%",
            }
          }
        );
        
        gsap.to(imageRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="relative min-h-screen w-full py-[20vh] px-8 md:px-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        
        {/* Left Col - Huge Text */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
          <h2 
            ref={textRef}
            className="font-display text-[clamp(4rem,10vw,12rem)] leading-[0.85] tracking-tighter uppercase overflow-hidden"
          >
            <div className="overflow-hidden">
              {Array.from("I BUILD").map((c, i) => <span key={`1-${i}`} className="char inline-block">{c === " " ? "\u00A0" : c}</span>)}
            </div>
            <div className="overflow-hidden">
              {Array.from("SYSTEMS").map((c, i) => <span key={`2-${i}`} className="char inline-block text-accent/50">{c === " " ? "\u00A0" : c}</span>)}
            </div>
            <div className="overflow-hidden ml-[10vw]">
              {Array.from("THAT").map((c, i) => <span key={`3-${i}`} className="char inline-block">{c === " " ? "\u00A0" : c}</span>)}
            </div>
            <div className="overflow-hidden ml-[10vw]">
              {Array.from("SCALE.").map((c, i) => <span key={`4-${i}`} className="char inline-block">{c === " " ? "\u00A0" : c}</span>)}
            </div>
          </h2>
        </div>

        {/* Right Col - Image and Copy */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-end mt-16 lg:mt-0">
          <div 
            ref={imageContainerRef}
            className="w-full h-[50vh] lg:h-[70vh] overflow-hidden mb-12 bg-gray-200"
            data-cursor="EXPLORE"
          >
            {/* Using a placeholder unsplash architecture image for the editorial feel */}
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Architecture abstract" 
              className="w-full h-[120%] object-cover object-center -mt-[10%]"
            />
          </div>
          
          <div ref={copyRef} className="font-body text-lg md:text-xl max-w-md">
            <div className="text-xs uppercase tracking-[0.2em] mb-6 font-bold">About Me</div>
            <p className="mb-6">
              I build reliable cloud infrastructure, automate deployments, and turn complex systems into scalable production environments.
            </p>
            <p className="text-sm opacity-60">
              Specializing in AWS, Kubernetes, Terraform, and creating robust CI/CD pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
