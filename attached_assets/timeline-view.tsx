"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample data
const timelineEvents = [
  {
    id: 1,
    date: "March 20, 2023",
    events: [
      {
        id: 101,
        time: "2:00 PM",
        title: "Technical Interview",
        company: "Tech Innovations",
        position: "React Developer",
        logo: "/placeholder.svg?height=40&width=40",
        type: "interview",
        status: "upcoming",
      },
    ],
  },
  {
    id: 2,
    date: "March 18, 2023",
    events: [
      {
        id: 102,
        time: "10:00 AM",
        title: "Screening Call",
        company: "StartupXYZ",
        position: "Full Stack Engineer",
        logo: "/placeholder.svg?height=40&width=40",
        type: "screening",
        status: "completed",
      },
      {
        id: 103,
        time: "3:30 PM",
        title: "Application Submitted",
        company: "TechCorp Inc.",
        position: "Senior Frontend Developer",
        logo: "/placeholder.svg?height=40&width=40",
        type: "applied",
        status: "completed",
      },
    ],
  },
  {
    id: 3,
    date: "March 15, 2023",
    events: [
      {
        id: 104,
        time: "9:00 AM",
        title: "Application Submitted",
        company: "Design Systems Co.",
        position: "UI/UX Developer",
        logo: "/placeholder.svg?height=40&width=40",
        type: "applied",
        status: "completed",
      },
    ],
  },
  {
    id: 4,
    date: "March 10, 2023",
    events: [
      {
        id: 105,
        time: "4:00 PM",
        title: "Offer Received",
        company: "Global Solutions",
        position: "Frontend Lead",
        logo: "/placeholder.svg?height=40&width=40",
        type: "offer",
        status: "completed",
      },
    ],
  },
  {
    id: 5,
    date: "March 5, 2023",
    events: [
      {
        id: 106,
        time: "11:00 AM",
        title: "Application Rejected",
        company: "Mega Corp",
        position: "JavaScript Developer",
        logo: "/placeholder.svg?height=40&width=40",
        type: "rejected",
        status: "completed",
      },
    ],
  },
]

export function TimelineView({ onSelectApplication }) {
  const getStatusColor = (type) => {
    switch (type) {
      case "applied":
        return "bg-blue-500"
      case "screening":
        return "bg-yellow-500"
      case "interview":
        return "bg-purple-500"
      case "offer":
        return "bg-green-500"
      case "rejected":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {timelineEvents.map((day) => (
        <div key={day.id}>
          <h3 className="font-medium mb-3">{day.date}</h3>
          <div className="space-y-3">
            {day.events.map((event) => (
              <Card
                key={event.id}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() =>
                  onSelectApplication({
                    id: event.id,
                    company: event.company,
                    position: event.position,
                    logo: event.logo,
                    status: event.type,
                  })
                }
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="text-sm font-medium">{event.time}</div>
                      <div className="mt-1 w-px h-full bg-border"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={event.logo} alt={event.company} />
                          <AvatarFallback>{event.company.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-sm">{event.title}</h4>
                          <p className="text-xs text-muted-foreground">
                            {event.company} - {event.position}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`ml-auto ${event.status === "upcoming" ? "border-primary text-primary" : ""}`}
                        >
                          {event.status === "upcoming" ? "Upcoming" : "Completed"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

