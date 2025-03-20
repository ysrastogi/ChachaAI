"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Edit } from "lucide-react"
import { SkillsGapAnalysis } from "@/components/skills-gap-analysis"
import { ProfileVersions } from "@/components/profile-versions"; // Assuming this import is correct


interface JobMatch {
  title: string
  company: string
  location: string
  salary: string
  matchScore: number
  skills: string[]
  posted: string
  improvements: string[]
}

export default function JobMatching() {
  const [selectedTab, setSelectedTab] = useState("matches")

  const jobMatches: JobMatch[] = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120K - $150K",
      matchScore: 92,
      skills: ["React", "TypeScript", "Next.js"],
      posted: "2 days ago",
      improvements: [
        "Add more React project examples",
        "Highlight TypeScript experience",
        "Add Next.js certification"
      ]
    },
    {
      title: "UI/UX Developer",
      company: "Design Systems Co.",
      location: "Remote",
      salary: "$100K - $130K",
      matchScore: 85,
      skills: ["Figma", "React", "CSS"],
      posted: "2 days ago",
      improvements: [
        "Add design portfolio link",
        "Highlight UI/UX projects",
        "Add Figma certification"
      ]
    },
    {
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "New York, NY",
      salary: "$130K - $160K",
      matchScore: 78,
      skills: ["React", "Node.js", "MongoDB"],
      posted: "2 days ago",
      improvements: [
        "Add backend project examples",
        "Highlight database experience",
        "Add Node.js certification"
      ]
    }
  ]

  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Job Matching</h1>
          <p className="text-muted-foreground">Find your perfect job match and improve your profile</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Edit Profile</Button>
          <Button>Create Profile Version</Button>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <Button 
          variant={selectedTab === "matches" ? "default" : "outline"}
          onClick={() => setSelectedTab("matches")}
        >
          Job Matches
        </Button>
        <Button 
          variant={selectedTab === "skills" ? "default" : "outline"}
          onClick={() => setSelectedTab("skills")}
        >
          Skills Gap Analysis
        </Button>
        <Button 
          variant={selectedTab === "versions" ? "default" : "outline"}
          onClick={() => setSelectedTab("versions")}
        >
          Profile Versions
        </Button>
      </div>

      {selectedTab === "matches" && (
        <div className="space-y-6">
          <div className="grid gap-4">
            {jobMatches.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
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
        </div>
      )}

      {selectedTab === "skills" && (
        <SkillsGapAnalysis />
      )}

      {selectedTab === "versions" && (
        <ProfileVersions />
      )}
    </div>
  )
}

function JobCard({ title, company, location, salary, matchScore, skills, posted, improvements }: JobMatch) {
  return (
    <Card>
      <CardContent className="flex gap-6 p-6">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-muted-foreground">{company}</p>
            </div>
            <Badge className="text-lg">{matchScore}%</Badge>
          </div>

          <div className="flex gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {posted}
            </div>
            <div>${salary}</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Improvement Suggestions</p>
            {improvements.map((improvement) => (
              <div key={improvement} className="flex items-center text-sm text-muted-foreground">
                <span className="mr-2">•</span>
                {improvement}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button>View Details</Button>
          <Button variant="outline">Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  )
}