"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingEffectProps {
  texts: string[]
  className?: string
}

export function TypingEffect({ texts, className = "" }: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1))
          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1))
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
      />
    </span>
  )
}
