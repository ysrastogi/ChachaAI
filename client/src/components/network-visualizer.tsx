"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, UserPlus, Building2, Briefcase, GraduationCap, Filter } from "lucide-react"

interface NetworkNode {
  id: string
  name: string
  type: 'connection' | 'company' | 'school'
  role?: string
  strength: number
}

interface NetworkConnection {
  source: string
  target: string
  type: 'worked-with' | 'studied-with' | 'mentor' | 'colleague'
}

export function NetworkVisualizer() {
  const [filter, setFilter] = useState<string>('all')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // Sample data - would come from API in production
  const nodes: NetworkNode[] = [
    { id: '1', name: 'John Smith', type: 'connection', role: 'Senior Developer', strength: 8 },
    { id: '2', name: 'TechCorp', type: 'company', strength: 9 },
    { id: '3', name: 'Stanford University', type: 'school', strength: 7 },
    { id: '4', name: 'Sarah Johnson', type: 'connection', role: 'Product Manager', strength: 6 },
  ]

  const connections: NetworkConnection[] = [
    { source: '1', target: '2', type: 'worked-with' },
    { source: '1', target: '3', type: 'studied-with' },
    { source: '1', target: '4', type: 'colleague' },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw connections
    connections.forEach(connection => {
      const sourceNode = nodes.find(n => n.id === connection.source)
      const targetNode = nodes.find(n => n.id === connection.target)
      if (!sourceNode || !targetNode) return

      // Simple layout - would use force-directed graph in production
      const startX = Math.random() * canvas.width
      const startY = Math.random() * canvas.height
      const endX = Math.random() * canvas.width
      const endY = Math.random() * canvas.height

      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(endX, endY)
      ctx.strokeStyle = '#94a3b8'
      ctx.stroke()
    })

    // Draw nodes
    nodes.forEach(node => {
      if (filter !== 'all' && node.type !== filter) return

      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = 30

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = getNodeColor(node.type)
      ctx.fill()

      // Add node label
      ctx.fillStyle = '#000'
      ctx.textAlign = 'center'
      ctx.fillText(node.name.substring(0, 10), x, y)
    })
  }, [nodes, connections, filter])

  const getNodeColor = (type: NetworkNode['type']) => {
    switch (type) {
      case 'connection':
        return '#60a5fa'
      case 'company':
        return '#34d399'
      case 'school':
        return '#fbbf24'
      default:
        return '#94a3b8'
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Professional Network</CardTitle>
            <CardDescription>Visualize your professional connections and relationships</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Connection
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <Badge variant="secondary" className="flex gap-1">
              <Users className="h-4 w-4" />
              {nodes.filter(n => n.type === 'connection').length} Connections
            </Badge>
            <Badge variant="secondary" className="flex gap-1">
              <Building2 className="h-4 w-4" />
              {nodes.filter(n => n.type === 'company').length} Companies
            </Badge>
            <Badge variant="secondary" className="flex gap-1">
              <GraduationCap className="h-4 w-4" />
              {nodes.filter(n => n.type === 'school').length} Schools
            </Badge>
          </div>
          
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter connections" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Connections</SelectItem>
              <SelectItem value="connection">People</SelectItem>
              <SelectItem value="company">Companies</SelectItem>
              <SelectItem value="school">Schools</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative aspect-[16/9] rounded-lg border bg-background">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ background: 'white' }}
          />
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="font-medium">Suggested Connections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              { name: "Emily Chen", role: "UX Designer", company: "DesignCo" },
              { name: "Michael Brown", role: "Tech Lead", company: "StartupXYZ" }
            ].map((suggestion, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg border">
                <div>
                  <p className="font-medium">{suggestion.name}</p>
                  <p className="text-sm text-muted-foreground">{suggestion.role} at {suggestion.company}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <UserPlus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
