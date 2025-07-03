"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-[#FECC1B] font-bold text-xl">
              <span className="text-[#6bd968]">{"{ "}</span>
              Ale Rodríguez
              <span className="text-[#6bd968]">{" }"}</span>
            </h2>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 font-medium hover:text-[#FECC1B] transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FECC1B] group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 font-medium hover:text-[#FECC1B] transition-colors duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FECC1B] group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 font-medium hover:text-[#FECC1B] transition-colors duration-300 relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FECC1B] group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 font-medium hover:text-[#FECC1B] transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FECC1B] group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-[#FECC1B] transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
