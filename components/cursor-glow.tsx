"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50 hidden md:block"
      animate={{
        x: mousePosition.x - 200,
        y: mousePosition.y - 200,
        opacity: isVisible ? 0.15 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <div
        className="w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(0,212,255,0) 70%)",
        }}
      />
    </motion.div>
  )
}
