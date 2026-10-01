"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experienceData = [
  {
    year: "APR 2026 - PRESENT",
    role: "DEVOPS ENGINEER",
    company: "SMMART TRAINING & CONSULTANCY SERVICES PVT. LTD",
    tech: ["AWS", "DOCKER", "KUBERNETES", "CI/CD"],
    location: "Mumbai Metropolitan Region"
  },
  {
    year: "JAN 2026 - PRESENT",
    role: "DEVOPS ENGINEER",
    company: "EDUDIAGNO",
    tech: ["CLOUD", "INFRASTRUCTURE", "AUTOMATION"],
    location: "Mumbai, Maharashtra, India"
  },
  {
    year: "PRESENT",
    role: "MASTER OF COMPUTER APPLICATIONS",
    company: "ADITYA INSTITUTE OF MANAGEMENT STUDIES & RESEARCH (AIMSR)",
    tech: ["EDUCATION"],
    location: "Mumbai"
  },
  {
    year: "2020 - 2024",
    role: "BACHELOR OF EDUCATION",
    company: "THAKUR EDUCATIONAL TRUST",
    tech: ["EDUCATION"],
    location: "Mumbai"
  },
  {
    year: "PREVIOUS",
    role: "B.SC.CS",
    company: "THAKUR SHYAMNARAYAN DEGREE COLLEGE",
    tech: ["EDUCATION", "COMPUTER SCIENCE"],
    location: "Mumbai"
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        if (!item) return;
        
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-[15vh] px-8 md:px-16"
    >
      <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-none mb-24 uppercase">
        Experience <br /> & Education
      </h2>

      <div className="w-full flex flex-col">
        {experienceData.map((exp, index) => (
          <div 
            key={index}
            ref={el => { itemsRef.current[index] = el; }}
            className="w-full border-t border-cream/20 py-12 flex flex-col lg:flex-row gap-8 lg:gap-16 group"
          >
            {/* Year */}
            <div className="w-full lg:w-1/4">
              <span className="font-body text-sm tracking-widest opacity-50 block mb-2 lg:mb-0 transform transition-transform group-hover:translate-x-4">
                {exp.year}
              </span>
            </div>
            
            {/* Role & Company */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h3 className="font-display text-3xl md:text-5xl uppercase mb-2">
                {exp.role}
              </h3>
              <p className="font-body text-xs tracking-[0.2em] uppercase opacity-70 mb-2">
                {exp.company}
              </p>
              <p className="font-body text-[10px] tracking-widest uppercase opacity-40">
                {exp.location}
              </p>
            </div>
            
            {/* Tech Stack */}
            <div className="w-full lg:w-1/4 flex items-start lg:justify-end mt-4 lg:mt-0">
              <ul className="flex flex-wrap lg:justify-end gap-x-4 gap-y-2 font-body text-[10px] tracking-widest uppercase opacity-50">
                {exp.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {/* Final border */}
        <div className="w-full border-t border-cream/20"></div>
      </div>
    </section>
  );
}
