"use client"

import { useState } from "react"
import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface NotificationChannel {
  id: string
  label: string
  icon: React.ReactNode
  enabled: boolean
}

interface NotificationPreference {
  id: string
  label: string
  enabled: boolean
  frequency: "immediate" | "daily" | "weekly"
  channels: string[]
}

export default function NotificationSettings() {
  const { toast } = useToast()
  const [channels, setChannels] = useState<NotificationChannel[]>([
    { id: "email", label: "Email", icon: <Mail className="h-4 w-4" />, enabled: true },
    { id: "push", label: "Push Notifications", icon: <Bell className="h-4 w-4" />, enabled: true },
    { id: "inapp", label: "In-App Notifications", icon: <MessageSquare className="h-4 w-4" />, enabled: true },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="h-4 w-4" />, enabled: false },
  ])

  const [preferences, setPreferences] = useState<NotificationPreference[]>([
    {
      id: "applications",
      label: "Application Updates",
      enabled: true,
      frequency: "immediate",
      channels: ["email", "push", "inapp"],
    },
    {
      id: "interviews",
      label: "Interview Reminders",
      enabled: true,
      frequency: "immediate",
      channels: ["email", "push"],
    },
    {
      id: "deadlines",
      label: "Application Deadlines",
      enabled: true,
      frequency: "daily",
      channels: ["email", "inapp"],
    },
    {
      id: "recommendations",
      label: "Job Recommendations",
      enabled: true,
      frequency: "weekly",
      channels: ["email"],
    },
  ])

  const [newAlert, setNewAlert] = useState({
    jobType: "",
    company: "",
    enabled: true,
  })

  const handleChannelToggle = (channelId: string) => {
    setChannels(channels.map(channel =>
      channel.id === channelId
        ? { ...channel, enabled: !channel.enabled }
        : channel
    ))
  }

  const handlePreferenceToggle = (prefId: string) => {
    setPreferences(preferences.map(pref =>
      pref.id === prefId
        ? { ...pref, enabled: !pref.enabled }
        : pref
    ))
  }

  const handleFrequencyChange = (prefId: string, frequency: "immediate" | "daily" | "weekly") => {
    setPreferences(preferences.map(pref =>
      pref.id === prefId
        ? { ...pref, frequency }
        : pref
    ))
  }

  const handleSaveSettings = () => {
    // In a real app, you would save these settings to the backend
    toast({
      title: "Settings Saved",
      description: "Your notification preferences have been updated.",
    })
  }

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Notification Settings</h1>
        <Button onClick={handleSaveSettings}>Save Changes</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Notification Channels</CardTitle>
          <CardDescription>Choose how you want to receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {channels.map(channel => (
            <div key={channel.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {channel.icon}
                <Label htmlFor={channel.id}>{channel.label}</Label>
              </div>
              <Switch
                id={channel.id}
                checked={channel.enabled}
                onCheckedChange={() => handleChannelToggle(channel.id)}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Customize when and how you receive different types of notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {preferences.map(pref => (
            <div key={pref.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor={pref.id}>{pref.label}</Label>
                <Switch
                  id={pref.id}
                  checked={pref.enabled}
                  onCheckedChange={() => handlePreferenceToggle(pref.id)}
                />
              </div>
              {pref.enabled && (
                <div className="ml-6 space-y-4">
                  <div className="space-y-2">
                    <Label>Frequency</Label>
                    <Select
                      value={pref.frequency}
                      onValueChange={(value: "immediate" | "daily" | "weekly") =>
                        handleFrequencyChange(pref.id, value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="daily">Daily Digest</SelectItem>
                        <SelectItem value="weekly">Weekly Summary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Alerts</CardTitle>
          <CardDescription>Create custom alerts for specific job types or companies</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="jobType">Job Type</Label>
              <Input
                id="jobType"
                value={newAlert.jobType}
                onChange={(e) => setNewAlert({ ...newAlert, jobType: e.target.value })}
                placeholder="e.g. Frontend Developer"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={newAlert.company}
                onChange={(e) => setNewAlert({ ...newAlert, company: e.target.value })}
                placeholder="e.g. Google"
              />
            </div>
          </div>
          <Button
            className="w-full"
            variant="outline"
            onClick={() => {
              toast({
                title: "Alert Created",
                description: "Your custom alert has been created successfully.",
              })
              setNewAlert({ jobType: "", company: "", enabled: true })
            }}
          >
            Create Alert
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
