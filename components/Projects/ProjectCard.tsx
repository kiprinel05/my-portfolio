"use client";

import React from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Project {
  title: string;
  images: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className="relative cursor-pointer h-60 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 group"
      style={{
        backgroundImage: `url(${project.images[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.3,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Border animation */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 group-hover:animate-border-load transition-all duration-1000 ease-in-out" />
      </div>

      <div className="absolute top-2 right-2 p-2 text-white hover:text-white transition">
        <Maximize2 size={20} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold rounded-2xl font-mysubtitle">
        {project.title}
      </div>

      <style jsx>{`
        @keyframes border-load {
          0% {
            clip-path: inset(0 100% 100% 0);
          }
          25% {
            clip-path: inset(0 0 100% 0);
          }
          50% {
            clip-path: inset(0 0 0 0);
          }
          100% {
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
