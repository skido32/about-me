"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Blog() {
  const articles = [
    {
      title: "Building Accessible React Components",
      excerpt:
        "Learn how to create React components that are accessible to all users, including those with disabilities.",
      date: "May 15, 2023",
      image: "/placeholder.svg?height=200&width=400",
      slug: "building-accessible-react-components",
    },
    {
      title: "State Management in 2023: Beyond Redux",
      excerpt: "Exploring modern state management solutions for React applications and when to use them.",
      date: "April 3, 2023",
      image: "/placeholder.svg?height=200&width=400",
      slug: "state-management-2023-beyond-redux",
    },
    {
      title: "Optimizing Next.js Applications for Performance",
      excerpt: "Practical tips and techniques to improve the performance of your Next.js applications.",
      date: "March 12, 2023",
      image: "/placeholder.svg?height=200&width=400",
      slug: "nextjs-performance",
    },
  ]

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                </div>
                <CardHeader>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{article.excerpt}</CardDescription>
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

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
