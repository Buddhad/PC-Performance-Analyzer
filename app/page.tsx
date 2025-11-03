"use client"

import { Navbar } from "@/components/navbar"
import { PerformanceCard } from "@/components/performance-card"
import { StatsGrid } from "@/components/stats-grid"
import { PerformanceChart } from "@/components/performance-chart"
import { AIRecommendation } from "@/components/ai-recommendation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">PC Performance</span> Analysis
          </h1>
          <p className="text-foreground/70 text-lg">
            Monitor your system specs, predict gaming performance, and optimize your PC
          </p>
        </div>

        {/* Performance Overview */}
        <div className="grid gap-6 mb-8">
          <PerformanceCard />
        </div>

        {/* Stats Grid */}
        <StatsGrid />

        {/* Charts */}
        <div className="grid gap-6 mb-8">
          <PerformanceChart />
        </div>

        {/* AI Recommendation */}
        <AIRecommendation />
      </main>
    </div>
  )
}
