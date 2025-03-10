"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, MessageCircle } from "lucide-react"; // Importă iconițele

const ContactSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4" id="contact">
      <div className="container mx-auto text-center md:text-left max-w-2xl">
        {/* Animație pentru titlu */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4 font-mytitle"
        >
          Contact Me
        </motion.h2>

        {/* Formular cu animații */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 mb-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 transition text-sm font-roboto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 transition text-sm font-roboto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <textarea
              placeholder="Your Message"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 transition text-sm font-roboto"
              rows={4}
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 text-sm"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>

        {/* Socials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center md:justify-start gap-4"
        >
          {/* Textul "Follow Me" */}
          <h3 className="text-xl font-semibold font-mysubtitle">Follow Me</h3>

          {/* Butoanele pentru rețele sociale */}
          <div className="flex gap-4">
            {/* Instagram Button */}
            <motion.a
              href="https://instagram.com/cipriann05"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center justify-center"
            >
              <Instagram className="w-6 h-6 text-pink-500" />
            </motion.a>

            {/* LinkedIn Button */}
            <motion.a
              href="https://linkedin.com/cipriann05"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center justify-center"
            >
              <Linkedin className="w-6 h-6 text-blue-500" />
            </motion.a>

            {/* GitHub Button */}
            <motion.a
              href="https://github.com/kiprinel05"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center justify-center"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>

            {/* Discord Button */}
            <motion.a
              href="https://discord.com/parfu."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-6 h-6 text-purple-500" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
