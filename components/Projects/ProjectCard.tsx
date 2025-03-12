"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

interface Project {
  title: string;
  images: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false); // Stare pentru hover

  return (
    <div
      className="relative flex flex-col items-center group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)} // Setează hover la true
      onMouseLeave={() => setIsHovered(false)} // Setează hover la false
    >
      <motion.div
        className="absolute text-white text-2xl font-bold font-mysubtitle"
        initial={{ y: 30, opacity: 0 }} // Titlul este ascuns inițial
        animate={{
          y: isHovered ? -40 : 30, // Mișcă titlul în sus sau în jos
          opacity: isHovered ? 1 : 0, // Face titlul vizibil sau invizibil
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {project.title}
        <motion.div
          className="w-32 h-1 bg-blue-500 rounded-full mx-auto mt-1"
          initial={{ scaleX: 0 }} // Underline-ul este ascuns inițial
          animate={{ scaleX: isHovered ? 1 : 0 }} // Underline-ul apare sau dispare
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }} // Delay pentru underline
        />
      </motion.div>

      {/* Cardul proiectului */}
      <motion.div
        onClick={onClick}
        className="relative h-60 w-full rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${project.images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, scale: 0.9 }} // Cardul este inițial invizibil și mic
        whileInView={{ opacity: 1, scale: 1 }} // Cardul apare și se scalează la intrarea în view
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: 20 }} // Cardul se mișcă în jos la hover
      >
        {/* Border animation */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 border-2 border-transparent transition-all duration-1000 ease-in-out group-hover:border-blue-500" />
        </div>

        {/* Icon */}
        <div className="absolute top-2 right-2 p-2 text-white hover:text-white transition">
          <Maximize2 size={20} />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
