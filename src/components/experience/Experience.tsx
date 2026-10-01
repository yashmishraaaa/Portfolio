"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Cloud Infrastructure Engineer",
    company: "ETD Enterprise",
    period: "2024 - Present",
    description: "Leading the transformation of legacy infrastructure into modern, cloud-native architectures.",
    responsibilities: [
      "Architected containerized multi-agent infrastructure for internal enterprise use.",
      "Implemented comprehensive CI/CD pipelines using GitHub Actions.",
      "Managed AWS resources using Terraform for Infrastructure as Code."
    ],
    tech: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
    achievement: "Reduced deployment times by 40% and improved system uptime to 99.99%."
  },
  {
    id: 2,
    role: "DevOps Engineer",
    company: "TechSolutions Inc.",
    period: "2022 - 2024",
    description: "Managed end-to-end deployment lifecycle for high-traffic web applications.",
    responsibilities: [
      "Deployed and maintained EKS clusters for microservices.",
      "Set up Prometheus and Grafana for system monitoring and alerting.",
      "Optimized MySQL and RDS database performance."
    ],
    tech: ["EKS", "Prometheus", "Grafana", "MySQL", "Linux"],
    achievement: "Scaled infrastructure to handle 300% increase in daily active users."
  },
  {
    id: 3,
    role: "Backend & Systems Developer",
    company: "WebCraft Agency",
    period: "2020 - 2022",
    description: "Developed and maintained backend systems for enterprise CRM platforms.",
    responsibilities: [
      "Built custom HRMS and CRM solutions using PHP and CodeIgniter.",
      "Integrated third-party APIs and managed cloud deployments.",
      "Transitioned monolithic applications to containerized environments."
    ],
    tech: ["PHP", "CodeIgniter", "Node.js", "Docker", "AWS"],
    achievement: "Successfully migrated 15 legacy applications to containerized AWS infrastructure."
  }
];

const ExperienceItem = ({ exp, index }: { exp: typeof experiences[0], index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-white/10 py-8 relative group"
    >
      <div 
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer interactive"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1">
          <div className="text-sm font-mono text-white/50 tracking-widest w-32 shrink-0">
            {exp.period}
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-white/80 transition-colors">
              {exp.role}
            </h4>
            <div className="text-lg text-white/60 mt-1">{exp.company}</div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4 flex-wrap flex-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
           {exp.tech.slice(0, 3).map(t => (
             <span key={t} className="text-xs font-mono text-white/40 tracking-wider uppercase border border-white/10 rounded-full px-3 py-1">
               {t}
             </span>
           ))}
        </div>

        <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-colors shrink-0">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-8 pb-4 md:pl-40 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <p className="text-white/70 leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-white/60 text-sm md:text-base">
                      <span className="text-white/30 mt-1">▹</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-6">
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">Key Achievement</h5>
                  <div className="p-4 border border-white/5 bg-white/[0.02] rounded-lg text-white/80 text-sm md:text-base leading-relaxed">
                    {exp.achievement}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                       <span key={t} className="text-xs font-medium tracking-wider text-white/70 bg-white/5 rounded-full px-3 py-1.5">
                         {t}
                       </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 px-6 md:px-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h3 className="text-sm font-mono text-white/50 tracking-widest uppercase mb-4">
            [ 02 — Experience ]
          </h3>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
            Professional Journey.
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
