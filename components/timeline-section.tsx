"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Code, GitBranch, Brain, Workflow, Cpu } from "lucide-react"

const timelineItems = [
  {
    icon: GraduationCap,
    title: "Completed 12th Grade",
    description: "Finished school in 2026 with a strong foundation in science and mathematics",
    date: "2026",
  },
  {
    icon: Code,
    title: "Started Learning Python",
    description: "Began my programming journey with Python, building small projects and scripts",
    date: "2024",
  },
  {
    icon: GitBranch,
    title: "Learned Git & GitHub",
    description: "Mastered version control and started contributing to open-source projects",
    date: "2024",
  },
  {
    icon: Brain,
    title: "Exploring AI and Automation",
    description: "Diving into artificial intelligence concepts and building automated solutions",
    date: "2024-Present",
  },
  {
    icon: Workflow,
    title: "Working with n8n Workflows",
    description: "Creating powerful automation workflows to streamline various processes",
    date: "Present",
  },
  {
    icon: Cpu,
    title: "Learning Robotics and ML",
    description: "Currently exploring robotics and machine learning to build intelligent systems",
    date: "Present",
  },
]

export function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="journey" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learning <span className="text-primary neon-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My path from a curious student to an aspiring developer and automation enthusiast.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
          />

          {timelineItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 inline-block"
                >
                  <span className="text-xs text-primary font-mono mb-2 block">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Center dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 neon-border"
              >
                <item.icon className="h-5 w-5 text-primary" />
              </motion.div>

              {/* Empty space for the other side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
