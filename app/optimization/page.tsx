"use client"

import { Navbar } from "@/components/navbar"
import { OptimizationTips } from "@/components/optimization-tips"
import { SystemHealthCheck } from "@/components/system-health-check"

export default function OptimizationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">System</span> Optimization
          </h1>
          <p className="text-foreground/70 text-lg">
            Get personalized tips to improve thermals, FPS, and overall efficiency
          </p>
        </div>

        <SystemHealthCheck />
        <OptimizationTips />
      </main>
    </div>
  )
}
