"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import MagneticButton from "../navigation/MagneticButton";

const projects = [
  {
    id: "01",
    title: "DevOps Capstone",
    description: "A comprehensive, highly available cloud infrastructure built from scratch. Features automated CI/CD pipelines, container orchestration, and real-time monitoring.",
    tech: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana"],
    github: "#",
    live: "#",
    color: "#1a1a1a"
  },
  {
    id: "02",
    title: "Enterprise CRM / HRMS",
    description: "A monolithic to microservices transformation of a legacy CRM system, scaling it to handle thousands of concurrent users with optimized database queries.",
    tech: ["PHP", "CodeIgniter", "MySQL", "AWS", "Redis"],
    github: "#",
    live: "#",
    color: "#151515"
  },
  {
    id: "03",
    title: "ETD Enterprise Workspace",
    description: "A CRM transformation workspace featuring an account-centric architecture, highly reusable component system, and an AI-ready backend infrastructure.",
    tech: ["React", "Node.js", "GraphQL", "AWS EKS", "Terraform"],
    github: "#",
    live: "#",
    color: "#111111"
  },
  {
    id: "04",
    title: "Agentic AI Infrastructure",
    description: "A secure, containerized multi-agent infrastructure designed for internal enterprise use. Features isolated agent execution environments and scalable compute nodes.",
    tech: ["Docker", "Kubernetes", "Python", "FastAPI", "AWS EC2"],
    github: "#",
    live: "#",
    color: "#0a0a0a"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity, backgroundColor: project.color, top: `calc(10vh + ${index * 40}px)` }}
      className="sticky w-full min-h-[70vh] md:h-[80vh] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row group mb-8 shadow-2xl"
    >
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-between z-10 bg-background/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <div>
          <div className="text-sm font-mono text-white/50 mb-6 tracking-widest">[ PROJECT {project.id} ]</div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">{project.title}</h3>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
            {project.description}
          </p>
        </div>
        
        <div className="mt-12 md:mt-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map(t => (
              <span key={t} className="text-xs font-mono tracking-widest uppercase px-4 py-2 border border-white/10 rounded-full text-white/70 bg-white/5">
                {t}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-8">
            <MagneticButton>
              <a href={project.live} className="flex items-center gap-2 text-sm font-medium tracking-wide border-b border-white pb-1 hover:text-white/70 transition-colors">
                View Live <ArrowUpRight size={16} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={project.github} className="flex items-center gap-2 text-sm font-medium tracking-wide text-white/60 hover:text-white transition-colors">
                <FaGithub size={20} /> Source Code
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
      
      <div className="flex-1 bg-white/5 relative overflow-hidden hidden md:block border-l border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="absolute inset-12 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-out">
           {/* Abstract Data Flow Visualization */}
           <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full blur-xl" />
              <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full blur-2xl" />
              <div className="w-full h-full flex flex-col justify-between p-10">
                {[1, 2, 3, 4, 5].map(line => (
                  <div key={line} className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                ))}
              </div>
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-white/20 font-mono text-sm tracking-widest uppercase flex flex-col items-center gap-4">
                <span className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center">⚙</span>
                Architecture Visual
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h3 className="text-sm font-mono text-white/50 tracking-widest uppercase mb-4">
            [ 03 — Selected Work ]
          </h3>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
            Engineering at Scale.
          </h2>
        </div>

        <div className="relative pb-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
