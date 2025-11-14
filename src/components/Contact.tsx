import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, FileText } from "lucide-react";
import CVModal from "./CVModal"; // ✅ tambahkan ini

const Contact: React.FC = () => {
  const [showCV, setShowCV] = useState(false); // ✅ state untuk modal

  return (
    <section id="contact" className="section bg-transparent">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-extrabold text-white"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-3 text-slate-300 max-w-2xl mx-auto"
        >
          I’m open to exploring exciting projects, collaborations, 
          or career opportunities. Feel free to reach out via email, phone, or social media.
        </motion.p>

        {/* Email & Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="flex items-center gap-3 text-slate-200 bg-slate-800/50 px-5 py-3 rounded-xl backdrop-blur-md hover:bg-slate-700/50 transition">
            <Mail size={18} className="text-indigo-400" />
            <span>alviosboen@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-slate-200 bg-slate-800/50 px-5 py-3 rounded-xl backdrop-blur-md hover:bg-slate-700/50 transition">
            <Phone size={18} className="text-indigo-400" />
            <span>+6285215497116</span>
          </div>
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://instagram.com/alviossss"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 font-medium text-white hover:opacity-90 transition"
          >
            <Instagram size={18} /> Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/jonathan-alvios-739801258/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-500 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>

          {/* Tombol Modal CV */}
          <button
            onClick={() => setShowCV(true)}
            className="flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-2 font-medium text-white hover:bg-slate-700 transition"
          >
            <FileText size={18} /> View My CV
          </button>
        </motion.div>

        {/* Modal CV muncul di bawah */}
        <CVModal isOpen={showCV} onClose={() => setShowCV(false)} />

        {/* AI Hint Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 text-slate-400 text-sm"
        >
          Explore more through my AI — it’s available at the bottom-right corner of the screen.
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
