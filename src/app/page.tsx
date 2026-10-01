"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import WorkIntro from "@/components/sections/WorkIntro";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import Architecture from "@/components/sections/Architecture";
import Experience from "@/components/sections/Experience";
import Stack from "@/components/sections/Stack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative w-full overflow-hidden bg-black selection:bg-accent selection:text-white">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <Hero />
      <About />
      <Expertise />
      <WorkIntro />
      <ProjectShowcase />
      <Architecture />
      <Experience />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
