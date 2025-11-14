import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 border-t border-slate-800/80 bg-slate-950/80">
      <div className="section flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <p className="text-sm text-slate-400">
          © 2025 <span className="text-slate-200">Jonathan Alvios</span>. All rights reserved.
        </p>
        <p className="text-sm text-slate-400">
          Built with <span className="text-rose-400">❤️</span> using React + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  )
}

export default Footer
