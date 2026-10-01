"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stack = [
  { category: "Cloud", items: ["AWS", "EC2", "RDS", "EKS"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { category: "Monitoring", items: ["Prometheus", "Grafana"] },
  { category: "Backend", items: ["PHP", "CodeIgniter", "Node.js"] },
  { category: "Database", items: ["MySQL", "MariaDB"] },
  { category: "Frontend", items: ["React", "JavaScript", "HTML / CSS"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function TechStack() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="relative py-32 px-6 md:px-12 border-t border-white/5 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <h3 className="text-sm font-mono text-white/50 tracking-widest uppercase mb-4">
            [ 04 — Arsenal ]
          </h3>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
            Technology Stack.
          </h2>
        </div>

        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20"
        >
          {stack.map((group, index) => (
            <motion.div key={group.category} variants={itemVariants} className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-mono text-white/40">0{index + 1}</span>
                <h4 className="text-xl font-medium tracking-wide uppercase">{group.category}</h4>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              
              <div className="flex flex-col gap-4">
                {group.items.map((item) => (
                  <motion.div 
                    key={item}
                    whileHover={{ x: 10, color: "rgba(255,255,255,1)" }}
                    className="text-2xl md:text-3xl font-medium text-white/50 cursor-crosshair transition-colors origin-left w-fit interactive"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
