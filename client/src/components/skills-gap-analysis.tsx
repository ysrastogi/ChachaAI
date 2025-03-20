"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink } from "lucide-react"

export function SkillsGapAnalysis() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Skills Gap Analysis</CardTitle>
          <CardDescription>Based on your target job roles and recent applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">Technical Skills</h3>
                <span className="text-sm text-muted-foreground">8/12 skills matched</span>
              </div>
              <Progress value={66} className="h-2 mb-4" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Your Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "JavaScript", "HTML/CSS", "Redux", "REST APIs", "Git", "Responsive Design", "Jest"].map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Missing Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["TypeScript", "Next.js", "GraphQL", "AWS"].map((skill) => (
                      <Badge key={skill} variant="outline" className="border-destructive/50 text-destructive">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">Soft Skills</h3>
                <span className="text-sm text-muted-foreground">5/7 skills matched</span>
              </div>
              <Progress value={71} className="h-2 mb-4" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Your Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability"].map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Missing Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Leadership", "Conflict Resolution"].map((skill) => (
                      <Badge key={skill} variant="outline" className="border-destructive/50 text-destructive">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommended Learning Resources</CardTitle>
          <CardDescription>Resources to help you acquire the missing skills</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "TypeScript Fundamentals",
                description: "Learn the basics of TypeScript and how to use it with React",
                priority: "High Priority",
                resources: [
                  "TypeScript Documentation",
                  "TypeScript with React Course"
                ]
              },
              {
                title: "Next.js Framework",
                description: "Learn how to build applications with Next.js",
                priority: "High Priority",
                resources: [
                  "Next.js Documentation",
                  "Building with Next.js Course"
                ]
              },
              {
                title: "Leadership Skills",
                description: "Develop leadership skills for team management",
                priority: "Medium Priority",
                resources: [
                  "Leadership Fundamentals Course",
                  "Team Management Workshop"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{section.title}</h3>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </div>
                  <Badge>{section.priority}</Badge>
                </div>
                <div className="mt-4 space-y-2">
                  {section.resources.map((resource, i) => (
                    <div key={i} className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{resource}</span>
                      <Button variant="ghost" size="sm" className="ml-auto h-6 w-6 p-0">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Open link</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
