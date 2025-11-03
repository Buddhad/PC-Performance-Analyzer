"use client"

import { Navbar } from "@/components/navbar"
import { UpgradePriority } from "@/components/upgrade-priority"
import { UpgradeRecommendations } from "@/components/upgrade-recommendations"
import { PriceToPerformance } from "@/components/price-to-performance"

export default function UpgradePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Parts Upgrade</span> Guide
          </h1>
          <p className="text-foreground/70 text-lg">
            Get personalized upgrade recommendations based on your current setup
          </p>
        </div>

        <UpgradePriority />
        <UpgradeRecommendations />
        <PriceToPerformance />
      </main>
    </div>
  )
}
