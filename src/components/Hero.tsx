import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'

const Hero: React.FC = () => {

  return (
    <section id="hero" className="relative section pt-28">
      {/* Animated gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.2),transparent_60%)]"
      />
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs text-slate-300"
        >
          Turning data into intelligent insights
        </motion.div>

        <motion.h1
          className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Jonathan Alvios — <span className="gradient-text">AI Engineer &amp; Data Analyst</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          I’m a passionate ML enthusiast &amp; AI Engineer with experience in deep learning, NLP, and computer vision.
          I love transforming raw data into impactful solutions.
        </motion.p>

        <motion.div
          className="mt-6 text-lg text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <span className="text-slate-400">Focus areas:</span>{' '}
          <strong className="gradient-text">
            <Typewriter
              words={[
                'Machine Learning',
                'Deep Learning',
                'Natural Language Processing',
                'Computer Vision',
                'Artificial Intelligence',
                'Data Analyst',
                'Chatbot Development',
                'Image Classification',
                'Sentiment Analysis',
                'Transformer Models',
                'AI Agents'
              ]}
              typingSpeed={60}
              deletingSpeed={30}
              delayBetween={1200}
            />
          </strong>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <a href="#projects" className="btn btn-primary focus-ring">View Projects</a>
          <a href="#contact" className="btn btn-ghost focus-ring">Contact Me</a>

        </motion.div>

        {/* Floating stats */}
        <div className="relative mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Models trained', value: '10+' },
            { label: 'Core skills', value: '12' },
            { label: 'Focus areas', value: '11' },
            { label: 'Years learning', value: '2+' }
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ delay: i * 0.08 }}
              className="card text-center"
            >
              <div className="text-2xl font-extrabold text-white">{s.value}</div>
              <div className="text-xs text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
