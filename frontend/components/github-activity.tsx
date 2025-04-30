"use client"

import { motion } from "framer-motion"
import { Github, GitFork, Star, GitPullRequest, GitCommit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function GitHubActivity() {
  // Sample data - replace with actual data from GitHub API in production
  const contributionData = [
    { day: "Mon", count: 4 },
    { day: "Tue", count: 2 },
    { day: "Wed", count: 7 },
    { day: "Thu", count: 5 },
    { day: "Fri", count: 3 },
    { day: "Sat", count: 1 },
    { day: "Sun", count: 0 },
  ]

  const pinnedRepos = [
    {
      name: "awesome-project",
      description: "A collection of awesome resources for web development",
      stars: 124,
      forks: 32,
      language: "JavaScript",
      url: "https://github.com/yourusername/awesome-project",
    },
    {
      name: "react-component-library",
      description: "A reusable React component library with TypeScript support",
      stars: 87,
      forks: 15,
      language: "TypeScript",
      url: "https://github.com/yourusername/react-component-library",
    },
    {
      name: "nextjs-blog-starter",
      description: "A starter template for creating blogs with Next.js",
      stars: 56,
      forks: 23,
      language: "TypeScript",
      url: "https://github.com/yourusername/nextjs-blog-starter",
    },
  ]

  const recentActivity = [
    {
      type: "commit",
      repo: "nextjs-blog-starter",
      message: "Fix responsive layout issues on mobile devices",
      date: "2 days ago",
    },
    {
      type: "pr",
      repo: "open-source-project",
      message: "Add dark mode support",
      date: "1 week ago",
    },
    {
      type: "issue",
      repo: "community-project",
      message: "Improve accessibility for navigation menu",
      date: "2 weeks ago",
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "commit":
        return <GitCommit className="h-4 w-4" />
      case "pr":
        return <GitPullRequest className="h-4 w-4" />
      case "issue":
        return <span className="inline-block h-4 w-4 text-xs font-bold">!</span>
      default:
        return <GitCommit className="h-4 w-4" />
    }
  }

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      HTML: "bg-orange-500",
      CSS: "bg-purple-500",
    }
    return colors[language] || "bg-gray-400"
  }

  return (
    <section id="github" className="py-20 px-4 section-pattern-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 text-sm font-medium mb-4">
            Open Source
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Activity</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My open source contributions and coding activity on GitHub.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-teal-500/5"></div>
              <CardHeader className="flex flex-row items-center justify-between relative z-10">
                <div>
                  <CardTitle>Contribution Activity</CardTitle>
                  <CardDescription>My GitHub contribution graph</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gradient-border" asChild>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Profile
                  </a>
                </Button>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="relative h-48 md:h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=250&width=800"
                    alt="GitHub Contribution Graph"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 flex justify-center gap-2">
                  {contributionData.map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-xs text-muted-foreground">{day.day}</div>
                      <div className="flex flex-col-reverse gap-1 mt-1">
                        {Array.from({ length: 7 }).map((_, i) => {
                          const colors = [
                            "bg-violet-200 dark:bg-violet-900",
                            "bg-violet-300 dark:bg-violet-800",
                            "bg-violet-400 dark:bg-violet-700",
                            "bg-violet-500 dark:bg-violet-600",
                            "bg-teal-400 dark:bg-teal-700",
                            "bg-teal-500 dark:bg-teal-600",
                            "bg-teal-600 dark:bg-teal-500",
                          ]
                          return (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-sm ${
                                i < day.count ? colors[Math.min(i, colors.length - 1)] : "bg-muted"
                              }`}
                            ></div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pinned Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <Card className="h-full border-none shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-amber-500/5"></div>
              <CardHeader className="relative z-10">
                <CardTitle>Pinned Repositories</CardTitle>
                <CardDescription>My featured GitHub repositories</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {pinnedRepos.map((repo, index) => (
                    <a key={index} href={repo.url} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="border border-border/50 rounded-lg p-4 hover:bg-muted/50 transition-colors hover:border-primary/30">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-lg">{repo.name}</h3>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center text-amber-500">
                              <Star className="h-4 w-4 mr-1 fill-amber-500" />
                              <span className="text-sm">{repo.stars}</span>
                            </div>
                            <div className="flex items-center text-teal-500">
                              <GitFork className="h-4 w-4 mr-1" />
                              <span className="text-sm">{repo.forks}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1">{repo.description}</p>
                        <div className="mt-3 flex items-center">
                          <span
                            className={`inline-block w-3 h-3 rounded-full mr-2 ${getLanguageColor(repo.language)}`}
                          ></span>
                          <span className="text-sm text-muted-foreground">{repo.language}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-none shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/5 via-transparent to-rose-500/5"></div>
              <CardHeader className="relative z-10">
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>My latest GitHub contributions</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 pb-4 border-b last:border-0">
                      <div className="mt-0.5 bg-muted rounded-full p-1.5">
                        {activity.type === "commit" && <GitCommit className="h-4 w-4 text-violet-500" />}
                        {activity.type === "pr" && <GitPullRequest className="h-4 w-4 text-teal-500" />}
                        {activity.type === "issue" && (
                          <span className="inline-block h-4 w-4 text-xs font-bold text-amber-500">!</span>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant="outline"
                            className={`font-normal border-none ${
                              activity.type === "commit"
                                ? "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300"
                                : activity.type === "pr"
                                  ? "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300"
                            }`}
                          >
                            {activity.repo}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{activity.date}</span>
                        </div>
                        <p className="text-sm mt-1">{activity.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
