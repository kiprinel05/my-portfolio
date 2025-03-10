"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Importă iconițele pentru meniu și închidere

const Navbar = () => {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Stare pentru meniul mobil

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 70) {
        setBgColor("bg-gray-900 shadow-lg");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Variante pentru animații
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full text-white py-4 z-50 transition duration-300 ${bgColor}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">My Portfolio</div>

        {/* Butonul de hamburger pentru mobile */}
        <motion.button
          className="md:hidden p-2 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Meniul pentru desktop */}
        <div className="hidden md:flex gap-4">
          <a
            href="#about"
            className="bg-blue-500 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700 font-bold hover:scale-105"
          >
            About me
          </a>
          <a
            href="#projects"
            className="bg-blue-500 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700 font-bold hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="bg-blue-500 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700 font-bold hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="bg-blue-500 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700 font-bold hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Meniul mobil cu animații */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900 shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 p-4">
              <a
                href="#about"
                className="bg-blue-500 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700 font-bold hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About me
              </a>
              <a
                href="#projects"
                className="bg-blue-500 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700 font-bold hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="bg-blue-500 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700 font-bold hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="bg-blue-500 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700 font-bold hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
