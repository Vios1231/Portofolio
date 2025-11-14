import React from 'react'
import { Github, Linkedin, Instagram } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur 
    supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/50 
    border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollToId('hero')}
          className="flex items-center gap-2 focus-ring"
          aria-label="Go to top"
        >
          <img
            src="/airplane.svg"
            alt="Logo"
            className="h-8 w-8 rounded-lg object-cover shadow-glow ring-1 ring-slate-200/30 dark:ring-slate-700/40"
          />
          <span className="font-heading text-lg font-extrabold tracking-wide">
            <span className="gradient-text">Jonathan Alvios</span>
          </span>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition focus-ring"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Vios1231"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-slate-800 bg-slate-900/60 p-2 hover:bg-slate-800/60 focus-ring"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-alvios-739801258/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-slate-800 bg-slate-900/60 p-2 hover:bg-slate-800/60 focus-ring"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://instagram.com/alviossss"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-slate-800 bg-slate-900/60 p-2 hover:bg-slate-800/60 focus-ring"
          >
            <Instagram size={18} />
          </a>
          <ThemeToggle />
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-600/50 to-transparent" />
    </header>
  )
}

export default Navbar
