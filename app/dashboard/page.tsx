"use client"

import { Navbar } from "@/components/navbar"
import { AdvancedSystemMonitor } from "@/components/advanced-system-monitor"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Advanced</span> Dashboard
          </h1>
          <p className="text-foreground/70 text-lg">Real-time system monitoring and performance analytics</p>
        </div>

        <AdvancedSystemMonitor />

        {/* Quick Stats */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-primary/20 bg-card/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold neon-text">24d 16h</p>
              <p className="text-xs text-foreground/60">Last restart: 24 days ago</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average FPS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-accent">87 FPS</p>
              <p className="text-xs text-foreground/60">In demanding games</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg. Temp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">62°C</p>
              <p className="text-xs text-foreground/60">CPU and GPU combined</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Power Draw</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-400">285W</p>
              <p className="text-xs text-foreground/60">Peak usage</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
