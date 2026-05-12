"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypingEffect } from "./typing-effect"
import { socialLinks } from "@/lib/social"

const roles = [
  "Automation Enthusiast",
  "Python Learner",
  "n8n Workflow Builder",
  "Robotics Explorer",
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <span className="text-primary neon-text">Yashwant</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TypingEffect texts={roles} />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              size="lg"
              className="neon-border hover:scale-105 transition-transform"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-transform"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
          >
            <Button
              size="lg"
              variant="ghost"
              className="border border-primary/20 text-primary hover:bg-primary/10 transition-transform"
              asChild
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-transform"
              asChild
            >
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href={socialLinks.email}
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-muted-foreground hover:text-primary">
            <ArrowDown className="h-8 w-8" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
