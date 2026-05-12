"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-12"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 neon-border"
          >
            <FileText className="h-10 w-10 text-primary" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Download My <span className="text-primary neon-text">Resume</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Get a comprehensive overview of my skills, projects, and experience.
            Available in PDF format.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="neon-border" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
