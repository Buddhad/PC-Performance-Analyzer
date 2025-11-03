"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function PerformanceCard() {
  const performanceScore = 78
  const maxScore = 100

  return (
    <Card className="border-primary/30 bg-card/50 backdrop-blur neon-glow">
      <CardHeader>
        <CardTitle>Overall Performance Score</CardTitle>
        <CardDescription>Based on your current system specs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <span className="text-4xl font-bold neon-text">{performanceScore}</span>
            <span className="text-foreground/60">/ {maxScore}</span>
          </div>
          <Progress value={performanceScore} className="h-3" />
          <div className="flex gap-2 text-sm">
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full">Excellent Balance</span>
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">Gaming Ready</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
