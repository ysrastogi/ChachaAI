"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, FileImage, FileBadge, MoreVertical, TagIcon, X, Plus } from "lucide-react"
import type { Document } from "@/lib/types"
import { formatFileSize, formatDate } from "@/lib/utils"

interface DocumentGridProps {
  documents: Document[]
  onSelect: (document: Document) => void
  onAddTag: (documentId: string, tag: string) => void
  onRemoveTag: (documentId: string, tag: string) => void
}

export function DocumentGrid({ documents, onSelect, onAddTag, onRemoveTag }: DocumentGridProps) {
  const [newTag, setNewTag] = useState<string>("")
  const [activeDocumentId, setActiveDocumentId] = useState<string | null>(null)

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case "resume":
      case "cover-letter":
        return <FileText className="h-6 w-6" />
      case "certificate":
        return <FileBadge className="h-6 w-6" />
      case "portfolio":
        return <FileImage className="h-6 w-6" />
      default:
        return <FileText className="h-6 w-6" />
    }
  }

  const handleAddTag = (documentId: string) => {
    if (newTag.trim()) {
      onAddTag(documentId, newTag.trim().toLowerCase())
      setNewTag("")
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
      {documents.length === 0 ? (
        <div className="col-span-full text-center p-8 border rounded-lg">
          <p className="text-muted-foreground">No documents found</p>
        </div>
      ) : (
        documents.map((document) => (
          <Card key={document.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  {getDocumentIcon(document.type)}
                  <CardTitle className="text-base truncate" title={document.name}>
                    {document.name}
                  </CardTitle>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onSelect(document)}>Preview</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveDocumentId(document.id)}>Manage Tags</DropdownMenuItem>
                    <DropdownMenuItem>Download</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="p-0 cursor-pointer" onClick={() => onSelect(document)}>
              <div className="relative aspect-[4/3] bg-muted">
                <img
                  src={document.url || "/placeholder.svg"}
                  alt={document.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start pt-4 pb-4 gap-2">
              <div className="flex justify-between w-full text-xs text-muted-foreground">
                <span>{formatDate(document.uploadDate)}</span>
                <span>{formatFileSize(document.size)}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {document.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                    {activeDocumentId === document.id && (
                      <X
                        className="ml-1 h-3 w-3 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          onRemoveTag(document.id, tag)
                        }}
                      />
                    )}
                  </Badge>
                ))}
                {activeDocumentId === document.id && (
                  <div className="flex items-center gap-1 mt-2 w-full">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add tag..."
                      className="h-7 text-xs"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleAddTag(document.id)
                        }
                      }}
                    />
                    <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => handleAddTag(document.id)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                )}
                {activeDocumentId !== document.id && document.tags.length < 3 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-5 px-1"
                    onClick={() => setActiveDocumentId(document.id)}
                  >
                    <TagIcon className="h-3 w-3 mr-1" />
                    <span className="text-xs">Add Tag</span>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  )
}

