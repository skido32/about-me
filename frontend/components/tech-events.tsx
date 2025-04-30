"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Mic, Users, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JSX } from "react"

export default function TechEvents() {
  // Sample data - replace with your actual events
  const events = [
    {
      name: "React Conf 2023",
      date: "May 15-16, 2023",
      location: "San Francisco, CA",
      role: "Speaker",
      description: "Presented a talk on 'Building Accessible React Components'",
      link: "https://reactconf.com",
      type: "conference",
      linkText: "Conference Website",
      color: "from-violet-500/10 to-teal-500/10",
    },
    {
      name: "Next.js Meetup",
      date: "March 8, 2023",
      location: "Tokyo, Japan",
      role: "Attendee",
      description: "Networking event for Next.js developers",
      link: "https://nextjs-meetup.com",
      type: "meetup",
      linkText: "Event Page",
      color: "from-teal-500/10 to-amber-500/10",
    },
    {
      name: "Web Development Hackathon",
      date: "February 3-5, 2023",
      location: "Online",
      role: "Mentor",
      description: "Helped teams build web applications over a weekend",
      link: "https://webdev-hackathon.com",
      type: "hackathon",
      linkText: "Hackathon Results",
      color: "from-amber-500/10 to-rose-500/10",
    },
    {
      name: "TypeScript Conference",
      date: "November 12-13, 2022",
      location: "Berlin, Germany",
      role: "Attendee",
      description: "Learned about the latest TypeScript features and best practices",
      link: "https://typescript-conf.com",
      type: "conference",
      linkText: "Conference Talks",
      color: "from-rose-500/10 to-violet-500/10",
    },
    {
      name: "Frontend Masters Workshop",
      date: "October 5, 2022",
      location: "Online",
      role: "Participant",
      description: "Participated in an advanced React patterns workshop",
      link: "https://frontendmasters.com/workshops",
      type: "workshop",
      linkText: "Workshop Materials",
      color: "from-violet-500/10 to-teal-500/10",
    },
    {
      name: "Local JavaScript Meetup",
      date: "September 20, 2022",
      location: "Tokyo, Japan",
      role: "Organizer",
      description: "Organized a meetup for local JavaScript developers",
      link: "https://meetup.com/javascript-tokyo",
      type: "meetup",
      linkText: "Meetup Group",
      color: "from-teal-500/10 to-amber-500/10",
    },
  ]

  const getRoleIcon = (role: string) => {
    switch (role.toLowerCase()) {
      case "speaker":
        return <Mic className="h-4 w-4" />
      case "attendee":
        return <Users className="h-4 w-4" />
      case "mentor":
        return <Award className="h-4 w-4" />
      case "organizer":
        return <Calendar className="h-4 w-4" />
      case "participant":
        return <Users className="h-4 w-4" />
      default:
        return <Users className="h-4 w-4" />
    }
  }

  const getRoleBadgeVariant = (role: string) => {
    switch (role.toLowerCase()) {
      case "speaker":
        return "default"
      case "organizer":
        return "destructive"
      case "mentor":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "speaker":
        return "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300"
      case "organizer":
        return "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300"
      case "mentor":
        return "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300"
      case "attendee":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300"
      case "participant":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <section id="events" className="py-20 px-4 bg-muted/50 section-pattern-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300 text-sm font-medium mb-4">
            Community
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Events & Conferences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Events, conferences, and meetups I've attended, spoken at, or helped organize.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="conference">Conferences</TabsTrigger>
            <TabsTrigger value="meetup">Meetups</TabsTrigger>
            <TabsTrigger value="hackathon">Hackathons</TabsTrigger>
            <TabsTrigger value="workshop">Workshops</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-6">
              {events.map((event, index) => (
                <EventCard
                  key={index}
                  event={event}
                  index={index}
                  getRoleIcon={getRoleIcon}
                  getRoleBadgeColor={getRoleBadgeColor}
                />
              ))}
            </div>
          </TabsContent>

          {["conference", "meetup", "hackathon", "workshop"].map((type) => (
            <TabsContent key={type} value={type}>
              <div className="space-y-6">
                {events
                  .filter((event) => event.type === type)
                  .map((event, index) => (
                    <EventCard
                      key={index}
                      event={event}
                      index={index}
                      getRoleIcon={getRoleIcon}
                      getRoleBadgeColor={getRoleBadgeColor}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

interface EventCardProps {
  event: {
    name: string
    date: string
    location: string
    role: string
    description: string
    link: string
    type: string
    linkText: string
    color: string
  }
  index: number
  getRoleIcon: (role: string) => JSX.Element
  getRoleBadgeColor: (role: string) => string
}

function EventCard({ event, index, getRoleIcon, getRoleBadgeColor }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="border-none shadow-lg overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${event.color}`}></div>
        <CardHeader className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <CardTitle>{event.name}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                <Calendar className="h-4 w-4 mr-1" />
                {event.date}
              </CardDescription>
            </div>
            <Badge
              variant="outline"
              className={`w-fit flex items-center gap-1 border-none ${getRoleBadgeColor(event.role)}`}
            >
              {getRoleIcon(event.role)}
              {event.role}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground mb-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{event.location}</span>
            </div>
          </div>
          <p className="mb-4">{event.description}</p>
          <Button variant="outline" size="sm" className="mt-2 gradient-border" asChild>
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              {event.linkText}
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
