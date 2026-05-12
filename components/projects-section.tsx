"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Bot, Film, Workflow, Calculator, Cpu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI Chatbot",
    description:
      "An intelligent chatbot built with Python that can understand and respond to user queries using natural language processing.",
    technologies: ["Python", "NLP", "AI"],
    icon: Bot,
    github: "#",
    demo: "#",
  },
  {
    title: "Movie Recommendation System",
    description:
      "A content-based recommendation system that suggests movies based on user preferences and viewing history.",
    technologies: ["Python", "Machine Learning", "Pandas"],
    icon: Film,
    github: "#",
    demo: "#",
  },
  {
    title: "n8n Automation Workflows",
    description:
      "Collection of automation workflows for various tasks including social media posting, data synchronization, and notifications.",
    technologies: ["n8n", "APIs", "Automation"],
    icon: Workflow,
    github: "#",
    demo: "#",
  },
  {
    title: "Python Calculator",
    description:
      "A feature-rich calculator application with a modern GUI that supports basic and scientific operations.",
    technologies: ["Python", "Tkinter", "Math"],
    icon: Calculator,
    github: "#",
    demo: "#",
  },
  {
    title: "Robotics Mini Projects",
    description:
      "A collection of robotics experiments including line-following robots and sensor-based automation projects.",
    technologies: ["Arduino", "Robotics", "Sensors"],
    icon: Cpu,
    github: "#",
    demo: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This very portfolio you're looking at! Built with modern web technologies and featuring a futuristic design.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    icon: Globe,
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary neon-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some projects I&apos;ve built while learning. Each one taught me something valuable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors group-hover:scale-110 transform duration-300">
                  <project.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
