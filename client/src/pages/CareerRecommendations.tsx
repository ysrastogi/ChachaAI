"use client"

import { CareerRecommendations } from "@/components/career-recommendations"

export default function CareerRecommendationsPage() {
  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Career Path Recommendations</h1>
        <p className="text-muted-foreground">AI-powered career path suggestions based on your profile</p>
      </div>
      <CareerRecommendations />
    </div>
  )
}
