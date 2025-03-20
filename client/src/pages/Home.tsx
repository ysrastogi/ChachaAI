import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { FormFieldMapping } from "@/components/FormFieldMapping";
import { useQuery } from "@tanstack/react-query";
import type { User } from "@shared/schema";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Search, Target, Share2, Brain } from "lucide-react";

export default function Home() {
  const { toast } = useToast();
  const [autoSubmit, setAutoSubmit] = useState(false);

  const { data: user } = useQuery<User>({
    queryKey: ["/api/users/1"],
    retry: false,
  });

  const handleStartFilling = () => {
    if (!user) {
      toast({
        title: "Profile Required",
        description: "Please set up your profile before auto-filling applications",
        variant: "destructive",
      });
      return;
    }

    // Trigger form detection and filling
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: "START_AUTOFILL",
          autoSubmit: autoSubmit,
        });

        toast({
          title: "Auto-filling Started",
          description: autoSubmit
            ? "Form will be filled and submitted automatically"
            : "Form will be filled, please review before submitting",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Job Application Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!user ? (
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Set up your profile to start auto-filling job applications
              </p>
              <Link href="/create-profile">
                <Button className="w-full">Set Up Profile</Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="flex items-center space-x-2 mb-4">
                <Switch
                  id="auto-submit"
                  checked={autoSubmit}
                  onCheckedChange={setAutoSubmit}
                />
                <Label htmlFor="auto-submit">
                  Auto-submit after filling
                </Label>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={handleStartFilling}
              >
                Start Auto-Filling
              </Button>

              <Link href="/job-matching">
                <Button variant="outline" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Find Matching Jobs
                </Button>
              </Link>

              <Link href="/documents">
                <Button variant="outline" className="w-full">
                  Manage Documents
                </Button>
              </Link>

              <Link href="/dashboard">
                <Button variant="outline" className="w-full">
                  View Analytics
                </Button>
              </Link>

              <Link href="/career-mood-board">
                <Button variant="outline" className="w-full">
                  <Target className="h-4 w-4 mr-2" />
                  Career Vision Board
                </Button>
              </Link>

              <Link href="/network">
                <Button variant="outline" className="w-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  Network Connections
                </Button>
              </Link>

              <Link href="/career-recommendations">
                <Button variant="outline" className="w-full">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Career Recommendations
                </Button>
              </Link>

              <Link href="/notifications">
                <Button variant="outline" className="w-full">
                  <Bell className="h-4 w-4 mr-2" />
                  Notification Settings
                </Button>
              </Link>

              <FormFieldMapping />

              <Link href="/profile">
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </Link>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}