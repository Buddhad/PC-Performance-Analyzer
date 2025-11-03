"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertCircle } from "lucide-react"

const healthChecks = [
  {
    name: "CPU Temperature",
    status: "good",
    value: "62°C",
    threshold: "80°C",
    icon: CheckCircle,
    color: "text-accent",
  },
  {
    name: "GPU Temperature",
    status: "good",
    value: "68°C",
    threshold: "85°C",
    icon: CheckCircle,
    color: "text-accent",
  },
  {
    name: "Storage Usage",
    status: "warning",
    value: "78%",
    threshold: "90%",
    icon: AlertCircle,
    color: "text-orange-400",
  },
  {
    name: "RAM Usage",
    status: "good",
    value: "52%",
    threshold: "90%",
    icon: CheckCircle,
    color: "text-accent",
  },
]

export function SystemHealthCheck() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Health Check</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {healthChecks.map((check) => {
          const Icon = check.icon
          return (
            <Card key={check.name} className="border-primary/20 bg-card/30">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm font-medium text-foreground/70">{check.name}</span>
                  <Icon className={`${check.color} w-5 h-5`} />
                </div>
                <div className="mb-3">
                  <p className="text-2xl font-bold">{check.value}</p>
                  <p className="text-xs text-foreground/50">Max: {check.threshold}</p>
                </div>
                <Progress value={Number.parseInt(check.value)} className="h-2" />
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
