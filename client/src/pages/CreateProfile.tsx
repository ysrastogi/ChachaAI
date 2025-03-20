"use client"

import { useState } from "react"
import { useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import PersonalInfoForm from "@/components/PersonalInfoForm"
import ProfessionalSummaryForm from "@/components/ProfessionalSummaryForm"
import WorkExperienceForm from "@/components/WorkExperienceForm"
import EducationForm from "@/components/EducationForm"
import SkillsForm from "@/components/SkillsForm"

type Section = {
  id: string
  title: string
  component: React.ComponentType<any>
}

const sections: Section[] = [
  {
    id: "personal-info",
    title: "Personal Information",
    component: PersonalInfoForm,
  },
  {
    id: "professional-summary",
    title: "Professional Summary",
    component: ProfessionalSummaryForm,
  },
  {
    id: "work-experience",
    title: "Work Experience",
    component: WorkExperienceForm,
  },
  {
    id: "education",
    title: "Education",
    component: EducationForm,
  },
  {
    id: "skills",
    title: "Skills & Certifications",
    component: SkillsForm,
  },
]

export default function CreateProfile() {
  const [, navigate] = useLocation()
  const [activeSection, setActiveSection] = useState(0)
  const [formData, setFormData] = useState({
    "personal-info": {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      profilePicture: null,
      completed: false,
    },
    "professional-summary": {
      summary: "",
      title: "",
      industry: "",
      completed: false,
    },
    "work-experience": {
      experiences: [
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
      completed: false,
    },
    "education": {
      educationList: [
        {
          institution: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          current: false,
        },
      ],
      completed: false,
    },
    "skills": {
      skillsList: [],
      certifications: [],
      completed: false,
    },
  } as const)

  const handleUpdateData = (sectionId: keyof typeof formData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [sectionId]: { ...data, completed: true },
    }))
  }

  const completedSections = Object.values(formData).filter((section) => section.completed).length
  const progress = (completedSections / sections.length) * 100

  const CurrentForm = sections[activeSection].component
  const currentSectionId = sections[activeSection].id as keyof typeof formData

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Create Your Profile</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{completedSections} of {sections.length} sections completed</span>
          <Progress value={progress} className="w-full" />
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="grid md:grid-cols-[200px,1fr] gap-8">
        <nav className="space-y-1">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(index)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                index === activeSection
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              } ${formData[section.id as keyof typeof formData].completed ? "font-medium" : ""}`}
            >
              {section.title}
            </button>
          ))}
        </nav>

        <div className="space-y-6">
          <CurrentForm
            data={formData[currentSectionId]}
            updateData={(data: any) => handleUpdateData(currentSectionId, data)}
          />

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={() => setActiveSection((prev) => Math.max(0, prev - 1))}
              disabled={activeSection === 0}
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                if (activeSection < sections.length - 1) {
                  setActiveSection((prev) => prev + 1)
                } else {
                  // Handle profile completion
                  navigate("/dashboard")
                }
              }}
            >
              {activeSection === sections.length - 1 ? "Complete Profile" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}