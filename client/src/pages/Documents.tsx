"use client"

import { DocumentManagement } from "@/components/document-management"

export default function Documents() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Document Management</h1>
      <DocumentManagement />
    </div>
  )
}
