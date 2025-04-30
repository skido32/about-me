"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowUpRight, Search, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

// Sample blog posts data
const allArticles = [
  {
    title: "Building Accessible React Components",
    excerpt:
      "Learn how to create React components that are accessible to all users, including those with disabilities.",
    content:
      "Accessibility is a crucial aspect of web development that ensures your applications can be used by everyone, including people with disabilities. In this article, we'll explore how to create React components that follow accessibility best practices.\n\nWe'll cover topics such as proper use of ARIA attributes, keyboard navigation, focus management, and semantic HTML. You'll learn how to test your components for accessibility issues and how to fix common problems.\n\nBy the end of this article, you'll have a solid understanding of how to build accessible React components that provide a great user experience for all users.",
    date: "May 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "building-accessible-react-components",
    tags: ["React", "Accessibility", "Frontend"],
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "State Management in 2023: Beyond Redux",
    excerpt: "Exploring modern state management solutions for React applications and when to use them.",
    content:
      "Redux has been the go-to state management solution for React applications for many years, but the landscape is evolving rapidly. In this article, we'll explore modern alternatives to Redux and when to use them.\n\nWe'll dive into solutions like Context API, Zustand, Jotai, Recoil, and XState. For each option, we'll discuss its strengths, weaknesses, and use cases. We'll also cover how to migrate from Redux to these newer solutions.\n\nBy the end of this article, you'll have a better understanding of the state management ecosystem in React and be able to choose the right tool for your next project.",
    date: "April 3, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "state-management-2023-beyond-redux",
    tags: ["React", "State Management", "Redux", "JavaScript"],
    readTime: "10 min read",
    featured: true,
  },
  {
    title: "Optimizing Next.js Applications for Performance",
    excerpt: "Practical tips and techniques to improve the performance of your Next.js applications.",
    content:
      "Performance is a critical aspect of user experience. In this article, we'll explore various techniques to optimize your Next.js applications for maximum performance.\n\nWe'll cover topics such as code splitting, lazy loading, image optimization, caching strategies, and server-side rendering. We'll also look at how to measure performance and identify bottlenecks in your application.\n\nBy implementing these techniques, you can significantly improve the loading speed, interactivity, and overall performance of your Next.js applications, leading to better user experience and higher conversion rates.",
    date: "March 12, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "nextjs-performance",
    tags: ["Next.js", "Performance", "Web Development", "React"],
    readTime: "12 min read",
    featured: false,
  },
  {
    title: "The Future of CSS: What's Coming in 2023 and Beyond",
    excerpt: "Exploring the latest CSS features and how they will change frontend development.",
    content:
      "CSS is constantly evolving, with new features being added regularly. In this article, we'll explore the latest CSS features and how they will impact frontend development in the coming years.\n\nWe'll cover topics such as CSS Container Queries, :has() selector, CSS Grid Level 2, Cascade Layers, and Scroll-Linked Animations. We'll also look at the current browser support for these features and how to use them in your projects today.\n\nBy staying up-to-date with the latest CSS features, you can build more modern, maintainable, and efficient web interfaces.",
    date: "February 28, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "future-of-css",
    tags: ["CSS", "Frontend", "Web Development"],
    readTime: "9 min read",
    featured: false,
  },
  {
    title: "Building a Personal Brand as a Developer",
    excerpt: "Tips and strategies for building a strong personal brand in the tech industry.",
    content:
      "In today's competitive job market, having a strong personal brand can be a significant advantage. In this article, we'll explore various strategies for building your personal brand as a developer.\n\nWe'll cover topics such as creating a portfolio, contributing to open source, writing technical articles, speaking at conferences, and networking effectively. We'll also discuss how to leverage social media platforms like Twitter, LinkedIn, and GitHub to showcase your expertise and connect with others in the industry.\n\nBy consistently working on your personal brand, you can increase your visibility, credibility, and opportunities in the tech industry.",
    date: "February 10, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "personal-branding-for-developers",
    tags: ["Career", "Personal Development", "Professional Growth"],
    readTime: "7 min read",
    featured: false,
  },
  {
    title: "Introduction to TypeScript for React Developers",
    excerpt: "A beginner-friendly guide to using TypeScript with React.",
    content:
      "TypeScript has become increasingly popular in the React ecosystem, offering improved developer experience and code quality. In this article, we'll introduce TypeScript to React developers who are new to the language.\n\nWe'll cover topics such as type annotations, interfaces, generics, and how to properly type React components, props, state, and hooks. We'll also look at common patterns and best practices for using TypeScript with React.\n\nBy the end of this article, you'll have a solid understanding of how to use TypeScript in your React projects and how it can help you write more robust and maintainable code.",
    date: "January 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "typescript-for-react-developers",
    tags: ["TypeScript", "React", "JavaScript", "Frontend"],
    readTime: "11 min read",
    featured: false,
  },
]

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Extract all unique tags
  const allTags = Array.from(new Set(allArticles.flatMap((article) => article.tags)))

  // Filter articles based on search and category
  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeCategory === "all") return matchesSearch
    if (activeCategory === "featured" && article.featured) return matchesSearch

    return article.tags.includes(activeCategory) && matchesSearch
  })

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <div className="container mx-auto max-w-2xl px-4 py-16 text-center">
          <div className="bg-muted p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">This page is temporarily unavailable</h2>
            <p className="text-muted-foreground mb-6">
              We apologize, but this page is currently under maintenance.
              <br />
              Please try again later.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="default" onClick={() => window.location.href = "/"}>
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </main>
  )

  return (
    <main className="min-h-screen bg-background">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 section-pattern-alt">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300 text-sm font-medium mb-4">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Thoughts, Tutorials, and Insights</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Exploring web development, technology trends, and sharing knowledge with the community.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <div className="mt-8 mb-12 max-w-2xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-border/50 focus:border-primary/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>

              <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mt-6">
                <TabsList className="w-full flex overflow-x-auto hide-scrollbar mb-2 px-0 justify-start">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  {allTags.map((tag) => (
                    <TabsTrigger key={tag} value={tag}>
                      {tag}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Blog Posts List */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {article.featured && (
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-gradient-to-r from-violet-500 to-teal-500 border-none">Featured</Badge>
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="text-sm">{article.date}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{article.readTime}</span>
                        </div>
                        <Link href={`/blog/${article.slug}`}>
                          <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                            {article.title}
                          </CardTitle>
                        </Link>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription className="text-base mb-4">{article.excerpt}</CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                          {article.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{article.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="w-full justify-between group" asChild>
                          <Link href={`/blog/${article.slug}`}>
                            Read Article
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </ThemeProvider>
    </main>
  )
}
