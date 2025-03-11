"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github } from "lucide-react";

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  technologies?: string[];
  images: string[];
  github: string;
}

interface ProjectPopupProps {
  project: Project | null;
  onClose: () => void;
  onImageClick: (img: string) => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({
  project,
  onClose,
  onImageClick,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-3xl p-4 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white rounded-2xl p-8 max-w-4xl w-full shadow-xl border border-white/20 overflow-auto max-h-[80vh] flex flex-col items-center text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-500 transition-transform hover:rotate-90"
          >
            <X size={28} />
          </button>
          <h2 className="text-3xl font-bold mb-2 text-gray-900 font-mysubtitle">
            {project.title}
          </h2>
          {project.subtitle && (
            <h3 className="text-xl text-gray-600 mb-4">{project.subtitle}</h3>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
          >
            <Github size={20} className="mr-2" />
            View on GitHub
          </a>
          <p className="text-gray-700 mb-6 px-4 font-poppins">
            {project.description}
          </p>

          {project.features && (
            <div className="w-full text-left mb-6">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 font-mysubtitle">
                Features
              </h4>
              <ul className="list-disc list-inside text-gray-700 font-poppins">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="mb-1">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && (
            <div className="w-full text-left mb-6">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 font-mysubtitle">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-poppins"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="w-full">
            <h4 className="text-xl font-semibold mb-4 text-gray-900 font-mysubtitle">
              Screenshots
            </h4>
            <div className="flex justify-center gap-4 overflow-x-auto max-w-full pb-4">
              {project.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="flex-shrink-0 w-48 h-32 rounded-lg shadow-md overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onImageClick(img)}
                >
                  <img
                    src={img}
                    alt={`Project Image ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectPopup;
