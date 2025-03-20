import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import JobMatching from "@/pages/JobMatching";
import Dashboard from "@/pages/Dashboard";
import CreateProfile from "@/pages/CreateProfile";
import Documents from "@/pages/Documents";
import NotificationSettings from "@/pages/NotificationSettings";
import CareerMoodBoard from "@/pages/CareerMoodBoard";
import NetworkVisualizer from "@/pages/NetworkVisualizer";
import CareerRecommendations from "@/pages/CareerRecommendations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/job-matching" component={JobMatching} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/create-profile" component={CreateProfile} />
      <Route path="/documents" component={Documents} />
      <Route path="/notifications" component={NotificationSettings} />
      <Route path="/career-mood-board" component={CareerMoodBoard} />
      <Route path="/network" component={NetworkVisualizer} />
      <Route path="/career-recommendations" component={CareerRecommendations} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;