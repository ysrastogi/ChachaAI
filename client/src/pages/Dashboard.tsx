"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { apiRequest } from "@/lib/queryClient"
import { Bell, Calendar, Clock, FileText, Filter, LinkIcon, Plus, Search, Settings, User } from "lucide-react"
import type { Application } from "@shared/schema"

const statusColors: Record<string, string> = {
  applied: "bg-blue-500",
  interviewing: "bg-yellow-500",
  offered: "bg-green-500",
  rejected: "bg-red-500",
  accepted: "bg-emerald-500"
}

// Sample data for charts
const activityData = [
  { date: "2025-03-13", applications: 3 },
  { date: "2025-03-14", applications: 2 },
  { date: "2025-03-15", applications: 4 },
  { date: "2025-03-16", applications: 1 },
  { date: "2025-03-17", applications: 5 },
  { date: "2025-03-18", applications: 2 },
  { date: "2025-03-19", applications: 3 },
]

const platformData = [
  { name: "LinkedIn", value: 45 },
  { name: "Indeed", value: 30 },
  { name: "Glassdoor", value: 15 },
  { name: "Company Sites", value: 10 },
]

const PLATFORM_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function Dashboard() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const { data: applications, refetch } = useQuery<Application[]>({
    queryKey: ['/api/applications/1']
  })

  const updateStatus = async (id: number, status: string) => {
    try {
      await apiRequest("PATCH", `/api/applications/${id}`, { status })
      refetch()
      toast({
        title: "Status Updated",
        description: "Application status has been updated successfully"
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update application status",
        variant: "destructive"
      })
    }
  }

  const totalTimeSaved = applications?.length ? applications.length * 15 : 0 // 15 minutes per application

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <div className="flex items-center gap-4">
          <form className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search applications..."
              className="pl-8 h-9 w-64 rounded-md border border-input bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications?.length || 0}</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <LinkIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTimeSaved} mins</div>
            <p className="text-xs text-muted-foreground">Avg. 15 mins per application</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Platforms</CardTitle>
            <LinkIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">LinkedIn, Indeed, + 2 more</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Application Activity</CardTitle>
            <CardDescription>Your application submissions over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={(date) => format(new Date(date), 'MMM d')}
                  />
                  <YAxis />
                  <Tooltip 
                    labelFormatter={(date) => format(new Date(date), 'MMM d, yyyy')}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="applications" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Platform Distribution</CardTitle>
            <CardDescription>Applications by platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PLATFORM_COLORS[index % PLATFORM_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
          <CardDescription>Track your application status and progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {applications?.map((app) => (
              <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{app.company}</h3>
                  <p className="text-sm text-muted-foreground">{app.position}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className={statusColors[app.status]}>{app.status}</Badge>
                  <Select
                    defaultValue={app.status}
                    onValueChange={(value) => updateStatus(app.id, value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Update status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="applied">Applied</SelectItem>
                      <SelectItem value="interviewing">Interviewing</SelectItem>
                      <SelectItem value="offered">Offered</SelectItem>
                      <SelectItem value="accepted">Accepted</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}