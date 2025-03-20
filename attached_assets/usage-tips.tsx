import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink, Lightbulb, Play } from "lucide-react"

export function UsageTips() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="personalized">
        <TabsList>
          <TabsTrigger value="personalized">Personalized Tips</TabsTrigger>
          <TabsTrigger value="profile">Profile Tips</TabsTrigger>
          <TabsTrigger value="applications">Application Tips</TabsTrigger>
          <TabsTrigger value="interviews">Interview Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="personalized" className="mt-6">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Your Personalized Tips</CardTitle>
              <CardDescription>Based on your usage patterns and job search activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg border">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Complete Your Profile</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Your profile is 75% complete. Adding your certifications and education details could increase your
                      match scores by up to 15%.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Complete Profile
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Follow Up on Applications</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      You have 3 applications that are over 2 weeks old with no response. Consider sending a follow-up
                      email to check on your application status.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      View Applications
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Prepare for Upcoming Interview</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      You have a technical interview scheduled for tomorrow. We've prepared a list of common interview
                      questions for this company based on other users' experiences.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      View Interview Prep
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Applications Submitted</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Profile Views</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Interviews Scheduled</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Response Rate</span>
                    <span className="font-medium">40%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Suggested Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Update your skills section</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Add portfolio projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Follow up on pending applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Prepare for upcoming interviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Learning Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm">Interview Preparation Guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm">Resume Writing Tips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm">Salary Negotiation Tactics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm">Remote Work Best Practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="profile" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Optimization Tips</CardTitle>
                <CardDescription>Make your profile stand out to recruiters and hiring managers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Highlight Your Achievements</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Instead of just listing job responsibilities, focus on specific achievements and results. Use
                      metrics and numbers whenever possible.
                    </p>
                    <div className="bg-muted p-3 rounded-md text-sm">
                      <p className="font-medium mb-1">Example:</p>
                      <p className="text-muted-foreground">
                        ❌ "Responsible for frontend development"
                        <br />✅ "Reduced page load time by 40% by optimizing React components, resulting in 15%
                        increase in user engagement"
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Tailor Your Skills Section</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Customize your skills section for each job application. Analyze the job description and prioritize
                      the skills that match the requirements.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="sm">
                        <Play className="mr-2 h-3 w-3" />
                        Watch Tutorial
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Use Industry Keywords</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Many companies use Applicant Tracking Systems (ATS) that scan for relevant keywords. Include
                      industry-specific terms and technologies in your profile.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Keyword Analyzer
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Step-by-step guides to optimize your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm">Creating an Effective Developer Profile</h3>
                      <p className="text-xs text-muted-foreground">12 minutes</p>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm">Showcasing Your Projects Effectively</h3>
                      <p className="text-xs text-muted-foreground">8 minutes</p>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm">Writing a Compelling Professional Summary</h3>
                      <p className="text-xs text-muted-foreground">10 minutes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Strategy Tips</CardTitle>
                <CardDescription>Maximize your chances of getting interviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Quality Over Quantity</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Focus on applying to jobs that closely match your skills and experience. A few well-tailored
                      applications are more effective than dozens of generic ones.
                    </p>
                    <div className="bg-muted p-3 rounded-md text-sm">
                      <p className="font-medium mb-1">Recommendation:</p>
                      <p className="text-muted-foreground">
                        Aim for 5-10 high-quality applications per week rather than 20+ generic ones.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Follow Up Strategically</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Send a follow-up email 1-2 weeks after applying if you haven't heard back. Keep it brief,
                      professional, and express continued interest.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Follow-up Templates
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Leverage Your Network</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Referrals significantly increase your chances of getting an interview. Reach out to connections at
                      target companies before applying.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="sm">
                        <Play className="mr-2 h-3 w-3" />
                        Networking Guide
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Timing</CardTitle>
                <CardDescription>When to apply for maximum visibility</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Best Days to Apply</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Research shows that applications submitted on Monday and Tuesday have higher response rates. Avoid
                      weekends when applications may get buried.
                    </p>
                    <div className="grid grid-cols-7 gap-1 mt-3">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                        <div
                          key={i}
                          className={`flex items-center justify-center rounded-full w-8 h-8 text-xs font-medium ${
                            i === 1 || i === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Hiring Seasons</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      January-February and September-October typically see increased hiring activity as companies
                      receive new budgets and finalize year-end plans.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        January
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        February
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        September
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        October
                      </Badge>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Response Expectations</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Most companies respond within 1-2 weeks if they're interested. If you haven't heard back after 2
                      weeks, it's appropriate to send a follow-up.
                    </p>
                    <div className="w-full bg-muted h-2 rounded-full mt-3">
                      <div className="bg-primary h-2 rounded-full w-[70%]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Application</span>
                      <span>1 week</span>
                      <span>2 weeks</span>
                      <span>3 weeks</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="interviews" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Interview Preparation</CardTitle>
                <CardDescription>Strategies to ace your technical and behavioral interviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Research the Company</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Thoroughly research the company's products, culture, and recent news. Prepare specific examples of
                      how your skills align with their needs.
                    </p>
                    <div className="bg-muted p-3 rounded-md text-sm">
                      <p className="font-medium mb-1">Checklist:</p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Company mission and values</li>
                        <li>Products and services</li>
                        <li>Recent news and announcements</li>
                        <li>Tech stack and tools</li>
                        <li>Company culture and work environment</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Practice Common Questions</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Prepare answers for common behavioral and technical questions. Use the STAR method (Situation,
                      Task, Action, Result) for behavioral questions.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Question Database
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Mock Interviews</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Practice with mock interviews to get comfortable with the format and receive feedback on your
                      responses and presentation.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="sm">
                        <Play className="mr-2 h-3 w-3" />
                        Schedule Mock Interview
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Interview Tips</CardTitle>
                <CardDescription>Specific advice for developer technical interviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Think Aloud</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      During coding challenges, explain your thought process. Interviewers want to understand how you
                      approach problems, not just the final solution.
                    </p>
                    <div className="bg-muted p-3 rounded-md text-sm">
                      <p className="font-medium mb-1">Example:</p>
                      <p className="text-muted-foreground">
                        "I'm thinking of using a hash map here because we need O(1) lookup time. Let me first validate
                        the input..."
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Review Core Concepts</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Refresh your knowledge of data structures, algorithms, and language-specific concepts. Be prepared
                      to explain fundamental concepts clearly.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline">Arrays</Badge>
                      <Badge variant="outline">Linked Lists</Badge>
                      <Badge variant="outline">Hash Tables</Badge>
                      <Badge variant="outline">Trees</Badge>
                      <Badge variant="outline">Graphs</Badge>
                      <Badge variant="outline">Sorting</Badge>
                      <Badge variant="outline">Searching</Badge>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Practice Coding Problems</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Regularly practice coding problems on platforms like LeetCode, HackerRank, or CodeSignal. Focus on
                      problems relevant to your target companies.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Problem Sets
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

