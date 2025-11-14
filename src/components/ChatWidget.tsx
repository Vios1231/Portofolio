import React from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

type Msg = { id: string; from: 'user' | 'bot'; text: string }

const KNOWLEDGE = [
  {
    q: ['skills', 'what do you know', 'tech stack', 'technologies', 'tools'],
    a: 'Core tech: Python, TensorFlow, PyTorch, Scikit-learn, Pandas, SQL, Streamlit, Flask, NLTK, spaCy. Soft skills: Problem Solving, Communication, Teamwork, Creativity.'
  },
  {
    q: ['projects', 'showcase', 'portfolio'],
    a: 'Highlighted projects: ScolioVis (scoliosis classification), SpamShield (spam detector with LSTM), FaceMe-AI (emotion recognition), LLM-Based Chatbot with RAG.'
  },
  {
    q: ['contact', 'hire', 'email', 'reach'],
    a: 'Email: alviosboen@gmail.com. LinkedIn: /in/jonathan-alvios-739801258/. GitHub: github.com/Vios1231.'
  },
  {
    q: ['about', 'bio', 'who are you'],
    a: 'I’m Jonathan Alvios, an aspiring AI Engineer & Data Analyst focused on NLP, CV, and applied machine learning.'
  }
]

function matchAnswer(input: string): string {
  const t = input.toLowerCase()
  for (const item of KNOWLEDGE) {
    if (item.q.some(k => t.includes(k))) return item.a
  }
  // fallback
  return "I’m Jonathan’s AI helper. Ask me about his skills, projects, or how to contact him!"
}

const ChatWidget: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [msgs, setMsgs] = React.useState<Msg[]>([
    { id: 'init', from: 'bot', text: 'Hi! I’m an AI-style assistant. Ask about Jonathan’s skills, projects, or contact info. I am still imperfect i can only answer with limited knowledge due to under construction.' }
  ])
  const [text, setText] = React.useState('')

  function sendMessage(e?: React.FormEvent) {
    if (e) e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    const userMsg: Msg = { id: crypto.randomUUID(), from: 'user', text: trimmed }
    setMsgs(prev => [...prev, userMsg])
    setText('')
    setTimeout(() => {
      const reply: Msg = { id: crypto.randomUUID(), from: 'bot', text: matchAnswer(trimmed) }
      setMsgs(prev => [...prev, reply])
    }, 500)
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-white shadow-glow hover:bg-brand-500 focus-ring"
          aria-label="Open chat"
        >
          <MessageCircle size={18} /> Ask about Jonathan
        </button>
      )}

      {open && (
        <div className="fixed bottom-5 right-5 z-40 w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur">
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
            <div className="font-semibold">AI Chat</div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-1 hover:bg-slate-800 focus-ring"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>
          <div className="max-h-80 space-y-2 overflow-y-auto p-4">
            {msgs.map(m => (
              <div key={m.id} className={m.from === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className={
                    'inline-block max-w-[80%] rounded-2xl px-3 py-2 text-sm ' +
                    (m.from === 'user'
                      ? 'bg-brand-600 text-white'
                      : 'bg-slate-800 text-slate-100')
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-slate-800 p-3">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus-ring"
              placeholder="Ask about skills, projects, contact..."
            />
            <button type="submit" className="rounded-xl bg-brand-600 p-2 text-white hover:bg-brand-500 focus-ring" aria-label="Send">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default ChatWidget
