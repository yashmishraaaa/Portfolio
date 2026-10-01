"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stackList = [
  "DOCKER",
  "KUBERNETES",
  "AWS EC2",
  "TERRAFORM",
  "GITHUB ACTIONS",
  "PROMETHEUS",
  "GRAFANA",
  "PYTHON",
  "FLASK",
  "FASTAPI",
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "VITE",
  "JAVASCRIPT",
  "NODE.JS",
  "PRISMA",
  "LINUX",
  "TRIVY",
  "HCL",
  "TAILWIND",
  "MYSQL",
];

export default function Stack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      rowsRef.current.forEach((row, i) => {
        if (!row) return;
        
        const direction = i % 2 === 0 ? 1 : -1;
        
        gsap.to(row, {
          x: direction * -300,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split stack into rows
  const rowSize = Math.ceil(stackList.length / 3);
  const row1 = stackList.slice(0, rowSize);
  const row2 = stackList.slice(rowSize, rowSize * 2);
  const row3 = stackList.slice(rowSize * 2);

  return (
    <section 
      id="stack"
      ref={containerRef} 
      className="relative w-full py-[20vh] overflow-hidden flex flex-col justify-center"
    >
      {[row1, row2, row3].map((row, i) => (
        <div 
          key={i}
          ref={el => { rowsRef.current[i] = el; }}
          className="flex whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-500"
          style={{ transform: `translateX(${i % 2 === 0 ? '0' : '-10vw'})` }}
        >
          {row.map((tech, j) => (
            <span 
              key={j}
              className="font-display text-[clamp(4rem,12vw,12rem)] leading-[0.8] uppercase mx-4 md:mx-8 hover:text-white hover:italic transition-all duration-300 interactive"
            >
              {tech}
            </span>
          ))}
          {/* Repeat for seamless look */}
          {row.map((tech, j) => (
            <span 
              key={`repeat-${j}`}
              className="font-display text-[clamp(4rem,12vw,12rem)] leading-[0.8] uppercase mx-4 md:mx-8 hover:text-white hover:italic transition-all duration-300 interactive"
            >
              {tech}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
}
