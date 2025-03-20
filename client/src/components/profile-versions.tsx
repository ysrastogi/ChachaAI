"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Download, Edit, PlusCircle, Trash } from "lucide-react"

export function ProfileVersions() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Profile Versions</h2>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Version
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Main Profile</CardTitle>
                <CardDescription>Your default profile for all applications</CardDescription>
              </div>
              <Badge>Default</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Key Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {["React", "JavaScript", "HTML/CSS", "Redux", "REST APIs"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Experience Highlights</h3>
                <ul className="text-sm space-y-1">
                  <li>5+ years of frontend development experience</li>
                  <li>Led team of 3 developers on e-commerce project</li>
                  <li>Improved site performance by 40%</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline" size="sm" className="w-full">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Frontend Specialist</CardTitle>
                <CardDescription>Tailored for frontend developer positions</CardDescription>
              </div>
              <Badge variant="outline">Custom</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Key Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {["React", "Redux", "CSS-in-JS", "Performance Optimization", "Responsive Design"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Experience Highlights</h3>
                <ul className="text-sm space-y-1">
                  <li>Built complex UI components from scratch</li>
                  <li>Implemented responsive designs for mobile-first applications</li>
                  <li>Created reusable component libraries</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline" size="sm" className="w-full">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Copy className="mr-2 h-4 w-4" />
              Duplicate
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Full Stack Developer</CardTitle>
                <CardDescription>Tailored for full stack positions</CardDescription>
              </div>
              <Badge variant="outline">Custom</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Key Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {["React", "Node.js", "Express", "MongoDB", "RESTful APIs"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Experience Highlights</h3>
                <ul className="text-sm space-y-1">
                  <li>Developed full stack applications with MERN stack</li>
                  <li>Implemented authentication and authorization systems</li>
                  <li>Designed and implemented database schemas</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline" size="sm" className="w-full">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button variant="destructive" size="sm" className="w-full">
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
