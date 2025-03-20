"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DocumentGrid } from "@/components/document-grid"
import { DocumentUpload } from "@/components/document-upload"
import { DocumentPreview } from "@/components/document-preview"
import type { Document } from "@/lib/types"

export function DocumentManagement() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "Resume - Software Engineer.pdf",
      type: "resume",
      uploadDate: new Date("2023-12-10"),
      size: 245000,
      tags: ["tech", "software"],
      versions: [
        { id: "1-1", date: new Date("2023-12-10"), size: 245000 },
        { id: "1-2", date: new Date("2023-11-15"), size: 240000 },
      ],
      url: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "2",
      name: "Cover Letter - Product Manager.docx",
      type: "cover-letter",
      uploadDate: new Date("2023-12-05"),
      size: 125000,
      tags: ["product", "management"],
      versions: [{ id: "2-1", date: new Date("2023-12-05"), size: 125000 }],
      url: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "3",
      name: "AWS Certification.pdf",
      type: "certificate",
      uploadDate: new Date("2023-11-20"),
      size: 500000,
      tags: ["cloud", "aws", "certification"],
      versions: [{ id: "3-1", date: new Date("2023-11-20"), size: 500000 }],
      url: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "4",
      name: "Project Portfolio.pdf",
      type: "portfolio",
      uploadDate: new Date("2023-10-15"),
      size: 1500000,
      tags: ["portfolio", "projects"],
      versions: [
        { id: "4-1", date: new Date("2023-10-15"), size: 1500000 },
        { id: "4-2", date: new Date("2023-09-30"), size: 1450000 },
        { id: "4-3", date: new Date("2023-09-15"), size: 1400000 },
      ],
      url: "/placeholder.svg?height=400&width=300",
    },
  ])

  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  const handleUpload = (newDocuments: Document[]) => {
    setDocuments([...newDocuments, ...documents])
  }

  const handleTagFilter = (tag: string) => {
    setActiveTab(tag)
  }

  const handleDocumentSelect = (document: Document) => {
    setSelectedDocument(document)
  }

  const handleAddTag = (documentId: string, tag: string) => {
    setDocuments(
      documents.map((doc) => {
        if (doc.id === documentId && !doc.tags.includes(tag)) {
          return { ...doc, tags: [...doc.tags, tag] }
        }
        return doc
      }),
    )
  }

  const handleRemoveTag = (documentId: string, tag: string) => {
    setDocuments(
      documents.map((doc) => {
        if (doc.id === documentId) {
          return { ...doc, tags: doc.tags.filter((t) => t !== tag) }
        }
        return doc
      }),
    )
  }

  const filteredDocuments =
    activeTab === "all" ? documents : documents.filter((doc) => doc.tags.includes(activeTab) || doc.type === activeTab)

  // Get unique tags from all documents
  const allTags = Array.from(new Set(documents.flatMap((doc) => [...doc.tags, doc.type])))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="mb-4 flex flex-wrap">
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="resume">Resumes</TabsTrigger>
            <TabsTrigger value="cover-letter">Cover Letters</TabsTrigger>
            <TabsTrigger value="certificate">Certificates</TabsTrigger>
            {allTags
              .filter((tag) => !["resume", "cover-letter", "certificate", "portfolio"].includes(tag))
              .map((tag) => (
                <TabsTrigger key={tag} value={tag}>
                  {tag}
                </TabsTrigger>
              ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <DocumentUpload onUpload={handleUpload} />
            <DocumentGrid
              documents={filteredDocuments}
              onSelect={handleDocumentSelect}
              onAddTag={handleAddTag}
              onRemoveTag={handleRemoveTag}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="lg:col-span-1">
        {selectedDocument ? (
          <DocumentPreview document={selectedDocument} />
        ) : (
          <div className="border rounded-lg p-8 text-center h-full flex items-center justify-center bg-muted/50">
            <p className="text-muted-foreground">Select a document to preview</p>
          </div>
        )}
      </div>
    </div>
  )
}

