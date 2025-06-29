"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react"

// Article型を暫定定義
export type Article = {
  title: string;
  tags: string[];
  date: string;
  readTime: string;
  image?: string;
  content: string;
  excerpt?: string;
};

export type ArticleHeaderProps = {
  article: Article;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" className="group" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share article</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">
              <Twitter className="mr-2 h-4 w-4 text-[#1DA1F2]" />
              <span>Share on Twitter</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Linkedin className="mr-2 h-4 w-4 text-[#0A66C2]" />
              <span>Share on LinkedIn</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Facebook className="mr-2 h-4 w-4 text-[#1877F2]" />
              <span>Share on Facebook</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300 text-sm font-medium mb-4">
        {article.tags[0]}
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>
    </motion.div>
  )
} 
