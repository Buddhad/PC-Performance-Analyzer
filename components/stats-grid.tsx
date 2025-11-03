"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Cpu as Gpu, HardDrive, Thermometer, Zap, MemoryStick } from "lucide-react"

const stats = [
  {
    title: "CPU",
    value: "Intel i9-13900K",
    icon: Cpu,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "GPU",
    value: "RTX 4080",
    icon: Gpu,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    title: "RAM",
    value: "32GB DDR5",
    icon: MemoryStick,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Storage",
    value: "2TB NVMe SSD",
    icon: HardDrive,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "Temperature",
    value: "62°C",
    icon: Thermometer,
    color: "text-red-400",
    bgColor: "bg-red-500/10",
  },
  {
    title: "Power Usage",
    value: "285W",
    icon: Zap,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="border-primary/20 bg-card/30 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`${stat.color} w-5 h-5`} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
