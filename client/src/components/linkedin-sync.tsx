"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, LinkedinIcon, CheckCircle, XCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface LinkedInProfile {
  lastSynced?: string
  status: 'not_connected' | 'syncing' | 'synced' | 'error'
}

export function LinkedInSync() {
  const { toast } = useToast()
  const [profile, setProfile] = useState<LinkedInProfile>({
    status: 'not_connected'
  })

  const handleSync = async () => {
    try {
      setProfile({ status: 'syncing' })

      // Will implement actual LinkedIn OAuth flow here
      toast({
        title: "Connecting to LinkedIn",
        description: "Redirecting to LinkedIn for authentication..."
      })

      // Simulated delay for now
      await new Promise(resolve => setTimeout(resolve, 2000))

      setProfile({
        lastSynced: new Date().toISOString(),
        status: 'synced'
      })

      toast({
        title: "Profile Synced",
        description: "Your LinkedIn profile has been successfully synchronized."
      })
    } catch (error) {
      setProfile({ status: 'error' })
      toast({
        title: "Sync Failed",
        description: "Failed to sync LinkedIn profile. Please try again.",
        variant: "destructive"
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>LinkedIn Profile Sync</CardTitle>
            <CardDescription>Keep your profile in sync with LinkedIn</CardDescription>
          </div>
          {profile.status === 'synced' && (
            <Badge variant="outline" className="bg-green-50">
              <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
              Synced
            </Badge>
          )}
          {profile.status === 'error' && (
            <Badge variant="outline" className="bg-red-50">
              <XCircle className="h-4 w-4 mr-1 text-red-500" />
              Error
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {profile.lastSynced && (
            <p className="text-sm text-muted-foreground">
              Last synced: {new Date(profile.lastSynced).toLocaleString()}
            </p>
          )}

          <Button
            className="w-full"
            onClick={handleSync}
            disabled={profile.status === 'syncing'}
          >
            {profile.status === 'syncing' ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Syncing...
              </>
            ) : (
              <>
                <LinkedinIcon className="mr-2 h-4 w-4" />
                {profile.status === 'synced' ? 'Sync Again' : 'Connect LinkedIn'}
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}