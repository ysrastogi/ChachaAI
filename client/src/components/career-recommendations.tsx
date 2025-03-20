"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, TrendingUp, Book, Award, ExternalLink } from "lucide-react"

interface CareerPath {
  title: string
  matchScore: number
  description: string
  requiredSkills: string[]
  learningPath: {
    name: string
    type: "course" | "certification" | "experience"
    duration: string
    priority: "high" | "medium" | "low"
  }[]
  marketDemand: number
  salaryRange: string
  growthPotential: number
}

export function CareerRecommendations() {
  const [careerPaths, setCareerPaths] = useState<CareerPath[]>([
    {
      title: "Senior Frontend Architect",
      matchScore: 85,
      description: "Lead complex frontend architectures and mentor development teams",
      requiredSkills: ["React", "System Design", "TypeScript", "Performance Optimization"],
      learningPath: [
        {
          name: "Advanced React Patterns",
          type: "course",
          duration: "2 months",
          priority: "high"
        },
        {
          name: "Frontend Architecture Certification",
          type: "certification",
          duration: "3 months",
          priority: "medium"
        }
      ],
      marketDemand: 80,
      salaryRange: "$130K - $180K",
      growthPotential: 90
    },
    {
      title: "AI/ML Engineer",
      matchScore: 70,
      description: "Develop AI-powered solutions and machine learning models",
      requiredSkills: ["Python", "TensorFlow", "Data Structures", "Machine Learning"],
      learningPath: [
        {
          name: "Machine Learning Specialization",
          type: "certification",
          duration: "6 months",
          priority: "high"
        },
        {
          name: "Deep Learning Practice Project",
          type: "experience",
          duration: "3 months",
          priority: "high"
        }
      ],
      marketDemand: 95,
      salaryRange: "$140K - $200K",
      growthPotential: 95
    }
  ])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle>AI Career Path Recommendations</CardTitle>
          </div>
          <CardDescription>
            Personalized career paths based on your skills, experience, and market trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {careerPaths.map((path, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{path.title}</h3>
                      <p className="text-sm text-muted-foreground">{path.description}</p>
                    </div>
                    <Badge variant="outline" className="bg-primary/10">
                      {path.matchScore}% Match
                    </Badge>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.requiredSkills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Market Analysis</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Market Demand</span>
                            <span>{path.marketDemand}%</span>
                          </div>
                          <Progress value={path.marketDemand} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Growth Potential</span>
                            <span>{path.growthPotential}%</span>
                          </div>
                          <Progress value={path.growthPotential} className="h-2" />
                        </div>
                        <div className="text-sm">
                          <TrendingUp className="h-4 w-4 inline mr-1" />
                          Salary Range: {path.salaryRange}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Recommended Learning Path</h4>
                    <div className="space-y-2">
                      {path.learningPath.map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-lg border">
                          <div className="flex items-center gap-2">
                            {item.type === "course" && <Book className="h-4 w-4 text-blue-500" />}
                            {item.type === "certification" && <Award className="h-4 w-4 text-green-500" />}
                            {item.type === "experience" && <TrendingUp className="h-4 w-4 text-orange-500" />}
                            <div>
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-muted-foreground">Duration: {item.duration}</p>
                            </div>
                          </div>
                          <Badge variant={item.priority === "high" ? "default" : "secondary"}>
                            {item.priority} priority
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button className="w-full">
                      Start This Path
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
