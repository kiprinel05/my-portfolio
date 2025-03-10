"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const qualities = [
  {
    title: "Communication",
    description:
      "I effectively convey ideas and actively listen to others to ensure clarity and understanding.",
  },
  {
    title: "Problem-solving",
    description:
      "I excel at analyzing challenges and developing efficient, innovative solutions.",
  },
  {
    title: "Adaptability",
    description:
      "I quickly adjust to new situations, embracing change and learning from it.",
  },
];

const AboutSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollProgress(Math.min(100 + scrollY * 0.1, 180));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white text-gray-900 py-20 px-4 relative" id="about">
      <div className="container mx-auto text-center md:text-left max-w-4xl">
        {/* Animated Title */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-4xl font-bold mb-4 relative inline-block font-mytitle"
        >
          About Me
          <motion.span
            className="absolute left-0 -bottom-2 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.h2>

        {/* Introductory Text */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          className="text-lg text-gray-700 mb-10 font-poppins font-semilight"
        >
          Hello! I am a passionate and dedicated individual who thrives on
          creativity, precision, and perseverance. I always strive to bring my
          ideas to life through innovative solutions and meticulous attention to
          detail.
          <br />
          <br />
          Here are some of the qualities that define me best:
        </motion.p>

        {/* Qualities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="p-6 rounded-2xl shadow-xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-500 to-cyan-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-300 opacity-30 rounded-2xl blur-xl"></div>
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-lg relative z-10 hover:text-cyan-300 transition-colors font-mysubtitle">
                {quality.title}
              </h3>
              <p className="text-white relative z-10 drop-shadow-md font-poppins">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
