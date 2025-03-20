"use client"

import { useState } from "react"
import { Plus, Trash2, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Education {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  current: boolean
}

interface EducationData {
  educationList: Education[]
  completed?: boolean
}

interface EducationFormProps {
  data: EducationData
  updateData: (data: EducationData) => void
}

// Sample data for autofill suggestions
const suggestions = {
  institutions: ["Harvard University", "Stanford University", "MIT", "UC Berkeley", "Oxford University"],
  degrees: ["Bachelor's", "Master's", "Ph.D.", "Associate's", "Certificate"],
  fields: ["Computer Science", "Business Administration", "Engineering", "Psychology", "Design"],
}

export default function EducationForm({ data, updateData }: EducationFormProps) {
  const [formData, setFormData] = useState<EducationData>(data)
  const [showSuggestions, setShowSuggestions] = useState<Record<string, boolean>>({})

  const handleChange = (index: number, field: keyof Education, value: any) => {
    const updatedEducation = [...formData.educationList]
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    }

    // If current is checked, clear the end date
    if (field === "current" && value === true) {
      updatedEducation[index].endDate = ""
    }

    setFormData({ ...formData, educationList: updatedEducation })
  }

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      educationList: [
        ...formData.educationList,
        {
          institution: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          current: false,
        },
      ],
    })
  }

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...formData.educationList]
    updatedEducation.splice(index, 1)
    setFormData({ ...formData, educationList: updatedEducation })
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

  const handleAutofill = (index: number, field: keyof Education, value: string) => {
    handleChange(index, field, value)
    setShowSuggestions({ ...showSuggestions, [`${index}-${field}`]: false })
  }

  return (
    <div className="space-y-6">
      {formData.educationList.map((education, index) => (
        <Card key={index} className="relative">
          <CardContent className="pt-6">
            {index > 0 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => handleRemoveEducation(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
                <span className="sr-only">Remove education</span>
              </Button>
            )}

            <h3 className="text-lg font-medium mb-4">
              {index === 0 ? "Highest Level of Education" : `Additional Education ${index}`}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 relative md:col-span-2">
                <Label htmlFor={`institution-${index}`}>Institution</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <Input
                    id={`institution-${index}`}
                    value={education.institution}
                    onChange={(e) => handleChange(index, "institution", e.target.value)}
                    onFocus={() => handleFocus(index, "institution")}
                    onBlur={() => handleBlur(index, "institution")}
                    className="pl-10"
                    placeholder="Enter school or university name"
                  />
                </div>
                {showSuggestions[`${index}-institution`] && (
                  <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
                    <ul>
                      {suggestions.institutions.map((suggestion, i) => (
                        <li
                          key={i}
                          className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                          onClick={() => handleAutofill(index, "institution", suggestion)}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`degree-${index}`}>Degree</Label>
                <Select value={education.degree} onValueChange={(value) => handleChange(index, "degree", value)}>
                  <SelectTrigger id={`degree-${index}`}>
                    <SelectValue placeholder="Select degree type" />
                  </SelectTrigger>
                  <SelectContent>
                    {suggestions.degrees.map((degree) => (
                      <SelectItem key={degree} value={degree}>
                        {degree}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 relative">
                <Label htmlFor={`field-${index}`}>Field of Study</Label>
                <Input
                  id={`field-${index}`}
                  value={education.field}
                  onChange={(e) => handleChange(index, "field", e.target.value)}
                  onFocus={() => handleFocus(index, "field")}
                  onBlur={() => handleBlur(index, "field")}
                  placeholder="Enter field of study"
                />
                {showSuggestions[`${index}-field`] && (
                  <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
                    <ul>
                      {suggestions.fields.map((suggestion, i) => (
                        <li
                          key={i}
                          className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                          onClick={() => handleAutofill(index, "field", suggestion)}
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
                  value={education.startDate}
                  onChange={(e) => handleChange(index, "startDate", e.target.value)}
                />
              </div>

              <div className="space-y-2 md:col-span-2 flex items-start space-x-2">
                <Checkbox
                  id={`current-${index}`}
                  checked={education.current}
                  onCheckedChange={(checked) => handleChange(index, "current", checked)}
                />
                <Label htmlFor={`current-${index}`} className="font-normal">
                  I am currently studying here
                </Label>
              </div>

              {!education.current && (
                <div className="space-y-2">
                  <Label htmlFor={`end-date-${index}`}>End Date</Label>
                  <Input
                    id={`end-date-${index}`}
                    type="month"
                    value={education.endDate}
                    onChange={(e) => handleChange(index, "endDate", e.target.value)}
                    disabled={education.current}
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" onClick={handleAddEducation} className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        Add Another Education
      </Button>
    </div>
  )
}

