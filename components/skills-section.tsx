"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const technicalSkills = [
  { name: "Python Basics", level: 65 },
  { name: "n8n Automation", level: 75 },
  { name: "Workflow Automation", level: 70 },
  { name: "Git & GitHub", level: 60 },
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
  { name: "JavaScript Basics", level: 55 },
  { name: "AI Basics", level: 50 },
  { name: "Robotics", level: 45 },
]

const softSkills = [
  { name: "Communication Skills", level: 90 },
  { name: "Public Speaking", level: 85 },
  { name: "Problem Solving", level: 80 },
  { name: "VS Code", level: 70 },
]

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string
  level: number
  delay: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary neon-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A combination of technical expertise and soft skills that help me build and communicate effectively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-8 text-primary">
              Technical Skills
            </h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-8 text-primary">
              Soft Skills
            </h3>
            {softSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
