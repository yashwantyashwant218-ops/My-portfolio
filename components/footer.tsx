"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail } from "lucide-react"
import { socialLinks } from "@/lib/social"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground flex items-center gap-2"
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </motion.span>{" "}
            by{" "}
            <span className="text-primary font-medium">Yashwant</span>
          </motion.p>

          <div className="flex items-center gap-4">
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={socialLinks.email}
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
