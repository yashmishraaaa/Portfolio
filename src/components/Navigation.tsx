"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial reveal
    const tl = gsap.timeline();
    tl.to(navRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power4.out"
    });
    
    setIsVisible(true);
  }, []);

  const links = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERTISE", href: "#expertise" },
    { name: "WORK", href: "#work" },
    { name: "STACK", href: "#stack" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <nav 
      ref={navRef}
      className="fixed top-8 right-8 z-[100] opacity-0 translate-y-[-20px] mix-blend-difference text-white"
    >
      <ul className="flex flex-col items-end gap-1 font-body text-[10px] sm:text-xs uppercase tracking-widest">
        {links.map((link) => (
          <li key={link.name} className="overflow-hidden">
            <Link 
              href={link.href}
              className="block relative hover:italic transition-all duration-300 interactive"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
