"use client"

import * as React from "react"
import { useState } from "react"
import { User, Mail, Phone, MapPin, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

//The following type definitions are assumed to exist based on the edited code and usage within the component.  They would need to be defined in a separate .ts file if not already present
interface PersonalInfoData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  location?: string;
  avatar?: string | File;
}

interface PersonalInfoFormProps {
  data: PersonalInfoData;
  updateData: (data: PersonalInfoData) => void;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, avatar: e.target.files?.[0] })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    updateData(formData)
    // Add your submission logic here
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="avatar">Avatar</Label>
            <Input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleAvatarChange}
            />
          </div>
        </div>
        <Button type="submit">Save</Button>
      </form>
    </Card>
  )
}