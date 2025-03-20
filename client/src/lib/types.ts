export interface DocumentVersion {
  id: string
  date: Date
  size: number
}

export interface Document {
  id: string
  name: string
  type: string
  uploadDate: Date
  size: number
  tags: string[]
  versions: DocumentVersion[]
  url?: string
}
