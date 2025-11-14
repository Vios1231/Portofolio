import React from 'react'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = React.useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })

  React.useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-slate-800 bg-slate-900/60 p-2 hover:bg-slate-800/60 transition focus-ring"
      aria-label="Toggle dark/light"
      title="Toggle dark/light"
    >
      {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-300" />}
    </button>
  )
}

export default ThemeToggle
