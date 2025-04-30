import { ThemeProvider } from "@/components/theme-provider"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
// import Projects from "@/components/projects"
import Experience from "@/components/experience"
// import Blog from "@/components/blog"
// import GitHubActivity from "@/components/github-activity"
// import TechEvents from "@/components/tech-events"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
// import GitHubActivity from "@/components/github-activity"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Header />
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <Experience />
        {/* <Blog /> */}
        {/* <GitHubActivity /> */}
        {/* <TechEvents /> */}
        <Contact />
        <Footer />
      </ThemeProvider>
    </main>
  )
}
