"use client"

import * as React from "react"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, History, ChevronLeft, ChevronRight, FileText } from "lucide-react"
import type { Document } from "@/lib/types"
import { formatFileSize, formatDate } from "@/lib/utils"

interface DocumentPreviewProps {
  document: Document
}

export function DocumentPreview({ document }: DocumentPreviewProps) {
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0)
  const [showVersionHistory, setShowVersionHistory] = useState(false)

  const currentVersion = document.versions[currentVersionIndex]

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base">{document.name}</CardTitle>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-grow p-0 relative">
        {showVersionHistory ? (
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium">Version History</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowVersionHistory(false)}>
                <ChevronRight className="h-4 w-4 mr-1" />
                Back to Preview
              </Button>
            </div>

            <div className="space-y-3">
              {document.versions.map((version, index) => (
                <div
                  key={version.id}
                  className={`p-3 rounded-md border ${
                    index === currentVersionIndex ? "bg-primary/5 border-primary/20" : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">
                        Version {document.versions.length - index}
                        {index === 0 && " (Current)"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(version.date)} • {formatFileSize(version.size)}
                      </p>
                    </div>
                    <Button
                      variant={index === currentVersionIndex ? "secondary" : "outline"}
                      size="sm"
                      onClick={() => {
                        setCurrentVersionIndex(index)
                        setShowVersionHistory(false)
                      }}
                    >
                      {index === currentVersionIndex ? "Current" : "View"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="aspect-[3/4] bg-muted flex items-center justify-center">
              {document.url ? (
                <img
                  src={document.url || "/placeholder.svg"}
                  alt={document.name}
                  className="object-contain max-h-full"
                />
              ) : (
                <div className="text-center p-4">
                  <FileText className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Preview not available</p>
                </div>
              )}
            </div>

            {document.versions.length > 1 && (
              <div className="absolute top-2 right-2">
                <Button variant="secondary" size="sm" onClick={() => setShowVersionHistory(true)}>
                  <History className="h-4 w-4 mr-1" />
                  History
                </Button>
              </div>
            )}
          </>
        )}
      </CardContent>

      <CardFooter className="flex-col items-start pt-4 gap-2">
        <div className="flex justify-between w-full text-sm">
          <span>Uploaded: {formatDate(document.uploadDate)}</span>
          <span>{formatFileSize(document.size)}</span>
        </div>

        {document.versions.length > 1 && !showVersionHistory && (
          <div className="flex items-center justify-between w-full mt-1">
            <Button
              variant="ghost"
              size="sm"
              disabled={currentVersionIndex === document.versions.length - 1}
              onClick={() => setCurrentVersionIndex((prev) => Math.min(prev + 1, document.versions.length - 1))}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Older
            </Button>

            <span className="text-xs text-muted-foreground">
              Version {document.versions.length - currentVersionIndex} of {document.versions.length}
            </span>

            <Button
              variant="ghost"
              size="sm"
              disabled={currentVersionIndex === 0}
              onClick={() => setCurrentVersionIndex((prev) => Math.max(prev - 1, 0))}
            >
              Newer
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}

        <div className="flex flex-wrap gap-1 mt-2">
          <span className="text-sm mr-1">Tags:</span>
          {document.tags.length > 0 ? (
            document.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))
          ) : (
            <span className="text-xs text-muted-foreground">No tags</span>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
