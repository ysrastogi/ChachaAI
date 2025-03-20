import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function VideoTutorials() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="getting-started">
        <TabsList>
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="job-matching">Job Matching</TabsTrigger>
          <TabsTrigger value="application-tracking">Application Tracking</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Features</TabsTrigger>
        </TabsList>

        <TabsContent value="getting-started" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Creating Your Account</CardTitle>
                <CardDescription>Learn how to sign up and set up your account</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">3:45 minutes</div>
                  <Badge variant="outline">Beginner</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Building Your Profile</CardTitle>
                <CardDescription>Create an effective profile that attracts employers</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">7:20 minutes</div>
                  <Badge variant="outline">Beginner</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Platform Navigation</CardTitle>
                <CardDescription>Learn how to navigate the JobMatch Pro platform</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">5:10 minutes</div>
                  <Badge variant="outline">Beginner</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="job-matching" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Understanding Match Scores</CardTitle>
                <CardDescription>Learn how job match percentages are calculated</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">6:15 minutes</div>
                  <Badge variant="outline">Intermediate</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Skills Gap Analysis</CardTitle>
                <CardDescription>Identify and address gaps in your skill set</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">8:30 minutes</div>
                  <Badge variant="outline">Intermediate</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Creating Profile Versions</CardTitle>
                <CardDescription>Tailor your profile for different job types</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">7:45 minutes</div>
                  <Badge variant="outline">Advanced</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="application-tracking" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Using the Kanban Board</CardTitle>
                <CardDescription>Track applications through different stages</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">5:30 minutes</div>
                  <Badge variant="outline">Beginner</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Setting Up Reminders</CardTitle>
                <CardDescription>Never miss a follow-up or interview</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">4:15 minutes</div>
                  <Badge variant="outline">Beginner</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Email Integration</CardTitle>
                <CardDescription>Track email communications with employers</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">6:50 minutes</div>
                  <Badge variant="outline">Advanced</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Data Analytics</CardTitle>
                <CardDescription>Analyze your job search performance</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">9:20 minutes</div>
                  <Badge variant="outline">Advanced</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">API Integration</CardTitle>
                <CardDescription>Connect JobMatch Pro with other tools</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">11:45 minutes</div>
                  <Badge variant="outline">Advanced</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Custom Reporting</CardTitle>
                <CardDescription>Create personalized job search reports</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">8:10 minutes</div>
                  <Badge variant="outline">Advanced</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

