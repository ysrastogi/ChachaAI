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
                    <Badge variant="outline" className="bg-primary/10">
                      React
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      HTML/CSS
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Redux
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      REST APIs
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Git
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Responsive Design
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Jest
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Missing Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-destructive/50 text-destructive">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="border-destructive/50 text-destructive">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-destructive/50 text-destructive">
                      GraphQL
                    </Badge>
                    <Badge variant="outline" className="border-destructive/50 text-destructive">
                      AWS
                    </Badge>
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
                    <Badge variant="outline" className="bg-primary/10">
                      Communication
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Teamwork
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Problem Solving
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Time Management
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Adaptability
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Missing Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-destructive/50 text-destructive">
                      Leadership
                    </Badge>
                    <Badge variant="outline" className="border-destructive/50 text-destructive">
                      Conflict Resolution
                    </Badge>
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
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">TypeScript Fundamentals</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn the basics of TypeScript and how to use it with React
                  </p>
                </div>
                <Badge>High Priority</Badge>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">TypeScript Documentation</span>
                  <Button variant="ghost" size="sm" className="ml-auto h-6 w-6 p-0">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Open link</span>
                  </Button>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">TypeScript with React Course</span>
                  <Button variant="ghost" size="sm" className="ml-auto h-6 w-6 p-0">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Open link</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Next.js Framework</h3>
                  <p className="text-sm text-muted-foreground">Learn how to build applications with Next.js</p>
                </div>
                <Badge>High Priority</Badge>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Next.js Documentation</span>
                  <Button variant="ghost" size="sm" className="ml-auto h-6 w-6 p-0">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Open link</span>
                  </Button>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Building with Next.js Course</span>
                  <Button variant="ghost" size="sm" className="ml-auto h-6 w-6 p-0">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Open link</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Leadership Skills</h3>
                  <p className="text-sm text-muted-foreground">Develop leadership skills for team management</p>
                </div>
                <Badge>Medium Priority</Badge>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Leadership Fundamentals Course</span>
                  <Button variant="ghost" size="sm" className="ml-auto h-6 w-6 p-0">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Open link</span>
                  </Button>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Team Management Workshop</span>
                  <Button variant="ghost" size="sm" className="ml-auto h-6 w-6 p-0">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Open link</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

