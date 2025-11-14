import React from 'react'

type TypewriterProps = {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 60,
  deletingSpeed = 35,
  delayBetween = 1200,
}) => {
  const [index, setIndex] = React.useState(0)
  const [subIndex, setSubIndex] = React.useState(0)
  const [deleting, setDeleting] = React.useState(false)
  const [blink, setBlink] = React.useState(true)

  React.useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const timeout = setTimeout(() => setDeleting(true), delayBetween)
      return () => clearTimeout(timeout)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const t = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(t)
  }, [subIndex, index, deleting, words, typingSpeed, deletingSpeed, delayBetween])

  React.useEffect(() => {
    const t = setInterval(() => setBlink((prev) => !prev), 500)
    return () => clearInterval(t)
  }, [])

  return (
    <span className="whitespace-nowrap">
      {words[index].substring(0, subIndex)}
      <span className="inline-block w-2">
        <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
      </span>
    </span>
  )
}

export default Typewriter
