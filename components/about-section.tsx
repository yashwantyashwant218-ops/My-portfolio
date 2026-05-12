"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Rocket, Brain, MessageSquare } from "lucide-react"

const highlights = [
  {
    icon: Sparkles,
    title: "Fast Learner",
    description: "Quick to pick up new technologies and concepts",
  },
  {
    icon: Rocket,
    title: "Project Builder",
    description: "Passionate about building real-world applications",
  },
  {
    icon: Brain,
    title: "Creative Thinker",
    description: "Finding innovative solutions to complex problems",
  },
  {
    icon: MessageSquare,
    title: "Strong Communicator",
    description: "Clear articulation of ideas and concepts",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary neon-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 neon-border">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m a passionate tech enthusiast who completed my 12th grade in
                2026 and is now diving deep into the world of technology and
                artificial intelligence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently, I&apos;m learning <span className="text-primary">Python</span>,
                exploring <span className="text-primary">automation systems</span>,
                and building workflows with <span className="text-primary">n8n</span>.
                My journey into <span className="text-primary">robotics</span> and{" "}
                <span className="text-primary">machine learning</span> has just begun,
                and I&apos;m excited about the endless possibilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in learning by doing. Every project I work on teaches me
                something new, and I&apos;m always eager to take on challenges that push
                me beyond my comfort zone. My goal is to build innovative solutions
                that make a real impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
