"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Award, Target, Calendar, Check, ChevronRight, Briefcase } from "lucide-react"

interface GoalCard {
  id: string
  title: string
  timeline: string
  type: "career" | "skill" | "certification"
  status: "in-progress" | "completed" | "planned"
  description: string
}

export default function CareerMoodBoard() {
  const [goals, setGoals] = useState<GoalCard[]>([
    {
      id: "1",
      title: "Senior Frontend Developer",
      timeline: "1 year",
      type: "career",
      status: "in-progress",
      description: "Lead technical projects and mentor junior developers"
    },
    {
      id: "2",
      title: "AWS Certification",
      timeline: "6 months",
      type: "certification",
      status: "planned",
      description: "Complete AWS Developer Associate certification"
    },
    {
      id: "3",
      title: "TypeScript Mastery",
      timeline: "3 months",
      type: "skill",
      status: "in-progress",
      description: "Advanced TypeScript patterns and best practices"
    }
  ])

  const handleDragStart = (e: React.DragEvent, goalId: string) => {
    e.dataTransfer.setData("goalId", goalId)
  }

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    const draggedId = e.dataTransfer.getData("goalId")
    
    if (draggedId === targetId) return

    const items = [...goals]
    const draggedIndex = items.findIndex(item => item.id === draggedId)
    const targetIndex = items.findIndex(item => item.id === targetId)
    
    const [removed] = items.splice(draggedIndex, 1)
    items.splice(targetIndex, 0, removed)
    
    setGoals(items)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const getStatusColor = (status: GoalCard["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-blue-500"
      case "planned":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTypeIcon = (type: GoalCard["type"]) => {
    switch (type) {
      case "career":
        return <Briefcase className="h-4 w-4" />
      case "certification":
        return <Award className="h-4 w-4" />
      case "skill":
        return <Target className="h-4 w-4" />
    }
  }

  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Career Vision Board</h1>
          <p className="text-muted-foreground">Visualize and track your professional goals</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Goal
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal) => (
          <Card
            key={goal.id}
            draggable
            onDragStart={(e) => handleDragStart(e, goal.id)}
            onDrop={(e) => handleDrop(e, goal.id)}
            onDragOver={handleDragOver}
            className="cursor-move hover:border-primary/50 transition-colors"
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <Badge
                  variant="secondary"
                  className="mb-2 flex items-center gap-1"
                >
                  {getTypeIcon(goal.type)}
                  {goal.type}
                </Badge>
                <Badge className={getStatusColor(goal.status)}>
                  {goal.status}
                </Badge>
              </div>
              <CardTitle>{goal.title}</CardTitle>
              <CardDescription>{goal.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                Timeline: {goal.timeline}
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Check className="mr-2 h-4 w-4" />
                  Update Status
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
