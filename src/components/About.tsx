import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <h2 className="font-heading text-3xl font-extrabold">About</h2>
          <p className="mt-4 text-slate-300">
            I’m Jonathan Alvios, an aspiring AI Engineer and Data Analyst who thrives at the intersection of creativity and analytical rigor. 
            From sentiment analysis, chatbot development, and spam detection to AI-powered medical imaging, 
            I’m passionate about building any AI-related that leads to solutions that make a real-world impact.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-300">
            <li className="card">
              <span className="font-semibold text-white">HIMTI Activist (2023)</span> — Active member of HIMTI with experience in web 
              development (UI design) and organizing academic events, including scripting and sponsorship coordination.
            </li>
            <li className="card">
              <span className="font-semibold text-white">Volleyball Club (2024)</span> — Actively participate in regular training sessions 
              and campus activities to improve teamwork and discipline.
            </li>
            <li className="card">
              <span className="font-semibold text-white">Volunteer TFI</span> — Participated in social outreach programs at orphanages through donations and 
              educational activities. Also involved in environmental campaigns focused on proper waste management and cleanliness.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2"
        >
          <div className="relative">
            <img
              src="/Jonathan Alvios.jpg"
              alt="Jonathan Alvios"
              className="aspect-[3/4] w-full rounded-2xl object-cover object-center scale-[0.7]"
            />
            {/* <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-500/10" /> */}
            <div className="absolute -left-4 -top-4 h-20 w-20 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 opacity-50 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-40 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
