"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Github } from "lucide-react"; // Importă iconițele Code și Github

const Credits = () => {
  return (
    <motion.footer
      className="bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 py-2 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center gap-3">
          {/* Iconița Code */}
          <motion.div
            className="text-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Code size={18} />
          </motion.div>

          <div className="flex items-center gap-2 font-poppins text-sm text-black">
            <p className="font-semibold font-poppins">Ciprian Dumitrasc</p>
            <span className="text-gray-400">|</span>
            <p className="font-semibold font-poppins">kiprinel05</p>
          </div>

          <motion.a
            href="https://github.com/kiprinel05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={18} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Credits;
