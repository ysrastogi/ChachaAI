import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThumbsUp } from "lucide-react"

export function FeatureRequests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Feature Requests</CardTitle>
        <CardDescription>Popular feature requests from other users</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-md p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium">AI-Powered Cover Letter Generator</h3>
              <Badge>Under Review</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              A tool that automatically generates customized cover letters based on your profile and the job
              description.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">Requested by 156 users</div>
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Upvote (156)
              </Button>
            </div>
          </div>

          <div className="border rounded-md p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium">Salary Insights and Negotiation Tools</h3>
              <Badge variant="outline" className="bg-green-500 text-white">
                Coming Soon
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Access to industry salary data and tools to help negotiate better compensation packages.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">Requested by 203 users</div>
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Upvote (203)
              </Button>
            </div>
          </div>

          <div className="border rounded-md p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium">Interview Recording and Analysis</h3>
              <Badge>Under Review</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Record and analyze mock interviews to get feedback on your communication style and responses.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">Requested by 89 users</div>
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Upvote (89)
              </Button>
            </div>
          </div>

          <div className="border rounded-md p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium">Company Culture Insights</h3>
              <Badge>Under Review</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Get insights into company culture, work-life balance, and management style from current and former
              employees.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">Requested by 124 users</div>
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Upvote (124)
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

