"use client";

import { motion } from "framer-motion";
import MagneticButton from "../navigation/MagneticButton";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-20">
      {/* Background glow or technical elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      <motion.div 
        className="w-full max-w-7xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4 text-xs md:text-sm font-mono text-white/50 tracking-widest">
          <span className="w-8 h-px bg-white/30"></span>
          <span>SYSTEM.STATUS // ONLINE</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none mb-4 md:mb-6"
        >
          YASH
          <br />
          MISHRA
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white/80 mb-8"
        >
          DEVOPS ENGINEER
          <span className="block text-sm md:text-base lg:text-lg font-normal text-white/50 tracking-widest mt-2 md:mt-4">
            CLOUD • AUTOMATION • INFRASTRUCTURE
          </span>
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="max-w-xl text-base md:text-lg text-white/60 leading-relaxed mb-12"
        >
          I build reliable cloud infrastructure, automate deployments, and turn complex systems into scalable production environments.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <MagneticButton>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium text-sm tracking-wide rounded-full hover:scale-105 transition-transform duration-300"
            >
              Explore My Work
            </a>
          </MagneticButton>
          
          <MagneticButton>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-sm tracking-wide rounded-full hover:bg-white/5 transition-colors duration-300"
            >
              Let's Connect
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-4 interactive"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="text-[10px] uppercase tracking-widest text-white/40 rotate-90 origin-left translate-x-2">SCROLL</div>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden mt-8">
          <motion.div 
            className="w-full h-full bg-white origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0], translateY: ["-100%", "0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
