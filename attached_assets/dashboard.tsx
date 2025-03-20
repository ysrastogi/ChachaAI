"use client"

import { useState } from "react"
import { Bell, Calendar, Clock, FileText, Filter, LinkIcon, Plus, Search, Settings, User } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex flex-1 items-center gap-2">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <form className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search applications..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
            <span className="sr-only">User</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications in Progress</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+5 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Platforms Connected</CardTitle>
              <LinkIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">+1 new connection</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Saved Statistics</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48h</div>
              <p className="text-xs text-muted-foreground">+12h from last month</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-5">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Applications</CardTitle>
                <CardDescription>Manage your applications and track their progress.</CardDescription>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  New Application
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="in-progress">
                <TabsList className="mb-4">
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="all">All Applications</TabsTrigger>
                </TabsList>
                <TabsContent value="in-progress" className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="grid gap-1">
                        <div className="font-medium">Application #{1000 + i}</div>
                        <div className="text-sm text-muted-foreground">Updated 2 days ago</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">In Progress</Badge>
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="completed" className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="grid gap-1">
                        <div className="font-medium">Application #{900 + i}</div>
                        <div className="text-sm text-muted-foreground">Completed 1 week ago</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge>Completed</Badge>
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="all" className="space-y-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="grid gap-1">
                        <div className="font-medium">Application #{800 + i}</div>
                        <div className="text-sm text-muted-foreground">
                          {i % 2 === 0 ? "Completed 2 weeks ago" : "Updated 3 days ago"}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={i % 2 === 0 ? "default" : "outline"}>
                          {i % 2 === 0 ? "Completed" : "In Progress"}
                        </Badge>
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Applications
              </Button>
            </CardFooter>
          </Card>
          <div className="grid gap-4 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2">
                <Button className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  New Application
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Connect Platform
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread notifications.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-start gap-4 rounded-lg border p-3">
                  <Bell className="mt-0.5 h-5 w-5 text-orange-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Complete your profile</p>
                    <p className="text-sm text-muted-foreground">Your profile is missing required information.</p>
                    <Link href="#" className="text-sm font-medium text-primary">
                      Complete Now
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-3">
                  <Bell className="mt-0.5 h-5 w-5 text-blue-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Application #1005 needs attention</p>
                    <p className="text-sm text-muted-foreground">Additional documents required for verification.</p>
                    <Link href="#" className="text-sm font-medium text-primary">
                      Review
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-3">
                  <Bell className="mt-0.5 h-5 w-5 text-green-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Application #1002 approved</p>
                    <p className="text-sm text-muted-foreground">Your application has been approved.</p>
                    <Link href="#" className="text-sm font-medium text-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  View All Notifications
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

