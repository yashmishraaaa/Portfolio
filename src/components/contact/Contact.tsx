"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "../navigation/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-12 bg-[#000000] overflow-hidden flex flex-col items-center text-center">
      {/* Subtle radial gradient to separate from previous sections */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-white/[0.03] blur-[100px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto z-10 w-full"
      >
        <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-none mb-8">
          Let's build something <br className="hidden md:block"/>
          <span className="text-white/40 italic">reliable.</span>
        </h2>
        
        <p className="text-lg md:text-2xl text-white/60 mb-16 max-w-2xl mx-auto">
          Have a project, infrastructure challenge, or product idea? Let's talk.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <MagneticButton>
            <a href="mailto:hello@example.com" className="px-10 py-5 bg-white text-black rounded-full font-medium tracking-wide flex items-center gap-3 hover:scale-105 transition-transform text-lg">
              <Mail size={20} /> Email Me
            </a>
          </MagneticButton>
          
          <MagneticButton>
            <a href="#" className="px-10 py-5 border border-white/20 text-white rounded-full font-medium tracking-wide flex items-center gap-3 hover:bg-white/5 transition-colors text-lg">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </MagneticButton>
          
          <MagneticButton>
            <a href="#" className="px-10 py-5 border border-white/20 text-white rounded-full font-medium tracking-wide flex items-center gap-3 hover:bg-white/5 transition-colors text-lg">
              <FaGithub size={20} /> GitHub
            </a>
          </MagneticButton>
        </div>
      </motion.div>
      
      <div className="w-full max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-mono text-white/40">
        <div>&copy; {new Date().getFullYear()} Yash Mishra. All rights reserved.</div>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors interactive uppercase tracking-widest">Twitter</a>
          <a href="#" className="hover:text-white transition-colors interactive uppercase tracking-widest">Resume</a>
        </div>
      </div>
    </section>
  );
}
