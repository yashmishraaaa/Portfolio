"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const nodes = [
  { id: "code", label: "CODE", desc: "Local Env" },
  { id: "github", label: "GITHUB", desc: "Version Control" },
  { id: "cicd", label: "CI/CD", desc: "Actions / Pipelines" },
  { id: "docker", label: "DOCKER", desc: "Containerization" },
  { id: "aws", label: "AWS", desc: "Cloud Provider" },
  { id: "k8s", label: "KUBERNETES", desc: "Orchestration" },
  { id: "app", label: "APPLICATION", desc: "Production" },
  { id: "monitor", label: "MONITORING", desc: "Prometheus / Grafana" }
];

export default function Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      
      // Background transition back to black
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => gsap.to("body", { backgroundColor: "var(--black)", color: "var(--cream)", duration: 1 }),
        onLeaveBack: () => gsap.to("body", { backgroundColor: "var(--white)", color: "var(--black)", duration: 1 }),
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: "bottom 80%",
          scrub: 1
        }
      });

      // Animate line
      timeline.fromTo(lineRef.current, 
        { scaleY: 0 },
        { scaleY: 1, ease: "none", duration: 10 }
      );

      // Reveal nodes as line passes them
      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        
        // Approximate timing based on index
        const startTime = (10 / nodes.length) * i;
        
        timeline.fromTo(node, 
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
          startTime
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-[15vh] px-8 md:px-16"
    >
      <div className="mb-32 text-center md:text-left">
        <h2 className="font-display text-[clamp(4rem,10vw,10rem)] leading-[0.85] tracking-tighter">
          I BUILD<br/>SYSTEMS.
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto py-16">
        {/* Central Connecting Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-cream/10 -translate-x-1/2">
          <div 
            ref={lineRef}
            className="w-full h-full bg-cream origin-top"
          />
        </div>

        {/* Nodes */}
        <div className="flex flex-col gap-16 md:gap-24 relative z-10">
          {nodes.map((node, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={node.id}
                ref={el => { nodesRef.current[index] = el; }}
                className={`flex items-center w-full ${isLeft ? 'justify-start md:pr-[50%]' : 'justify-end md:pl-[50%]'} relative`}
              >
                {/* Visual Node Point */}
                <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-black border-2 border-cream rounded-full -translate-x-1/2 -translate-y-1/2" />
                
                {/* Node Content */}
                <div className={`w-[calc(50%-2rem)] ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="font-body text-[10px] tracking-widest uppercase opacity-50 mb-2">
                    {node.desc}
                  </div>
                  <div className="font-display text-2xl md:text-4xl uppercase tracking-wider">
                    {node.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
