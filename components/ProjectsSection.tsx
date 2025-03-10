"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Github } from "lucide-react";

interface Project {
  title: string;
  subtitle?: string; // Subtitlu opțional
  description: string;
  features?: string[]; // Listă de funcționalități
  technologies?: string[]; // Tehnologii folosite
  images: string[];
  github: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data: Project[]) => setProjects(data))
      .catch((error) => console.error("Failed to load projects:", error));
  }, []);

  return (
    <section className="bg-gray-100 text-gray-900 py-20 px-4" id="projects">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold mb-10 text-center font-mytitle">
          My Personal Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="relative cursor-pointer h-60 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: `url(${project.images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute top-2 right-2 p-2 text-white hover:text-white transition">
                <Maximize2 size={20} />
              </div>

              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xl font-bold rounded-2xl font-mysubtitle">
                {project.title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pop-up pentru proiect */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-3xl p-4 overflow-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative bg-white rounded-2xl p-8 max-w-4xl w-full shadow-xl border border-white/20 overflow-auto max-h-[80vh] flex flex-col items-center text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-700 hover:text-gray-500 transition-transform hover:rotate-90"
                >
                  <X size={28} />
                </button>
                <h2 className="text-3xl font-bold mb-2 text-gray-900 font-mysubtitle">
                  {selectedProject.title}
                </h2>
                {selectedProject.subtitle && (
                  <h3 className="text-xl text-gray-600 mb-4">
                    {selectedProject.subtitle}
                  </h3>
                )}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
                >
                  <Github size={20} className="mr-2" />
                  View on GitHub
                </a>
                <p className="text-gray-700 mb-6 px-4 font-poppins">
                  {selectedProject.description}
                </p>

                {/* Listă de funcționalități */}
                {selectedProject.features && (
                  <div className="w-full text-left mb-6">
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 font-mysubtitle">
                      Features
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 font-poppins">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="mb-1">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tehnologii folosite */}
                {selectedProject.technologies && (
                  <div className="w-full text-left mb-6">
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 font-mysubtitle">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
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

                {/* Container imagini - FLEX ROW */}
                <div className="w-full">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 font-mysubtitle">
                    Screenshots
                  </h4>
                  <div className="flex justify-center gap-4 overflow-x-auto max-w-full pb-4">
                    {selectedProject.images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        className="flex-shrink-0 w-48 h-32 rounded-lg shadow-md overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImage(img)}
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
          )}
        </AnimatePresence>

        {/* Pop-up pentru imagine mărită */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-md p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Selected Project Image"
                className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
