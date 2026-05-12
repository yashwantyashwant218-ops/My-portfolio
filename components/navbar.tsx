"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Github, Linkedin } from "lucide-react"
import { socialLinks } from "@/lib/social"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            className="text-xl font-bold text-primary neon-text"
            whileHover={{ scale: 1.05 }}
          >
            {"<Yashwant />"}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
