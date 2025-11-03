"use client"

import { Navbar } from "@/components/navbar"
import { GameSelector } from "@/components/game-selector"
import { ResolutionSelector } from "@/components/resolution-selector"
import { FPSResults } from "@/components/fps-results"
import { useState } from "react"

export default function GamingFPSPage() {
  const [selectedGame, setSelectedGame] = useState("cyberpunk2077")
  const [selectedResolution, setSelectedResolution] = useState("1080p")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Gaming FPS</span> Predictor
          </h1>
          <p className="text-foreground/70 text-lg">
            Estimate your gaming performance across different games and settings
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Sidebar - Game & Resolution Selection */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              <GameSelector selectedGame={selectedGame} onSelectGame={setSelectedGame} />
              <ResolutionSelector selectedResolution={selectedResolution} onSelectResolution={setSelectedResolution} />
            </div>
          </div>

          {/* Main Content - Results */}
          <div className="lg:col-span-2">
            <FPSResults game={selectedGame} resolution={selectedResolution} />
          </div>
        </div>
      </main>
    </div>
  )
}
