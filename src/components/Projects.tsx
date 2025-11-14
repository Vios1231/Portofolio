import React from 'react'
import { motion } from 'framer-motion'
import { Github, Link } from 'lucide-react'

type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'ScolioVis',
    description: 'Developed an AI model for early scoliosis detection using CNN and transfer learning (VGG16) for medical imaging.',
    image: 'ProjectPics/ScolioVis.png',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/Vios1231/ScolioVis---AI-Powered-Scoliosis-Detectors',
  },
  {
    title: 'LLM based QA Chatbot with RAG',
    description: 'Developed an AI-powered Q&A chatbot using Retrieval-Augmented Generation (RAG) for accurate, context-aware information retrieval and response generation.',
    image: 'ProjectPics/Chatbot-RAG.png',
    tech: ['Python', 'Flask', 'FAISS', 'LangChain'],
    github: 'https://github.com/Vios1231/LLM-based-Q-A-Chatbot-with-RAG',
  },
  {
    title: 'MediGenAI',
    description: 'Developed a multimodal AI system integrating image and text analysis to automatically generate medical reports.',
    image: 'ProjectPics/MediGenAI.png',
    tech: ['Python', 'Pytorch', 'Transformers'],
    github: 'https://github.com/Vios1231/Multi-Modal-AI-System-for-Automated-Medical-Report-Generation',
  },
  {
    title: 'FaceMe AI Recogniton',
    description: 'Built a CNN-based system to distinguish real and AI-generated (deepfake/GAN) images and Flask-based deployment for automated image prediction.',
    image: 'ProjectPics/FaceMe.png',
    tech: ['Python', 'Flask', 'Keras', 'Tensorflow'],
    github: 'https://github.com/Vios1231/FaceMe-AI-Reccognition',
  },
  {
    title: 'SpamShield',
    description: 'Built a web-based email spam detection system that classifies messages as spam or not spam using multiple ML models.',
    image: 'ProjectPics/SpamShield.png',
    tech: ['Python', 'Flask', 'Skicit-learn'],
    github: 'https://github.com/Vios1231/SpamShield',
  },
  {
    title: 'Coming Soon',
    description: 'AI related probably',
    image: 'ProjectPics/comingsoon.png',
    tech: ['???', '???', '???'],
    github: 'https://github.com/Vios1231',
  },
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="mb-10">
        <h2 className="font-heading text-3xl font-extrabold">Projects</h2>
        <p className="mt-2 text-slate-300">A selection of data-driven builds and experiments.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-inner-glow"
          >
            <div className="relative">
              <img
                src={p.image}
                alt={p.title}
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost focus-ring"
                    aria-label={`${p.title} GitHub`}
                  >
                    <Github size={16} /> Github
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary focus-ring"
                    aria-label={`${p.title} Demo`}
                  >
                    <Link size={16} /> Live
                  </a>
                )}
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 ring-1 ring-accent-500/50 transition-opacity group-hover:opacity-100" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
