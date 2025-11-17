import React from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

type Msg = { id: string; from: 'user' | 'bot'; text: string }

const KNOWLEDGE = [
  {
    q: [
      "skill", "skills", "tech stack", "tools", "tech", "what can you do",
      "technology", "technologies", "stacks", "stack"
    ],
    a: `Here are Jonathan's main skills:

**AI / Machine Learning**
• Python, TensorFlow, PyTorch  
• Scikit-learn, Numpy, Tensorflow  
• Computer Vision (OpenCV, CNN)  
• NLP (NLTK, spaCy, Transformers)

**Data**
• Pandas, NumPy, SQL  
• Data Cleaning, Feature Engineering  
• Data Visualization (Matplotlib, Seaborn)

**Backend**
• Flask, FastAPI, Streamlit, Gradio 
• REST API Development

**Others**
• Git, GitHub, Postman, Replit, Render, 
• Problem Solving, Communication, Teamwork`
  },
  {
    q: [
      "project", "projects", "portfolio", "showcase", "work", "build",
      "case study", "case studies", "examples"
    ],
    a: `Highlighted Projects:

🎯 **ScolioVis** — CNN-based scoliosis classification.  
📨 **SpamShield** — Email spam detector using LSTM.  
🙂 **FaceMe AI** — Emotion recognition with CNN.  
🤖 **LLM Chatbot with RAG** — Document-augmented chatbot prototype.  
🛒 **Food Review Sentiment System** — NLP + TF-IDF + Cosine similarity for restaurant recommendation.  
🎮 **Duallies Game Logic** — Game architecture & AI helper for logic simulation.`
  },
  {
    q: [
      "education", "school", "study", "kuliah", "college", "university", "background"
    ],
    a: `Jonathan is pursuing a degree in Computer Science with a strong focus on:
• Artificial Intelligence  
• Aspiring Data Analyst/Science
• Machine Learning Engineering
• Deep Learning Models, Computer Vision, NLP
He has completed multiple AI/ML courses and independent projects.`
  },
  {
    q: [
      "experience", "work experience", "internship", "job", "career"
    ],
    a: `Jonathan has hands-on experience building AI and data solutions including:
• NLP sentiment analysis systems  
• CV classification models  
• Chatbots with custom embeddings  
• Backend API development  
He is actively seeking AI Engineer / Data roles.`
  },
  {
    q: [
      "achievements", "awards", "certificates", "certification", "prestasi"
    ],
    a: `Some of Jonathan's notable achievements:
• Built multiple ML systems from scratch  
• Completed several AI specializations  
• Contributed to various open-source ML experiments  
• Strong portfolio demonstrating real applied AI work`
  },
  {
    q: [
      "service", "services", "offer", "hire you for", "what can you do for me",
      "freelance", "job role", "roles"
    ],
    a: `Jonathan can help with:
• Machine Learning model development  
• NLP (Classification, RAG, Embeddings, Chatbots)  
• Computer Vision (Detection, Classification)  
• Data Analysis & dashboards  
• Backend/API for ML apps  
• AI project consulting`
  },
  {
    q: [
      "hobby", "hobbies", "interest", "interests"
    ],
    a: `Jonathan enjoys:  
• Learning AI & ML advancements  
• Experimenting with new tech  
• Gaming & music  
• Building personal projects`
  },
  {
    q: [
      "contact", "hire", "email", "reach", "connect", "linkedin", "github",
      "social", "talk", "message"
    ],
    a: `You can contact Jonathan here:

📧 Email — **alviosboen@gmail.com**  
💼 LinkedIn — **linkedin.com/in/jonathan-alvios-739801258**  
💻 GitHub — **github.com/Vios1231**

He's open for collaborations and opportunities!`
  },
  {
    q: ["about", "bio", "who are you", "who is jonathan", "about jonathan"],
    a: `Jonathan Alvios is an aspiring AI Engineer & Data Analyst focused on:
• NLP  
• Computer Vision  
• Machine Learning Enthusiasts
• AI-Related  
Passionate about building AI tools that solve real problems.`
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