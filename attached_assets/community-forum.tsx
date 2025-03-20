import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, PlusCircle, ThumbsUp } from "lucide-react"

export function CommunityForum() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Community Forum</h2>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Discussion
        </Button>
      </div>

      <Tabs defaultValue="popular">
        <TabsList>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
          <TabsTrigger value="my-posts">My Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="popular" className="mt-6">
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Tips for technical interviews at FAANG companies</CardTitle>
                      <CardDescription>Started by James Davis • 3 days ago</CardDescription>
                    </div>
                  </div>
                  <Badge>Technical</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  I have upcoming technical interviews at two FAANG companies. Has anyone gone through their interview
                  process recently? Any tips or resources you'd recommend?
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">24 replies</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">42 likes</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                      <AvatarFallback>SW</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">How to negotiate salary as a junior developer?</CardTitle>
                      <CardDescription>Started by Sarah Wilson • 1 week ago</CardDescription>
                    </div>
                  </div>
                  <Badge>Career Advice</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  I just received my first job offer as a junior developer, but the salary is lower than I expected. How
                  should I approach negotiation without risking the offer?
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">36 replies</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">58 likes</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Portfolio projects that stand out to recruiters</CardTitle>
                      <CardDescription>Started by Michael Rodriguez • 2 weeks ago</CardDescription>
                    </div>
                  </div>
                  <Badge>Portfolio</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  What kind of portfolio projects really catch recruiters' attention? Are there specific types of
                  applications or technologies that make a bigger impact?
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">29 replies</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">47 likes</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline">Load More Discussions</Button>
          </div>
        </TabsContent>

        <TabsContent value="recent" className="mt-6">
          {/* Recent discussions would go here */}
          <div className="text-center py-8 text-muted-foreground">Loading recent discussions...</div>
        </TabsContent>

        <TabsContent value="unanswered" className="mt-6">
          {/* Unanswered discussions would go here */}
          <div className="text-center py-8 text-muted-foreground">Loading unanswered discussions...</div>
        </TabsContent>

        <TabsContent value="my-posts" className="mt-6">
          {/* User's posts would go here */}
          <div className="text-center py-8 text-muted-foreground">Loading your discussions...</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

