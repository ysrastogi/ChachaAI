"use client"

import { useState } from "react"
import { Briefcase } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

interface ProfessionalSummaryData {
  summary: string
  title: string
  industry: string
  completed?: boolean
}

interface ProfessionalSummaryFormProps {
  data: ProfessionalSummaryData
  updateData: (data: ProfessionalSummaryData) => void
}

// Sample data for autofill suggestions
const suggestions = {
  title: ["Software Engineer", "Product Manager", "UX Designer", "Marketing Specialist", "Data Scientist"],
  industry: ["Technology", "Healthcare", "Finance", "Education", "Manufacturing", "Retail"],
  summary: [
    "Experienced software engineer with a passion for creating efficient and scalable solutions.",
    "Creative product manager with a track record of launching successful products.",
    "Detail-oriented UX designer focused on creating intuitive user experiences.",
  ],
}

export default function ProfessionalSummaryForm({ data, updateData }: ProfessionalSummaryFormProps) {
  const [formData, setFormData] = useState<ProfessionalSummaryData>(data)
  const [showSuggestions, setShowSuggestions] = useState<Record<string, boolean>>({
    title: false,
    summary: false,
  })

  const handleChange = (field: keyof ProfessionalSummaryData, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = () => {
    updateData(formData)
  }

  const handleAutofill = (field: keyof ProfessionalSummaryData, value: string) => {
    setFormData({ ...formData, [field]: value })
    setShowSuggestions({ ...showSuggestions, [field]: false })
  }

  const handleFocus = (field: keyof ProfessionalSummaryData) => {
    setShowSuggestions({ ...showSuggestions, [field]: true })
  }

  const handleBlur = (field: keyof ProfessionalSummaryData) => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions({ ...showSuggestions, [field]: false })
    }, 200)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 relative">
        <Label htmlFor="title">Professional Title</Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
            <Briefcase className="h-4 w-4" />
          </div>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            onFocus={() => handleFocus("title")}
            onBlur={() => handleBlur("title")}
            className="pl-10"
            placeholder="e.g. Software Engineer, Product Manager"
          />
        </div>
        {showSuggestions.title && suggestions.title.length > 0 && (
          <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
            <ul>
              {suggestions.title.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                  onClick={() => handleAutofill("title", suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select value={formData.industry} onValueChange={(value) => handleChange("industry", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select an industry" />
          </SelectTrigger>
          <SelectContent>
            {suggestions.industry.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2 relative">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          value={formData.summary}
          onChange={(e) => handleChange("summary", e.target.value)}
          onFocus={() => handleFocus("summary")}
          onBlur={() => handleBlur("summary")}
          placeholder="Write a brief summary of your professional background and goals"
          className="min-h-[150px]"
        />
        {showSuggestions.summary && suggestions.summary.length > 0 && (
          <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
            <ul>
              {suggestions.summary.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                  onClick={() => handleAutofill("summary", suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </div>
  )
}

