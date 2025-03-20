"use client"

import type React from "react"

import { useState } from "react"
import { User, Mail, Phone, MapPin, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PersonalInfoData {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  profilePicture: any
  completed?: boolean
}

interface PersonalInfoFormProps {
  data: PersonalInfoData
  updateData: (data: PersonalInfoData) => void
}

// Sample data for autofill suggestions
const suggestions = {
  firstName: ["John", "Jane", "Michael", "Sarah"],
  lastName: ["Smith", "Johnson", "Williams", "Brown"],
  email: ["john.smith@example.com", "jane.johnson@example.com"],
  phone: ["(555) 123-4567", "(555) 987-6543"],
  location: ["New York, NY", "San Francisco, CA", "Chicago, IL"],
}

export default function PersonalInfoForm({ data, updateData }: PersonalInfoFormProps) {
  const [formData, setFormData] = useState<PersonalInfoData>(data)
  const [showSuggestions, setShowSuggestions] = useState<Record<string, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    location: false,
  })

  const handleChange = (field: keyof PersonalInfoData, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = () => {
    updateData(formData)
  }

  const handleAutofill = (field: keyof PersonalInfoData, value: string) => {
    setFormData({ ...formData, [field]: value })
    setShowSuggestions({ ...showSuggestions, [field]: false })
  }

  const handleFocus = (field: keyof PersonalInfoData) => {
    setShowSuggestions({ ...showSuggestions, [field]: true })
  }

  const handleBlur = (field: keyof PersonalInfoData) => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions({ ...showSuggestions, [field]: false })
    }, 200)
  }

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFormData({ ...formData, profilePicture: file })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center mb-6">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={formData.profilePicture ? URL.createObjectURL(formData.profilePicture) : ""} />
          <AvatarFallback className="text-2xl">
            {formData.firstName && formData.lastName ? `${formData.firstName[0]}${formData.lastName[0]}` : "?"}
          </AvatarFallback>
        </Avatar>
        <div>
          <Label htmlFor="profile-picture" className="cursor-pointer">
            <div className="flex items-center gap-2 text-sm text-primary">
              <Upload className="h-4 w-4" />
              Upload Profile Picture
            </div>
            <Input
              id="profile-picture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePictureChange}
            />
          </Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 relative">
          <Label htmlFor="firstName">First Name</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <User className="h-4 w-4" />
            </div>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              onFocus={() => handleFocus("firstName")}
              onBlur={() => handleBlur("firstName")}
              className="pl-10"
              placeholder="Enter your first name"
            />
          </div>
          {showSuggestions.firstName && suggestions.firstName.length > 0 && (
            <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
              <ul>
                {suggestions.firstName.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                    onClick={() => handleAutofill("firstName", suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>

        <div className="space-y-2 relative">
          <Label htmlFor="lastName">Last Name</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <User className="h-4 w-4" />
            </div>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              onFocus={() => handleFocus("lastName")}
              onBlur={() => handleBlur("lastName")}
              className="pl-10"
              placeholder="Enter your last name"
            />
          </div>
          {showSuggestions.lastName && suggestions.lastName.length > 0 && (
            <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
              <ul>
                {suggestions.lastName.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                    onClick={() => handleAutofill("lastName", suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>

        <div className="space-y-2 relative">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <Mail className="h-4 w-4" />
            </div>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              className="pl-10"
              placeholder="Enter your email address"
            />
          </div>
          {showSuggestions.email && suggestions.email.length > 0 && (
            <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
              <ul>
                {suggestions.email.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                    onClick={() => handleAutofill("email", suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>

        <div className="space-y-2 relative">
          <Label htmlFor="phone">Phone</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <Phone className="h-4 w-4" />
            </div>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onFocus={() => handleFocus("phone")}
              onBlur={() => handleBlur("phone")}
              className="pl-10"
              placeholder="Enter your phone number"
            />
          </div>
          {showSuggestions.phone && suggestions.phone.length > 0 && (
            <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
              <ul>
                {suggestions.phone.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                    onClick={() => handleAutofill("phone", suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>

        <div className="space-y-2 relative md:col-span-2">
          <Label htmlFor="location">Location</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <MapPin className="h-4 w-4" />
            </div>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              onFocus={() => handleFocus("location")}
              onBlur={() => handleBlur("location")}
              className="pl-10"
              placeholder="Enter your location"
            />
          </div>
          {showSuggestions.location && suggestions.location.length > 0 && (
            <Card className="absolute z-10 w-full mt-1 p-1 shadow-lg">
              <ul>
                {suggestions.location.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 hover:bg-muted cursor-pointer rounded-sm"
                    onClick={() => handleAutofill("location", suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="secondary"
              className="mt-2"
              onClick={() => {
                setFormData({
                  firstName: "John",
                  lastName: "Smith",
                  email: "john.smith@example.com",
                  phone: "(555) 123-4567",
                  location: "New York, NY",
                  profilePicture: null,
                })
              }}
            >
              Autofill with Sample Data
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Fill the form with sample data</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

