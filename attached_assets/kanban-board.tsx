"use client"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin } from "lucide-react"

// Sample data
const applications = {
  applied: [
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      logo: "/placeholder.svg?height=40&width=40",
      location: "San Francisco, CA",
      date: "Applied on Mar 15, 2023",
      status: "applied",
    },
    {
      id: 2,
      company: "Design Systems Co.",
      position: "UI/UX Developer",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Remote",
      date: "Applied on Mar 12, 2023",
      status: "applied",
    },
  ],
  screening: [
    {
      id: 3,
      company: "StartupXYZ",
      position: "Full Stack Engineer",
      logo: "/placeholder.svg?height=40&width=40",
      location: "New York, NY",
      date: "Screening call on Mar 18, 2023",
      status: "screening",
    },
  ],
  interview: [
    {
      id: 4,
      company: "Tech Innovations",
      position: "React Developer",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Austin, TX",
      date: "Technical interview on Mar 20, 2023",
      status: "interview",
    },
  ],
  offer: [
    {
      id: 5,
      company: "Global Solutions",
      position: "Frontend Lead",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Chicago, IL",
      date: "Offer received on Mar 10, 2023",
      status: "offer",
    },
  ],
  rejected: [
    {
      id: 6,
      company: "Mega Corp",
      position: "JavaScript Developer",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Seattle, WA",
      date: "Rejected on Mar 5, 2023",
      status: "rejected",
    },
  ],
}

export function KanbanBoard({ onSelectApplication }) {
  const renderColumn = (title, applications, color) => (
    <div className="min-w-[280px] rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium">{title}</h3>
        <Badge variant="outline">{applications.length}</Badge>
      </div>
      <div className="space-y-3">
        {applications.map((app) => (
          <div
            key={app.id}
            className="rounded-md border bg-background p-3 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onSelectApplication(app)}
          >
            <div className="flex items-center gap-3 mb-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={app.logo} alt={app.company} />
                <AvatarFallback>{app.company.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium text-sm">{app.position}</h4>
                <p className="text-xs text-muted-foreground">{app.company}</p>
              </div>
            </div>
            <div className="flex items-center text-xs text-muted-foreground mb-1">
              <MapPin className="h-3 w-3 mr-1" />
              {app.location}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {app.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="overflow-auto pb-4">
      <div className="flex gap-4 min-w-max">
        {renderColumn("Applied", applications.applied, "bg-blue-500")}
        {renderColumn("Screening", applications.screening, "bg-yellow-500")}
        {renderColumn("Interview", applications.interview, "bg-purple-500")}
        {renderColumn("Offer", applications.offer, "bg-green-500")}
        {renderColumn("Rejected", applications.rejected, "bg-red-500")}
      </div>
    </div>
  )
}

