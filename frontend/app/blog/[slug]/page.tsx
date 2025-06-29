import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, Share2, Twitter, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ArticleHeader from "./ArticleHeader"

// Sample blog posts data - same as in blog/page.tsx
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

export async function generateStaticParams() {
  return allArticles.map(article => ({ slug: article.slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const currentIndex = allArticles.findIndex((article) => article.slug === params.slug)

  if (currentIndex === -1) {
    notFound()
  }

  const article = allArticles[currentIndex]
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null

  // Function to format content with paragraphs
  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className={index > 0 ? "mt-6" : ""}>
        {paragraph}
      </p>
    ))
  }

  return (
    <main className="min-h-screen bg-background">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Header />

        {/* Article Header */}
        <section className="pt-32 pb-16 px-4 section-pattern">
          <div className="container mx-auto max-w-4xl">
            <ArticleHeader article={article} />
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={article.image || "/placeholder.svg?height=600&width=1200"}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {formatContent(article.content)}
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2">
              {article.tags.map((tag: string) => (
                <Link href={`/blog?tag=${tag}`} key={tag}>
                  <Badge className="hover:bg-primary/90 transition-colors cursor-pointer">{tag}</Badge>
                </Link>
              ))}
            </div>

            <Separator className="my-12" />

            {/* Author Bio */}
            <Card className="border-none shadow-md bg-muted/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-teal-500/5"></div>
              <CardContent className="flex flex-col sm:flex-row gap-6 p-6 relative z-10">
                <Avatar className="h-16 w-16 border-4 border-background">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Author" />
                  <AvatarFallback>YN</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Name</h3>
                  <p className="text-muted-foreground mb-4">
                    Full Stack Developer specializing in React and Next.js. I write about web development, programming
                    best practices, and career growth in tech.
                  </p>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="text-sm" asChild>
                      <Link href="https://twitter.com/yourusername">Follow on Twitter</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="text-sm" asChild>
                      <Link href="https://github.com/yourusername">GitHub</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            {/* Next/Previous Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevArticle && (
                <Link href={`/blog/${prevArticle.slug}`} className="group">
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent"></div>
                    <CardContent className="p-6 flex items-center relative z-10">
                      <ArrowLeft className="h-5 w-5 mr-4 transition-transform group-hover:-translate-x-1" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Previous Article</p>
                        <p className="font-medium line-clamp-2">{prevArticle.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )}

              {nextArticle && (
                <Link href={`/blog/${nextArticle.slug}`} className="group">
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-teal-500/5"></div>
                    <CardContent className="p-6 flex items-center justify-end text-right relative z-10">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Next Article</p>
                        <p className="font-medium line-clamp-2">{nextArticle.title}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 ml-4 transition-transform group-hover:translate-x-1" />
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allArticles
                .filter((a) => a.slug !== article.slug)
                .filter((a) => a.tags.some((tag) => article.tags.includes(tag)))
                .slice(0, 3)
                .map((relatedArticle, index) => (
                  <div
                    key={relatedArticle.slug}
                    className="relative h-40 overflow-hidden"
                  >
                    <Image
                      src={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                    />
                    <CardContent className="flex flex-col flex-grow p-5">
                      <div className="mb-2 flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{relatedArticle.date}</span>
                      </div>
                      <Link href={`/blog/${relatedArticle.slug}`} className="hover:underline">
                        <h3 className="font-bold mb-2 line-clamp-2">{relatedArticle.title}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground line-clamp-3 flex-grow">{relatedArticle.excerpt}</p>
                      <Link
                        href={`/blog/${relatedArticle.slug}`}
                        className="mt-4 text-sm font-medium text-primary hover:underline"
                      >
                        Read more
                      </Link>
                    </CardContent>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <Footer />
      </ThemeProvider>
    </main>
  )
}
