"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const nodes = [
  "Code",
  "GitHub",
  "CI/CD",
  "Docker",
  "AWS",
  "Kubernetes / EC2",
  "Application",
  "Monitoring"
];

export default function ArchitectureFlow() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="relative py-32 px-6 md:px-12 border-t border-white/5 bg-[#030303] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h3 className="text-sm font-mono text-white/50 tracking-widest uppercase mb-4">
            [ 05 — Process ]
          </h3>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
            Infrastructure Flow.
          </h2>
        </div>

        <div ref={containerRef} className="relative w-full max-w-xl mx-auto flex flex-col items-center">
          {nodes.map((node, i) => (
            <div key={node} className="relative flex flex-col items-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 }}
                className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center relative overflow-hidden group interactive"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                <h4 className="text-xl md:text-2xl font-medium tracking-wide relative z-10">{node}</h4>
              </motion.div>
              
              {i < nodes.length - 1 && (
                <div className="h-16 md:h-20 w-px bg-white/10 relative my-2">
                  <motion.div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-white/80 to-transparent origin-top"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                  />
                  {isInView && (
                    <motion.div 
                      className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white blur-[1px]"
                      initial={{ top: "0%", opacity: 0 }}
                      animate={{ top: ["0%", "50%", "100%"], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, delay: i * 0.15 + 0.5, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
