"use client"

import * as React from "react"
import { useState } from "react"
import { Plus, Trash2, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Certification {
  name: string
  issuer: string
  date: string
}

interface SkillsData {
  skillsList: string[]
  certifications: Certification[]
  completed?: boolean
}

interface SkillsFormProps {
  data: SkillsData
  updateData: (data: SkillsData) => void
}

// Sample data for autofill suggestions
const suggestions = {
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "UI/UX Design",
    "Project Management",
    "Data Analysis",
    "Marketing",
    "Communication",
  ],
  certifications: [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Microsoft Certified: Azure",
    "Certified Scrum Master",
    "PMP",
  ],
  issuers: ["Amazon Web Services", "Google", "Microsoft", "Scrum Alliance", "PMI"],
}

export default function SkillsForm({ data, updateData }: SkillsFormProps) {
  const [formData, setFormData] = useState<SkillsData>(data)
  const [newSkill, setNewSkill] = useState("")
  const [showSuggestions, setShowSuggestions] = useState<Record<string, boolean>>({
    skills: false,
    certName: false,
    certIssuer: false,
  })

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setFormData({
        ...formData,
        skillsList: [...formData.skillsList, newSkill.trim()],
      })
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = [...formData.skillsList]
    updatedSkills.splice(index, 1)
    setFormData({ ...formData, skillsList: updatedSkills })
  }

  const handleCertificationChange = (index: number, field: keyof Certification, value: string) => {
    const updatedCertifications = [...formData.certifications]
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [field]: value,
    }
    setFormData({ ...formData, certifications: updatedCertifications })
  }

  const handleAddCertification = () => {
    setFormData({
      ...formData,
      certifications: [
        ...formData.certifications,
        {
          name: "",
          issuer: "",
          date: "",
        },
      ],
    })
  }

  const handleRemoveCertification = (index: number) => {
    const updatedCertifications = [...formData.certifications]
    updatedCertifications.splice(index, 1)
    setFormData({ ...formData, certifications: updatedCertifications })
  }

  const handleFocus = (field: string) => {
    setShowSuggestions({ ...showSuggestions, [field]: true })
  }

  const handleBlur = (field: string) => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions({ ...showSuggestions, [field]: false })
    }, 200)
  }

  const handleCertFocus = (index: number, field: string) => {
    setShowSuggestions({ ...showSuggestions, [`cert-${index}-${field}`]: true })
  }

  const handleCertBlur = (index: number, field: string) => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions({ ...showSuggestions, [`cert-${index}-${field}`]: false })
    }, 200)
  }

  const handleSkillSuggestionClick = (skill: string) => {
    setNewSkill(skill)
    setShowSuggestions({ ...showSuggestions, skills: false })
  }

  const handleCertSuggestionClick = (index: number, field: keyof Certification, value: string) => {
    handleCertificationChange(index, field, value)
    setShowSuggestions({ ...showSuggestions, [`cert-${index}-${field}`]: false })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Skills</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {formData.skillsList.map(
            (skill, index) =>
              skill && (
                <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                  <button
                    type="button"
                    className="ml-2 text-muted-foreground hover:text-foreground"
                    onClick={() => handleRemoveSkill(index)}
                  >
                    ×
                  </button>
                </Badge>
              ),
          )}
        </div>

        <div className="flex gap-2 relative">
          <div className="flex-1">
            <Input
              placeholder="Add a skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddSkill())}
              onFocus={() => handleFocus("skills")}
              onBlur={() => handleBlur("skills")}
            />
            {showSuggestions.skills && (
              <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
                <ul>
                  {suggestions.skills
                    .filter((skill) => skill.toLowerCase().includes(newSkill.toLowerCase()))
                    .map((suggestion, i) => (
                      <li
                        key={i}
                        className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                        onClick={() => handleSkillSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                </ul>
              </Card>
            )}
          </div>
          <Button type="button" onClick={handleAddSkill}>
            Add
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Certifications</h3>

        {formData.certifications.map((certification, index) => (
          <Card key={index} className="relative">
            <CardContent className="pt-6">
              {index > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => handleRemoveCertification(index)}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                  <span className="sr-only">Remove certification</span>
                </Button>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative md:col-span-2">
                  <Label htmlFor={`cert-name-${index}`}>Certification Name</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                      <Award className="h-4 w-4" />
                    </div>
                    <Input
                      id={`cert-name-${index}`}
                      value={certification.name}
                      onChange={(e) => handleCertificationChange(index, "name", e.target.value)}
                      onFocus={() => handleCertFocus(index, "name")}
                      onBlur={() => handleCertBlur(index, "name")}
                      className="pl-10"
                      placeholder="Enter certification name"
                    />
                  </div>
                  {showSuggestions[`cert-${index}-name`] && (
                    <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
                      <ul>
                        {suggestions.certifications.map((suggestion, i) => (
                          <li
                            key={i}
                            className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                            onClick={() => handleCertSuggestionClick(index, "name", suggestion)}
                          >
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}
                </div>

                <div className="space-y-2 relative">
                  <Label htmlFor={`cert-issuer-${index}`}>Issuing Organization</Label>
                  <Input
                    id={`cert-issuer-${index}`}
                    value={certification.issuer}
                    onChange={(e) => handleCertificationChange(index, "issuer", e.target.value)}
                    onFocus={() => handleCertFocus(index, "issuer")}
                    onBlur={() => handleCertBlur(index, "issuer")}
                    placeholder="Enter issuing organization"
                  />
                  {showSuggestions[`cert-${index}-issuer`] && (
                    <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
                      <ul>
                        {suggestions.issuers.map((suggestion, i) => (
                          <li
                            key={i}
                            className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                            onClick={() => handleCertSuggestionClick(index, "issuer", suggestion)}
                          >
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`cert-date-${index}`}>Date Earned</Label>
                  <Input
                    id={`cert-date-${index}`}
                    type="month"
                    value={certification.date}
                    onChange={(e) => handleCertificationChange(index, "date", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Button variant="outline" onClick={handleAddCertification} className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add Another Certification
        </Button>
      </div>
    </div>
  )
}