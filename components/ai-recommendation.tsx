"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function AIRecommendation() {
  return (
    <Card className="border-accent/50 bg-gradient-to-r from-accent/10 to-primary/10 neon-glow">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" />
          <CardTitle>AI Performance Summary</CardTitle>
        </div>
        <CardDescription>Intelligent analysis of your system</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg leading-relaxed">
          Your PC can run <span className="font-semibold text-accent">Cyberpunk 2077</span> at{" "}
          <span className="font-bold neon-text">78 FPS</span> on <span className="font-semibold">High Settings</span> at{" "}
          <span className="font-semibold">1080p</span>. Excellent balance between performance and efficiency.
        </p>
      </CardContent>
    </Card>
  )
}
