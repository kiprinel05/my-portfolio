"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./Projects/ProjectCard";
import ProjectPopup from "./Projects/ProjectsPopup";
interface Project {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  technologies?: string[];
  images: string[];
  github: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    <section className="bg-gray-900  text-white py-20 px-4" id="projects">
      <div className="container mx-auto max-w-6xl">
        {/* Titlu animat */}
        <motion.h2
          ref={titleRef}
          className="text-5xl font-bold mb-10 text-center font-mytitle"
          initial={{ opacity: 0, y: -50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Personal Projects
        </motion.h2>

        {/* Grid de proiecte cu animații */}
        <motion.div
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={gridInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Pop-up pentru proiect */}
        <ProjectPopup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onImageClick={setSelectedImage}
        />

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
