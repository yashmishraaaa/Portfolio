"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "WORK", href: "#projects" },
  { name: "STACK", href: "#stack" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map((item) => item.href.substring(1));
      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 transition-colors duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-xl font-bold tracking-tighter mix-blend-difference interactive">
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")}>
          YM.
        </a>
      </div>

      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className={`text-xs font-medium tracking-widest transition-colors interactive relative group ${
              activeSection === item.href.substring(1) ? "text-white" : "text-white/50 hover:text-white"
            }`}
          >
            {item.name}
            {activeSection === item.href.substring(1) && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        ))}
      </nav>

      <div className="md:hidden interactive">
        <MagneticButton className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-white/5 rounded-full border border-white/10">
          <span className="w-4 h-px bg-white block"></span>
          <span className="w-4 h-px bg-white block"></span>
        </MagneticButton>
      </div>
    </motion.header>
  );
}
