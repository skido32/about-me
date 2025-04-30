"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Calendar, School } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Kakaku.com, Inc.",
      position: "Web Developer",
      period: "Apr 2021 - Present",
      description:
        "In my first year, I worked as a front-end engineer, primarily using React, TypeScript, Next.js, and GraphQL. From my second year onwards, I transitioned to a back-end engineer role, focusing on development with Ruby on Rails.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "GraphQL", "Ruby", "Rails", "MySQL"],
      type: "work"
    },
    {
      company: "Graduate School of Science and Technology, Kumamoto University — Department of Computer Science and Engineering",
      position: "Graduate Researcher",
      period: "Apr 2019 - Mar 2021",
      description:
        "Building on my undergraduate research, I continued working on recommendation systems during my graduate studies, using Python and Java for more advanced implementation and analysis.",
      technologies: ["Python" , "Java"],
      type: "education"
    },
    {
      company: "Fujitsu Limited",
      position: "Software Engineer Intern",
      period: "Aug 2020 (2weeks)",
      description:
        "I developed a part of the core functionality for a cloud backup product using HTML, CSS, and Ruby.",
      technologies: ["HTML", "CSS", "Ruby"],
      type: "work"
    },
    {
      company: "Department of Computer Science and Electrical Engineering, Faculty of Engineering, Kumamoto University",
      position: "Undergraduate Researcher",
      period: "Apr 2015 - Mar 2019",
      description:
        "During my undergraduate studies, I learned HTML, CSS, JavaScript, and C in various courses. In my fourth year, I joined a research lab where I primarily used Python and Java for research on recommendation systems.",
      technologies: ["Python", "Java", "C", "HTML", "CSS", "JavaScript"],
      type: "education"
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This introduces my career journey, including the lessons learned in university, as well as the companies I've had the opportunity to work with.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {exp.type === "work" ? (
                        <Building className="h-5 w-5 text-primary" />
                      ) : (
                        <School className="h-5 w-5 text-primary" />
                      )}
                      <CardTitle>{exp.position}</CardTitle>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base font-medium">{exp.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
