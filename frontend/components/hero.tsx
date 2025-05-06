"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 section-pattern dark:section-pattern-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] bg-[size:30px_30px] -z-10" />

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">Shunsuke Kido</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">Web Developer</h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              I mainly work on backend development while also keeping an interest in frontend technologies.
              I'm constantly learning and striving to write better code and create more user-friendly experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={scrollToContact} size="lg" className="gradient-bg">
                Contact Me
              </Button>
              {/* <Button onClick={scrollToProjects} variant="outline" size="lg" className="gradient-border">
                View Projects
              </Button> */}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/skido32" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-violet-500/10 hover:bg-violet-500/20 text-violet-600 dark:text-violet-400"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/shunsuke-kido-155b45362/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-teal-500/10 hover:bg-teal-500/20 text-teal-600 dark:text-teal-400"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:souen0823@gmail.com" aria-label="Email">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-teal-500/30 to-amber-500/30 animate-pulse"></div>
              <Image
                src="/IMG_6553.jpg?height=320&width=320"
                alt="Profile"
                width={320}
                height={320}
                className="object-cover relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce rounded-full bg-primary/10 hover:bg-primary/20"
            onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
