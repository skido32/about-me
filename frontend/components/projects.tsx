"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
      featured: true,
      color: "from-violet-500/20 to-teal-500/20",
      tagColor: "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Material UI", "Redux"],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
      featured: true,
      color: "from-teal-500/20 to-amber-500/20",
      tagColor: "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "OpenWeather API", "Chart.js", "CSS"],
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
      featured: false,
      color: "from-amber-500/20 to-rose-500/20",
      tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills (this website).",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      demo: "#",
      featured: false,
      color: "from-rose-500/20 to-violet-500/20",
      tagColor: "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, personal projects, and client collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color}`}></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 mix-blend-overlay"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-gradient-to-r from-violet-500 to-teal-500 border-none">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className={`border-none ${project.tagColor}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gradient-border" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gradient-bg" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="gradient-border" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
