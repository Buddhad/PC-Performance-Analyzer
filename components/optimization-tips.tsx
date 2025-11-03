"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThermometerSun, Zap, Gauge, HardDrive } from "lucide-react"

const tips = [
  {
    category: "Thermals",
    icon: ThermometerSun,
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    tips: [
      {
        title: "Improve Case Airflow",
        description:
          "Add additional intake fans to improve air circulation. Consider mounting fans at intake points to cool hot spots.",
        impact: "-5 to -10°C",
        difficulty: "Medium",
      },
      {
        title: "Clean Dust Filters",
        description:
          "Dust accumulation reduces airflow efficiency. Clean filters monthly for optimal cooling performance.",
        impact: "-3 to -7°C",
        difficulty: "Easy",
      },
      {
        title: "Reapply Thermal Paste",
        description:
          "Over time, thermal paste degrades. Reapplying quality thermal paste can significantly improve heat transfer.",
        impact: "-5 to -15°C",
        difficulty: "Hard",
      },
      {
        title: "Upgrade Cooler",
        description: "Consider a better CPU or GPU cooler like AIO liquid coolers for superior thermal performance.",
        impact: "-10 to -20°C",
        difficulty: "Hard",
      },
    ],
  },
  {
    category: "Performance",
    icon: Gauge,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    tips: [
      {
        title: "Update GPU Drivers",
        description:
          "Latest drivers often include performance optimizations and bug fixes. Check your GPU manufacturer's website weekly.",
        impact: "+5 to +15% FPS",
        difficulty: "Easy",
      },
      {
        title: "Disable Background Apps",
        description: "Close unnecessary applications and disable startup programs to free up resources for gaming.",
        impact: "+3 to +8% FPS",
        difficulty: "Easy",
      },
      {
        title: "Enable High Performance Mode",
        description: "Switch to High Performance power plan in Windows settings to maximize CPU and GPU clock speeds.",
        impact: "+5 to +12% FPS",
        difficulty: "Easy",
      },
      {
        title: "Overclock GPU",
        description:
          "Carefully overclock your GPU using tools like MSI Afterburner to squeeze extra performance. Requires knowledge.",
        impact: "+10 to +25% FPS",
        difficulty: "Hard",
      },
    ],
  },
  {
    category: "Power & Efficiency",
    icon: Zap,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    tips: [
      {
        title: "Monitor Power Draw",
        description: "Use monitoring tools to track system power consumption and identify power-hungry applications.",
        impact: "Better insights",
        difficulty: "Easy",
      },
      {
        title: "Optimize Windows Settings",
        description: "Disable visual effects and animations to reduce CPU load and improve battery life on laptops.",
        impact: "-20 to -50W",
        difficulty: "Easy",
      },
      {
        title: "Upgrade PSU",
        description: "A more efficient power supply (80+ Gold/Platinum) reduces wasted power and heat generation.",
        impact: "-5 to -15%",
        difficulty: "Hard",
      },
    ],
  },
  {
    category: "Storage",
    icon: HardDrive,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    tips: [
      {
        title: "Clean Up Unused Files",
        description: "Remove old games, applications, and files you no longer use to free up storage space.",
        impact: "+50 to +200GB",
        difficulty: "Easy",
      },
      {
        title: "Enable TRIM",
        description: "Ensure TRIM is enabled for SSDs to maintain optimal write performance and longevity.",
        impact: "Better longevity",
        difficulty: "Easy",
      },
      {
        title: "Upgrade to NVMe SSD",
        description:
          "Replace SATA SSDs with faster NVMe drives for significant performance improvements in loading times.",
        impact: "+100% load speed",
        difficulty: "Medium",
      },
    ],
  },
]

export function OptimizationTips() {
  return (
    <div className="space-y-8">
      {tips.map((category) => {
        const Icon = category.icon
        return (
          <div key={category.category}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${category.bgColor}`}>
                <Icon className={`${category.color} w-6 h-6`} />
              </div>
              <h2 className="text-2xl font-bold">{category.category}</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {category.tips.map((tip) => (
                <Card
                  key={tip.title}
                  className="border-primary/20 bg-card/30 hover:border-primary/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-base">{tip.title}</CardTitle>
                        <CardDescription className="mt-1">{tip.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-accent/20 text-accent border-accent/50">
                        {tip.impact}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          tip.difficulty === "Easy"
                            ? "bg-accent/20 text-accent border-accent/50"
                            : tip.difficulty === "Medium"
                              ? "bg-orange-500/20 text-orange-400 border-orange-500/50"
                              : "bg-destructive/20 text-destructive border-destructive/50"
                        }
                      >
                        {tip.difficulty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
