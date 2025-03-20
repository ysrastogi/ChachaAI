import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ThumbsUp } from "lucide-react"

export function SuccessStories() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Stories</TabsTrigger>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">From Rejection to Dream Job</CardTitle>
                      <CardDescription>By James Davis</CardDescription>
                    </div>
                  </div>
                  <Badge>Frontend</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  After 6 months of job searching and countless rejections, I used JobMatch Pro to identify gaps in my
                  profile. The skills analysis showed I was missing key TypeScript experience that employers were
                  looking for.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  I took the recommended TypeScript course, updated my profile, and within 3 weeks I had 5 interviews
                  and 2 offers! I'm now working as a Senior Frontend Developer at my dream company.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">Posted 2 weeks ago</div>
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Helpful (24)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                      <AvatarFallback>SW</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Career Change Success</CardTitle>
                      <CardDescription>By Sarah Wilson</CardDescription>
                    </div>
                  </div>
                  <Badge>Full Stack</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Transitioning from marketing to development seemed impossible. I was applying to dozens of jobs with
                  no response. JobMatch Pro helped me create targeted profile versions that highlighted my transferable
                  skills.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  The application tracking system kept me organized and motivated. After 4 months, I landed a junior
                  full stack role that was perfect for my background. I've been there for 6 months now and just got
                  promoted!
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">Posted 1 month ago</div>
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Helpful (42)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">50% Salary Increase</CardTitle>
                      <CardDescription>By Michael Rodriguez</CardDescription>
                    </div>
                  </div>
                  <Badge>Design</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  I was underpaid at my previous job but didn't know how to position myself for higher-paying roles. The
                  profile improvement suggestions helped me highlight my UI/UX skills and leadership experience.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Using the job matching feature, I found companies that valued my skills at a much higher rate. I'm now
                  a Senior UI Designer with a 50% salary increase and better benefits!
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">Posted 3 months ago</div>
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Helpful (36)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                      <AvatarFallback>EL</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Remote Work Dream</CardTitle>
                      <CardDescription>By Emma Lee</CardDescription>
                    </div>
                  </div>
                  <Badge>Full Stack</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  I wanted to transition to remote work but kept getting rejected. The skills gap analysis showed I
                  needed to strengthen my async communication and self-management skills to appeal to remote employers.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  After updating my profile and focusing on remote-friendly companies, I received 3 offers within a
                  month. I'm now working fully remote for a global company with teammates across different time zones.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">Posted 2 months ago</div>
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Helpful (29)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline">Load More Stories</Button>
          </div>
        </TabsContent>

        <TabsContent value="frontend" className="mt-6">
          {/* Frontend-specific success stories would go here */}
          <div className="text-center py-8 text-muted-foreground">Loading frontend success stories...</div>
        </TabsContent>

        <TabsContent value="fullstack" className="mt-6">
          {/* Full stack-specific success stories would go here */}
          <div className="text-center py-8 text-muted-foreground">Loading full stack success stories...</div>
        </TabsContent>

        <TabsContent value="design" className="mt-6">
          {/* Design-specific success stories would go here */}
          <div className="text-center py-8 text-muted-foreground">Loading design success stories...</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

