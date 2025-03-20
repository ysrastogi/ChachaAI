import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Edit, PlusCircle } from "lucide-react"
import { ProfileMatchCard } from "./profile-match-card"
import { SkillsGapAnalysis } from "./skills-gap-analysis"
import { ProfileVersions } from "./profile-versions"

export default function JobMatchingPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Matching</h1>
          <p className="text-muted-foreground">Find your perfect job match and improve your profile</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Profile Version
          </Button>
        </div>
      </div>

      <Tabs defaultValue="matches">
        <TabsList className="mb-6">
          <TabsTrigger value="matches">Job Matches</TabsTrigger>
          <TabsTrigger value="skills">Skills Gap Analysis</TabsTrigger>
          <TabsTrigger value="versions">Profile Versions</TabsTrigger>
        </TabsList>

        <TabsContent value="matches" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProfileMatchCard
              jobTitle="Senior Frontend Developer"
              company="TechCorp Inc."
              matchPercentage={92}
              location="San Francisco, CA"
              salary="$120K - $150K"
              skills={["React", "TypeScript", "Next.js"]}
              improvements={[
                "Add more React project examples",
                "Highlight TypeScript experience",
                "Add Next.js certification",
              ]}
            />

            <ProfileMatchCard
              jobTitle="UI/UX Developer"
              company="Design Systems Co."
              matchPercentage={85}
              location="Remote"
              salary="$100K - $130K"
              skills={["Figma", "React", "CSS"]}
              improvements={["Add design portfolio link", "Highlight UI/UX projects", "Add Figma certification"]}
            />

            <ProfileMatchCard
              jobTitle="Full Stack Engineer"
              company="StartupXYZ"
              matchPercentage={78}
              location="New York, NY"
              salary="$130K - $160K"
              skills={["React", "Node.js", "MongoDB"]}
              improvements={[
                "Add backend project examples",
                "Highlight database experience",
                "Add Node.js certification",
              ]}
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Profile Improvement Suggestions</CardTitle>
              <CardDescription>Based on your job search criteria and recent applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Technical Skills</h3>
                    <Badge variant="outline">High Impact</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Adding these skills could increase your match score by up to 15%
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">TypeScript</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Next.js</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">GraphQL</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">AWS</Badge>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Certifications</h3>
                    <Badge variant="outline">Medium Impact</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    These certifications are frequently requested in your target jobs
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">AWS Certified Developer</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Google Cloud Professional</Badge>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Project Experience</h3>
                    <Badge variant="outline">High Impact</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Highlighting these types of projects could increase your visibility
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Full-stack application with authentication and database integration</li>
                    <li>Performance optimization for large-scale applications</li>
                    <li>Mobile-responsive design implementation</li>
                  </ul>
                </div>

                <Button variant="outline" className="w-full mt-2">
                  <Edit className="mr-2 h-4 w-4" />
                  Update Profile with Suggestions
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <SkillsGapAnalysis />
        </TabsContent>

        <TabsContent value="versions">
          <ProfileVersions />
        </TabsContent>
      </Tabs>
    </div>
  )
}

