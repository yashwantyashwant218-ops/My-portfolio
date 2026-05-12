"use client"

import { ParticlesBackground } from "@/components/particles-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { TimelineSection } from "@/components/timeline-section"
import { GithubSection } from "@/components/github-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { CursorGlow } from "@/components/cursor-glow"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <GithubSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
