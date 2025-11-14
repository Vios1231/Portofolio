import React from "react"

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-[90%] md:w-[70%] lg:w-[60%] h-[80%] bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-600 dark:text-slate-300 hover:text-red-500 transition"
        >
          ✕
        </button>

        {/* Preview CV PDF */}
        <iframe
          src="/CV-JonathanAlvios.pdf"
          className="w-full h-[90%]"
          title="Jonathan Alvios CV"
        ></iframe>

        {/* Tombol Download */}
        <div className="flex justify-center items-center p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <a
            href="/CV-JonathanAlvios.pdf"
            download="CV-JonathanAlvios.pdf"
            className="px-6 py-2 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default CVModal


// {/* <AnimatePresence>
//   {isOpen && (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.2 }}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
//     >
//       {/* isi modal */}
//     </motion.div>
//   )}
// </AnimatePresence> */}