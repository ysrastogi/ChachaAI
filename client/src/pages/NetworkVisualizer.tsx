"use client"

import { NetworkVisualizer } from "@/components/network-visualizer"

export default function NetworkVisualizerPage() {
  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Network Connections</h1>
        <p className="text-muted-foreground">Visualize and manage your professional network</p>
      </div>
      <NetworkVisualizer />
    </div>
  )
}
