import React from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

type Msg = { id: string; from: 'user' | 'bot'; text: string }

const KNOWLEDGE = [
  {
    q: ["skill", "skills", "tech stack", "tools", "tech", "what can you do", "technology", "technologies", "stacks", "stack"],
    a: `Jonathan's main skills include Python, TensorFlow, PyTorch, scikit-learn, NLP, computer vision, data analysis with Pandas and SQL, backend development with Flask and FastAPI, and familiarity with Git, GitHub, and Postman.`
  },
  {
    q: ["project", "projects", "portfolio", "showcase", "work", "build", "case study", "case studies", "examples"],
    a: `Some highlighted projects are ScolioVis for scoliosis classification using CNN, SpamShield for LSTM-based spam detection, FaceMe AI for emotion recognition, an LLM chatbot with RAG, and a food review sentiment system using NLP and TF-IDF.`
  },
  {
    q: ["education", "school", "study", "kuliah", "college", "university", "background"],
    a: `Jonathan is studying Computer Science with a focus on artificial intelligence, machine learning, deep learning, computer vision, and NLP.`
  },
  {
    q: ["experience", "work experience", "internship", "job", "career"],
    a: `Jonathan has experience building NLP sentiment systems, computer vision classification models, RAG-based chatbots, and backend APIs, and is seeking opportunities in AI engineering or data-related roles.`
  },
  {
    q: ["achievements", "awards", "certificates", "certification", "prestasi"],
    a: `Jonathan has built multiple machine learning models, completed various AI and ML learning programs, and developed a portfolio that demonstrates practical applied AI work.`
  },
  {
    q: ["service", "services", "offer", "hire you for", "what can you do for me", "freelance", "job role", "roles"],
    a: `Jonathan offers machine learning model development, NLP and chatbot systems, computer vision classification, data analysis and dashboards, and backend or API development for ML applications.`
  },
  {
    q: ["hobby", "hobbies", "interest", "interests"],
    a: `Jonathan's interests include learning about AI and machine learning, exploring new technologies, gaming, music, and building personal projects.`
  },
  {
    q: ["contact", "hire", "email", "reach", "connect", "linkedin", "github", "social", "talk", "message"],
    a: `You can reach Jonathan via email at alviosboen@gmail.com, on LinkedIn at linkedin.com/in/jonathan-alvios-739801258, or on GitHub at github.com/Vios1231.`
  },
  {
    q: ["about", "bio", "who are you", "who is jonathan", "about jonathan"],
    a: `Jonathan is an aspiring AI engineer and data analyst with interests in NLP, computer vision, and practical machine learning projects.`
  },
  {
  q: ["scoliovis", "scolio vis", "scoliosis project", "scoliosis ai", "Scoliovis"],
  a: `An AI model for early scoliosis detection using CNN and transfer learning (VGG16). Trained on 259 labeled X-ray images with preprocessing, augmentation, and class balancing. Achieved 90% accuracy, 88% precision, and 92% recall, providing an efficient diagnostic tool for scoliosis screening.`
  },
  {
  q: ["spamshield", "spam shield", "spam detector", "email spam", "spam project", "Spamshield"],
  a: `SpamShield is a machine learning project for automatic spam email detection. This project applies Natural Language Processing (NLP) techniques and supervised learning algorithms such as Logistic Regression, Linear SVC, Random Forest, XGBoost, and Naive Bayes to classify messages as spam or not spam.`
  },
  {
  q: ["faceme", "faceme ai", "emotion recognition", "face emotion", "Faceme"],
  a: `FaceMe AI is a CNN project aimed at distinguishing between real and AI-generated images (deepfake/GAN). The project includes preprocessing, augmentation, training, evaluation with accuracy, precision, recall, as well as Flask deployment so that users can upload images and get predictions automatically.`
  },
  {
  q: ["rag", "llm chatbot", "rag chatbot", "document chatbot", "Rag"],
  a: `The LLM Chatbot Project with RAG is a chatbot that can answer document-based questions using retrieval augmented generation with embedding and indexing.`
  },
  {
  q: ["MediGenAI", "medi", "medigenAI", "Medigen AI", "medigen"],
  a: `AI system that analyzes chest X-ray images using Vision Transformer (ViT) and generates professional medical reports with LLaMA. Built with Gradio for an interactive web interface and Grad-CAM visualization.`
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