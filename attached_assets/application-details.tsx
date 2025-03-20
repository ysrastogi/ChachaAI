"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Edit, Mail, MapPin, Phone, Plus, Send } from "lucide-react"

export function ApplicationDetails({ application }) {
  const [note, setNote] = useState("")

  const getStatusBadge = (status) => {
    switch (status) {
      case "applied":
        return <Badge className="bg-blue-500">Applied</Badge>
      case "screening":
        return <Badge className="bg-yellow-500">Screening</Badge>
      case "interview":
        return <Badge className="bg-purple-500">Interview</Badge>
      case "offer":
        return <Badge className="bg-green-500">Offer</Badge>
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={application.logo} alt={application.company} />
              <AvatarFallback>{application.company.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{application.position}</CardTitle>
              <CardDescription>{application.company}</CardDescription>
            </div>
          </div>
          {getStatusBadge(application.status)}
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="details">
          <TabsList className="mb-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="emails">Emails</TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">Application Date</h3>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    March 15, 2023
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Location</h3>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    San Francisco, CA
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    recruiter@techcorp.com
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    (555) 123-4567
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Timeline</h3>
                <div className="space-y-3 mt-2">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="w-px h-full bg-border"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Application Submitted</p>
                      <p className="text-xs text-muted-foreground">March 15, 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="w-px h-full bg-border"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Resume Screened</p>
                      <p className="text-xs text-muted-foreground">March 17, 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Technical Interview Scheduled</p>
                      <p className="text-xs text-muted-foreground">March 22, 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Upcoming Events</h3>
                <div className="flex items-center p-2 rounded-md bg-primary/10">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Technical Interview</p>
                    <p className="text-xs text-muted-foreground">March 22, 2023, 2:00 PM</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Calendar className="h-4 w-4" />
                    <span className="sr-only">Add to calendar</span>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notes">
            <div className="space-y-4">
              <div className="border rounded-md p-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium">Interview Preparation</h3>
                  <div className="text-xs text-muted-foreground">March 18, 2023</div>
                </div>
                <p className="text-sm">
                  Research company products and prepare answers for common React interview questions. Review their tech
                  stack and recent projects.
                </p>
              </div>

              <div className="border rounded-md p-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium">Recruiter Call Notes</h3>
                  <div className="text-xs text-muted-foreground">March 17, 2023</div>
                </div>
                <p className="text-sm">
                  Spoke with Sarah from HR. Team is looking for someone with strong React experience. Salary range is
                  $120-150K. Remote work is possible after 3 months.
                </p>
              </div>

              <div className="space-y-2">
                <Textarea placeholder="Add a new note..." value={note} onChange={(e) => setNote(e.target.value)} />
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Note
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="emails">
            <div className="space-y-4">
              <div className="border rounded-md p-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium">Interview Confirmation</h3>
                  <div className="text-xs text-muted-foreground">March 18, 2023</div>
                </div>
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <Mail className="h-3 w-3 mr-1" />
                  From: recruiter@techcorp.com
                </div>
                <p className="text-sm">
                  Your technical interview has been scheduled for March 22, 2023 at 2:00 PM. Please prepare for a 1-hour
                  session with our senior engineers.
                </p>
              </div>

              <div className="border rounded-md p-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium">Application Received</h3>
                  <div className="text-xs text-muted-foreground">March 15, 2023</div>
                </div>
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <Mail className="h-3 w-3 mr-1" />
                  From: noreply@techcorp.com
                </div>
                <p className="text-sm">
                  Thank you for applying to the Senior Frontend Developer position at TechCorp Inc. We have received
                  your application and will review it shortly.
                </p>
              </div>

              <div className="space-y-2">
                <Textarea placeholder="Compose a follow-up email..." className="min-h-[100px]" />
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <Edit className="mr-2 h-4 w-4" />
          Edit Application
        </Button>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Follow-up
        </Button>
      </CardFooter>
    </Card>
  )
}

