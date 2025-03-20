"use client"

import * as React from "react"
import { useState } from "react"
import { Plus, Trash2, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

interface WorkExperience {
  company: string
  title: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

interface WorkExperienceData {
  experiences: WorkExperience[]
  completed?: boolean
}

interface WorkExperienceFormProps {
  data: WorkExperienceData
  updateData: (data: WorkExperienceData) => void
}

// Sample data for autofill suggestions
const suggestions = {
  companies: ["Google", "Microsoft", "Apple", "Amazon", "Meta"],
  titles: ["Software Engineer", "Product Manager", "UX Designer", "Marketing Specialist"],
  locations: ["San Francisco, CA", "New York, NY", "Seattle, WA", "Austin, TX"],
}

export default function WorkExperienceForm({ data, updateData }: WorkExperienceFormProps) {
  const [formData, setFormData] = useState<WorkExperienceData>(data)
  const [showSuggestions, setShowSuggestions] = useState<Record<string, boolean>>({})

  const handleChange = (index: number, field: keyof WorkExperience, value: any) => {
    const updatedExperiences = [...formData.experiences]
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    }

    // If current is checked, clear the end date
    if (field === "current" && value === true) {
      updatedExperiences[index].endDate = ""
    }

    setFormData({ ...formData, experiences: updatedExperiences })
  }

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        {
          company: "",
          title: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    })
  }

  const handleRemoveExperience = (index: number) => {
    const updatedExperiences = [...formData.experiences]
    updatedExperiences.splice(index, 1)
    setFormData({ ...formData, experiences: updatedExperiences })
  }

  const handleFocus = (index: number, field: string) => {
    setShowSuggestions({ ...showSuggestions, [`${index}-${field}`]: true })
  }

  const handleBlur = (index: number, field: string) => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions({ ...showSuggestions, [`${index}-${field}`]: false })
    }, 200)
  }

  const handleAutofill = (index: number, field: keyof WorkExperience, value: string) => {
    handleChange(index, field, value)
    setShowSuggestions({ ...showSuggestions, [`${index}-${field}`]: false })
  }

  return (
    <div className="space-y-6">
      {formData.experiences.map((experience, index) => (
        <Card key={index} className="relative">
          <CardContent className="pt-6">
            {index > 0 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => handleRemoveExperience(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
                <span className="sr-only">Remove experience</span>
              </Button>
            )}

            <h3 className="text-lg font-medium mb-4">
              {index === 0 ? "Current/Most Recent Position" : `Previous Position ${index}`}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 relative">
                <Label htmlFor={`company-${index}`}>Company</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                    <Building className="h-4 w-4" />
                  </div>
                  <Input
                    id={`company-${index}`}
                    value={experience.company}
                    onChange={(e) => handleChange(index, "company", e.target.value)}
                    onFocus={() => handleFocus(index, "company")}
                    onBlur={() => handleBlur(index, "company")}
                    className="pl-10"
                    placeholder="Enter company name"
                  />
                </div>
                {showSuggestions[`${index}-company`] && (
                  <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
                    <ul>
                      {suggestions.companies.map((suggestion, i) => (
                        <li
                          key={i}
                          className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                          onClick={() => handleAutofill(index, "company", suggestion)}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>

              <div className="space-y-2 relative">
                <Label htmlFor={`title-${index}`}>Job Title</Label>
                <Input
                  id={`title-${index}`}
                  value={experience.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                  onFocus={() => handleFocus(index, "title")}
                  onBlur={() => handleBlur(index, "title")}
                  placeholder="Enter job title"
                />
                {showSuggestions[`${index}-title`] && (
                  <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
                    <ul>
                      {suggestions.titles.map((suggestion, i) => (
                        <li
                          key={i}
                          className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                          onClick={() => handleAutofill(index, "title", suggestion)}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>

              <div className="space-y-2 relative">
                <Label htmlFor={`location-${index}`}>Location</Label>
                <Input
                  id={`location-${index}`}
                  value={experience.location}
                  onChange={(e) => handleChange(index, "location", e.target.value)}
                  onFocus={() => handleFocus(index, "location")}
                  onBlur={() => handleBlur(index, "location")}
                  placeholder="Enter job location"
                />
                {showSuggestions[`${index}-location`] && (
                  <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
                    <ul>
                      {suggestions.locations.map((suggestion, i) => (
                        <li
                          key={i}
                          className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                          onClick={() => handleAutofill(index, "location", suggestion)}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`start-date-${index}`}>Start Date</Label>
                <Input
                  id={`start-date-${index}`}
                  type="month"
                  value={experience.startDate}
                  onChange={(e) => handleChange(index, "startDate", e.target.value)}
                />
              </div>

              <div className="space-y-2 md:col-span-2 flex items-start space-x-2">
                <Checkbox
                  id={`current-${index}`}
                  checked={experience.current}
                  onCheckedChange={(checked) => handleChange(index, "current", checked)}
                />
                <Label htmlFor={`current-${index}`} className="font-normal">
                  I currently work here
                </Label>
              </div>

              {!experience.current && (
                <div className="space-y-2">
                  <Label htmlFor={`end-date-${index}`}>End Date</Label>
                  <Input
                    id={`end-date-${index}`}
                    type="month"
                    value={experience.endDate}
                    onChange={(e) => handleChange(index, "endDate", e.target.value)}
                    disabled={experience.current}
                  />
                </div>
              )}

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor={`description-${index}`}>Description</Label>
                <Textarea
                  id={`description-${index}`}
                  value={experience.description}
                  onChange={(e) => handleChange(index, "description", e.target.value)}
                  placeholder="Describe your responsibilities and achievements"
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" onClick={handleAddExperience} className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        Add Another Experience
      </Button>
    </div>
  )
}