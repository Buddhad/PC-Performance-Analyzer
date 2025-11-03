"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

const upgradePriorities = [
  {
    component: "GPU",
    priority: "High",
    currentGen: "RTX 3060",
    bottleneck: "35%",
    reason: "Limiting FPS in modern games at 1440p and 4K",
    estimatedGain: "+45% gaming performance",
    cost: "$500-800",
  },
  {
    component: "Storage",
    priority: "Medium",
    currentGen: "512GB SSD",
    bottleneck: "None",
    reason: "Limited storage space, consider adding NVMe drive",
    estimatedGain: "More game library space",
    cost: "$80-150",
  },
  {
    component: "RAM",
    priority: "Low",
    currentGen: "16GB DDR4",
    bottleneck: "None",
    reason: "Sufficient for current gaming workloads",
    estimatedGain: "Minimal benefit",
    cost: "$100-200",
  },
  {
    component: "CPU",
    priority: "Medium",
    currentGen: "Ryzen 5 5600X",
    bottleneck: "15%",
    reason: "Some bottlenecking with high-end GPU",
    estimatedGain: "+10-15% performance",
    cost: "$200-350",
  },
]

export function UpgradePriority() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Upgrade Priority Analysis</h2>

      <div className="space-y-3">
        {upgradePriorities.map((item) => {
          const priorityColor =
            item.priority === "High"
              ? "bg-destructive/20 text-destructive border-destructive/50"
              : item.priority === "Medium"
                ? "bg-orange-500/20 text-orange-400 border-orange-500/50"
                : "bg-accent/20 text-accent border-accent/50"

          return (
            <Card key={item.component} className="border-primary/20 bg-card/30">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">{item.component}</h3>
                        <Badge variant="outline" className={priorityColor}>
                          {item.priority} Priority
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground/70">Current: {item.currentGen}</p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-xs font-medium text-foreground/50 mb-1">Bottleneck</p>
                      <p className="text-lg font-semibold">{item.bottleneck}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground/50 mb-1">Reason</p>
                      <p className="text-sm">{item.reason}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground/50 mb-1">Est. Cost</p>
                      <p className="text-lg font-semibold text-accent">{item.cost}</p>
                    </div>
                  </div>

                  <div className="pt-2 space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-accent font-medium">{item.estimatedGain}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
