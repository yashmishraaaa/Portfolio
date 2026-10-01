"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const AnimatedCounter = ({ value, label, suffix = "" }: { value: number; label: string, suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current));
  
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="text-5xl md:text-7xl font-bold tracking-tighter flex items-center">
        <motion.span>{display}</motion.span>
        <span className="text-white/80">{suffix}</span>
      </div>
      <div className="text-sm md:text-base font-mono text-white/50 uppercase tracking-widest">{label}</div>
    </div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section id="about" className="relative py-32 px-6 md:px-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-sm font-mono text-white/50 tracking-widest uppercase">
              [ 01 — Background ]
            </h3>
            
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
              I engineer resilient systems that power modern applications.
            </h2>
            
            <div className="text-base md:text-lg text-white/60 leading-relaxed flex flex-col gap-6">
              <p>
                As a DevOps and Cloud Engineer, I specialize in designing and maintaining robust infrastructure across AWS, Kubernetes, and Docker environments. I focus on automating CI/CD pipelines, optimizing system performance, and ensuring high availability.
              </p>
              <p>
                My approach bridges the gap between development and operations. By implementing infrastructure as code using Terraform and setting up comprehensive monitoring with Prometheus and Grafana, I help teams ship faster and safer.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4">
              {['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'Monitoring', 'Backend'].map((tech) => (
                <span key={tech} className="px-4 py-2 border border-white/10 rounded-full text-xs font-medium tracking-wider text-white/70">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-x-8 gap-y-16 content-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatedCounter value={50} label="AWS / Cloud" suffix="+" />
            <AnimatedCounter value={100} label="CI/CD" suffix="%" />
            <AnimatedCounter value={24} label="Infrastructure" suffix="+" />
            <AnimatedCounter value={99} label="Automation" suffix="%" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
