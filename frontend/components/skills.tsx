"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-violet-500"
    if (level >= 80) return "bg-teal-500"
    if (level >= 70) return "bg-amber-500"
    return "bg-rose-500"
  }

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50 section-pattern-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300 text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency in various technologies.
          </p>
        </motion.div>

        <Tabs defaultValue="languages" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="languages" className="text-sm sm:text-base">Lang</TabsTrigger>
            <TabsTrigger value="frameworks" className="text-sm sm:text-base">Frameworks</TabsTrigger>
            <TabsTrigger value="tools" className="text-sm sm:text-base">Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="languages">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    { name: "Ruby", level: 90 },
                    { name: "SQL", level: 80 },
                    { name: "JavaScript", level: 80 },
                    { name: "TypeScript", level: 80 },
                    { name: "HTML", level: 70 },
                    { name: "CSS", level: 70 },
                    { name: "Python", level: 40 },
                    { name: "Java", level: 40 },
                  ].map((skill, index) => (
                    <motion.div key={index} variants={item}>
                      <div className="flex flex-col items-center p-4 rounded-lg bg-background hover:bg-accent transition-colors border border-border/50 hover:border-primary/30 shadow-sm">
                        <span className="font-medium mb-2">{skill.name}</span>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div
                            className={`${getSkillColor(skill.level)} h-2.5 rounded-full shimmer`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="frameworks">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      name: "Ruby on Rails",
                      color: "bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300",
                    },
                    { name: "Sidekiq", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300" },
                    {
                      name: "Rspec",
                      color: "bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300",
                    },
                    { name: "Jquery", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300" },
                    { name: "React", color: "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300" },
                    {
                      name: "Next.js",
                      color: "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300",
                    },
                    { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300" },
                    { name: "Material UI", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300" },
                    {
                      name: "Styled Components",
                      color: "bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300",
                    },
                    { name: "Jest", color: "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300" },
                    {
                      name: "Apollo Client",
                      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
                    },
                    { name: "GraphQL", color: "bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300" },
                  ].map((skill, index) => (
                    <motion.div key={index} variants={item}>
                      <Badge variant="outline" className={`px-3 py-1 text-sm border-none ${skill.color}`}>
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    { name: "Git", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300" },
                    { name: "GitHub", color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300" },
                    { name: "VS Code", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300" },
                    { name: "Docker", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300" },
                    { name: "AWS", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300" },
                    { name: "Cursor", color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300" },
                    { name: "Copilot", color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300" },
                  ].map((skill, index) => (
                    <motion.div key={index} variants={item}>
                      <Badge variant="outline" className={`px-3 py-1 text-sm border-none ${skill.color}`}>
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
