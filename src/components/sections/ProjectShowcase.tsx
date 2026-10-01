"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    id: "01",
    title: "ENTERPRISE CRM",
    tech: ["PHP", "CODEIGNITER", "MYSQL", "AWS", "JAVASCRIPT"],
    desc: "Enterprise CRM and HRMS platform covering employees, attendance, leave, payroll, recruitment, performance, assets and reporting.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    url: "https://github.com/yashmishraaaa"
  },
  {
    id: "02",
    title: "CRM APP",
    tech: ["PHP", "CODEIGNITER", "TAILWIND", "MYSQL", "JAVASCRIPT"],
    desc: "Account-centric enterprise workspace designed to transform CRM from lead tracking into a daily operational workspace.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    url: "https://github.com/yashmishraaaa"
  },
  {
    id: "03",
    title: "DEVOPS CAPSTONE",
    tech: ["HCL", "DOCKER", "KUBERNETES", "GITHUB ACTIONS", "PROMETHEUS", "GRAFANA", "TRIVY"],
    desc: "Complete cloud infrastructure and CI/CD implementation with Dockerized Node.js app, Kubernetes deployment, monitoring with Prometheus & Grafana, and security scanning with Trivy.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
    url: "https://github.com/yashmishraaaa/devops-capstone"
  },
  {
    id: "04",
    title: "AHARA CALM",
    tech: ["TYPESCRIPT", "REACT", "VITE", "TAILWIND"],
    desc: "Wellness and mindfulness application designed to promote calm and healthy living. Built with modern TypeScript and React stack.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop",
    url: "https://github.com/yashmishraaaa/ahara-calm"
  },
  {
    id: "05",
    title: "CAREERUP",
    tech: ["NEXT.JS", "NEON DB", "TAILWIND", "PRISMA", "INNGEST", "SHADCN UI"],
    desc: "Full Stack AI Career Coach platform built with Next.js, Neon DB, Prisma ORM, and Inngest for background job processing. AI-powered career guidance system.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    url: "https://github.com/yashmishraaaa/CareerUp"
  },
  {
    id: "06",
    title: "GITHUB ARCHIVE",
    tech: ["GITHUB", "OPEN SOURCE", "PROJECTS"],
    desc: "Check out my GitHub profile to explore all my other repositories, including mini-capstones, docker apps, and open source contributions.",
    img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2000&auto=format&fit=crop",
    url: "https://github.com/yashmishraaaa"
  }
];

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => gsap.to("body", { backgroundColor: "var(--white)", color: "var(--black)", duration: 1 }),
        onLeaveBack: () => gsap.to("body", { backgroundColor: "var(--white)", color: "var(--black)", duration: 1 }),
      });

      if (!isMobile) {
        const panels = panelsRef.current.filter(Boolean);
        
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainerRef.current,
            pin: true,
            scrub: 0.5, // Reduced from 1 for faster responsiveness
            snap: 1 / (panels.length - 1),
            // Reduce the required scroll distance by 50% to make it scroll through faster
            end: () => "+=" + (scrollContainerRef.current?.offsetWidth || window.innerWidth) * (panels.length - 1) * 0.5
          }
        });
      } else {
        panelsRef.current.forEach((panel) => {
          if (!panel) return;
          gsap.from(panel, {
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
          });
        });
      }
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const totalProjects = String(projects.length).padStart(2, '0');

  return (
    <section 
      id="work" 
      ref={sectionRef} 
      className="relative w-full overflow-hidden"
    >
      <div 
        ref={scrollContainerRef}
        className={`flex flex-col md:flex-row w-full h-auto md:h-screen`}
        style={{ width: `${projects.length * 100}vw` }}
      >
        {projects.map((project, index) => (
          <div 
            key={project.id}
            ref={el => { panelsRef.current[index] = el; }}
            className="w-full md:w-[100vw] h-auto md:h-screen flex flex-col justify-center px-8 md:px-16 py-24 md:py-0 shrink-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center h-full max-h-[800px]">
              
              {/* Content Column */}
              <div className="col-span-1 md:col-span-5 flex flex-col order-2 md:order-1">
                <div className="font-body text-xs tracking-widest mb-4">
                  {project.id} / {totalProjects}
                </div>
                
                <div className="overflow-hidden mb-8">
                  <h3 className="font-display text-4xl md:text-6xl xl:text-7xl leading-none uppercase">
                    {project.title}
                  </h3>
                </div>
                
                <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-8 font-body text-[10px] tracking-widest uppercase">
                  {project.tech.map((t, i) => (
                    <li key={i} className="opacity-60">{t}</li>
                  ))}
                </ul>
                
                <p className="font-body text-sm md:text-base max-w-sm mb-12 leading-relaxed">
                  {project.desc}
                </p>
                
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs tracking-[0.2em] uppercase underline underline-offset-8 interactive hover:italic transition-all w-fit"
                >
                  VIEW ON GITHUB →
                </a>
              </div>
              
              {/* Image Column */}
              <div className="col-span-1 md:col-span-7 h-[40vh] md:h-full flex items-center justify-center order-1 md:order-2">
                <div 
                  className="w-full h-full md:h-[80%] overflow-hidden relative bg-gray-100"
                  data-cursor="VIEW PROJECT"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
