import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1">
            <span className="text-sm text-muted-foreground">© 2025 Shunsuke Kido. Built with</span>
            <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
          </div>

          <div className="text-sm text-muted-foreground">
            <span>Designed & Built with Next.js and Tailwind CSS</span>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-violet-500/10 hover:bg-violet-500/20 text-violet-600 dark:text-violet-400"
              asChild
            >
              <a href="https://github.com/skido32" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-teal-500/10 hover:bg-teal-500/20 text-teal-600 dark:text-teal-400"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/shunsuke-kido-155b45362/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400"
              asChild
            >
              <a href="mailto:souen0823@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
