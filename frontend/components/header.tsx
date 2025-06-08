"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          About Kido
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </button>
            {/* <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </button> */}
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experience
            </button>
            {/* <button
              onClick={() => scrollToSection("blog")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Blog
            </button> */}
            {/* <button
              onClick={() => scrollToSection("github")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              GitHub
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Events
            </button> */}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("skills")}
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
            >
              Skills
            </button>
            {/* <button
              onClick={() => scrollToSection("projects")}
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
            >
              Projects
            </button> */}
            <button
              onClick={() => scrollToSection("experience")}
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
            >
              Experience
            </button>
            {/* <button
              onClick={() => scrollToSection("blog")}
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
            >
              Blog
            </button> */}
            {/* <button
              onClick={() => scrollToSection("github")}
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
            >
              GitHub
            </button> */}
            {/* <button
              onClick={() => scrollToSection("events")}
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
            >
              Events
            </button> */}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
