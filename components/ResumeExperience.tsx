"use client";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { Download } from "lucide-react";

export default function ResumeExperience() {
  return (
    <div className="flex flex-col items-center justify-center space-y-20 py-20">
      <motion.div
        className="bg-gray-900 text-white p-10 rounded-2xl shadow-lg text-center w-3/4 max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Download My CV</h2>
        <p className="text-gray-400 mb-6">
          Click the button below to download my latest CV.
        </p>
        <motion.a
          href="/cv.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
        >
          <Download size={20} /> Download
        </motion.a>
      </motion.div>

      <Parallax bgImage="/background.jpg" strength={300} className="w-full">
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Experience & Education
          </h2>
          <div className="flex flex-col space-y-10 max-w-4xl mx-auto">
            {[
              "Software Engineer Intern",
              "University Degree",
              "Freelance Projects",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold">{item}</h3>
                <p className="text-gray-600 mt-2">
                  Description of {item} goes here.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Parallax>
    </div>
  );
}
