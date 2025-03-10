"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";
import { Github } from "lucide-react";

import profilePic from "../assets/logo.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: (direction: number) => ({ x: direction * 50, opacity: 0 }),
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex justify-center items-center overflow-hidden">
      <ParticlesBackground />

      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={itemVariants}
          custom={-1}
        >
          <Image
            src={profilePic}
            alt="Logo"
            className="hover:scale-105 transition-transform duration-300"
            width={1000}
            height={1000}
          />
        </motion.div>

        {}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          variants={itemVariants}
          custom={1}
        >
          <h1 className="text-6xl font-bold mb-6 font-mytitle">
            Welcome to my portfolio!
          </h1>
          <p className="text-xl text-gray-300 mb-6 font-mysubtitle">
            I am a web developer passionate about React, Tailwind CSS, and
            Three.js.
          </p>
          <a
            href="https://github.com/kiprinel05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 flex items-center gap-2"
            >
              <Github size={20} /> {/* Iconița Github */}
              Check out my GitHub
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
