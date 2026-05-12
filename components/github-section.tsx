"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink, GitFork, Star, GitCommit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/lib/social"

const stats = [
  { icon: GitCommit, label: "Commits", value: "150+" },
  { icon: GitFork, label: "Repositories", value: "15+" },
  { icon: Star, label: "Stars", value: "20+" },
]

export function GithubSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary neon-text">GitHub</span> Profile
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center neon-border"
            >
              <Github className="h-16 w-16 text-primary" />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">@yashwant</h3>
              <p className="text-muted-foreground mb-4">
                Passionate about automation, Python, and building innovative solutions.
                Always learning and exploring new technologies.
              </p>

              <div className="flex justify-center md:justify-start gap-6 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-2 text-primary mb-1">
                      <stat.icon className="h-4 w-4" />
                      <span className="text-xl font-bold">{stat.value}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Button
                className="neon-border"
                asChild
              >
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View GitHub Profile
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contribution Graph Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 p-4 bg-secondary/30 rounded-xl"
          >
            <p className="text-sm text-muted-foreground text-center mb-4">
              Contribution Activity
            </p>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }).map((_, i) => {
                const contributionClass =
                  i % 7 === 0
                    ? "bg-primary"
                    : i % 4 === 0
                    ? "bg-primary/50"
                    : "bg-secondary"

                return (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.2, delay: 0.7 + i * 0.02 }}
                    className={`aspect-square rounded-sm ${contributionClass}`}
                  />
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
