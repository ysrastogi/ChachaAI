"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X } from "lucide-react"
import type { Document } from "@/lib/types"

interface DocumentUploadProps {
  onUpload: (documents: Document[]) => void
}

export function DocumentUpload({ onUpload }: DocumentUploadProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles((prev) => [...prev, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
  })

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleUpload = () => {
    // In a real app, you would upload files to a server here
    const newDocuments: Document[] = uploadedFiles.map((file, index) => ({
      id: `new-${Date.now()}-${index}`,
      name: file.name,
      type: getDocumentType(file.name),
      uploadDate: new Date(),
      size: file.size,
      tags: [getDocumentType(file.name)],
      versions: [{ id: `new-${Date.now()}-${index}-1`, date: new Date(), size: file.size }],
      url: "/placeholder.svg?height=400&width=300",
    }))

    onUpload(newDocuments)
    setUploadedFiles([])
    setIsExpanded(false)
  }

  const getDocumentType = (filename: string): string => {
    const lowerFilename = filename.toLowerCase()
    if (lowerFilename.includes("resume")) return "resume"
    if (lowerFilename.includes("cv")) return "resume"
    if (lowerFilename.includes("cover")) return "cover-letter"
    if (lowerFilename.includes("cert")) return "certificate"
    if (lowerFilename.includes("portfolio")) return "portfolio"
    return "document"
  }

  if (!isExpanded) {
    return (
      <Button onClick={() => setIsExpanded(true)} className="w-full py-8 flex items-center justify-center gap-2">
        <Upload className="h-5 w-5" />
        Upload Documents
      </Button>
    )
  }

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/20"
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm font-medium mb-1">{isDragActive ? "Drop files here" : "Drag & drop files here"}</p>
          <p className="text-xs text-muted-foreground mb-2">or click to browse (PDF, DOC, DOCX, JPG, PNG)</p>
          <Button size="sm" variant="secondary" className="mt-2">
            Browse Files
          </Button>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Files to upload ({uploadedFiles.length})</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                      <span className="text-xs">{file.name.split(".").pop()}</span>
                    </div>
                    <div className="truncate">
                      <p className="text-sm truncate">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(0)} KB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleRemoveFile(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setUploadedFiles([])
                  setIsExpanded(false)
                }}
              >
                Cancel
              </Button>
              <Button size="sm" onClick={handleUpload} disabled={uploadedFiles.length === 0}>
                Upload {uploadedFiles.length} {uploadedFiles.length === 1 ? "file" : "files"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

