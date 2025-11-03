"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

const benchmarkData = {
  cpu: {
    "intel-i9-13900k": {
      name: "Intel i9-13900K",
      multicore: 2550,
      singlecore: 245,
      power: 125,
      price: 589,
      tdp: "125W",
    },
    "intel-i7-13700k": {
      name: "Intel i7-13700K",
      multicore: 2100,
      singlecore: 220,
      power: 125,
      price: 419,
      tdp: "125W",
    },
    "amd-ryzen-9": {
      name: "AMD Ryzen 9 7950X",
      multicore: 2400,
      singlecore: 240,
      power: 105,
      price: 549,
      tdp: "105W",
    },
    "amd-ryzen-7": {
      name: "AMD Ryzen 7 7700X",
      multicore: 1580,
      singlecore: 200,
      power: 105,
      price: 349,
      tdp: "105W",
    },
  },
  gpu: {
    "rtx-4080": {
      name: "RTX 4080",
      score: 2850,
      vram: 16,
      power: 320,
      price: 1199,
      tdp: "320W",
    },
    "rtx-4070": {
      name: "RTX 4070",
      score: 2200,
      vram: 12,
      power: 200,
      price: 799,
      tdp: "200W",
    },
    "rtx-4060": {
      name: "RTX 4060",
      score: 1400,
      vram: 8,
      power: 115,
      price: 299,
      tdp: "115W",
    },
    "amd-7900xtx": {
      name: "AMD Radeon 7900 XTX",
      score: 2900,
      vram: 24,
      power: 420,
      price: 999,
      tdp: "420W",
    },
  },
  ram: {
    "ddr5-32gb": {
      name: "DDR5 32GB 6000MHz",
      score: 1850,
      latency: 38,
      power: 15,
      price: 129,
      bandwidth: "192GB/s",
    },
    "ddr5-64gb": {
      name: "DDR5 64GB 6000MHz",
      score: 1850,
      latency: 38,
      power: 30,
      price: 259,
      bandwidth: "192GB/s",
    },
    "ddr4-32gb": {
      name: "DDR4 32GB 3600MHz",
      score: 1200,
      latency: 45,
      power: 12,
      price: 89,
      bandwidth: "115GB/s",
    },
    "ddr4-16gb": {
      name: "DDR4 16GB 3600MHz",
      score: 1200,
      latency: 45,
      power: 6,
      price: 49,
      bandwidth: "115GB/s",
    },
  },
}

export function BenchmarkComparison({ type, yourComponent, compareComponent }) {
  const componentData = benchmarkData[type]

  if (!componentData || !yourComponent || !compareComponent) {
    return (
      <div className="text-center py-12 rounded-lg border-2 border-dashed border-primary/20 bg-primary/5">
        <p className="text-foreground/60 text-lg">Please select components to compare</p>
      </div>
    )
  }

  const your = componentData[yourComponent]
  const compare = componentData[compareComponent]

  if (!your || !compare) {
    return (
      <div className="text-center py-12 rounded-lg border-2 border-dashed border-primary/20 bg-primary/5">
        <p className="text-foreground/60 text-lg">Component data not found. Please try different selections.</p>
      </div>
    )
  }

  const yourScore = your.multicore || your.score || 0
  const compareScore = compare.multicore || compare.score || 0

  const performanceGain = compareScore > 0 ? (((yourScore - compareScore) / compareScore) * 100).toFixed(1) : 0

  const pricePerformance = your.price > 0 ? (yourScore / your.price).toFixed(2) : 0
  const comparePerformance = compare.price > 0 ? (compareScore / compare.price).toFixed(2) : 0

  const chartData = [
    {
      name: "Your Component",
      value: yourScore,
      price: your.price,
    },
    {
      name: "Compare With",
      value: compareScore,
      price: compare.price,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-primary/20 bg-card/30">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-foreground/70">Performance Difference</p>
              <p className={`text-3xl font-bold ${Number(performanceGain) >= 0 ? "text-accent" : "text-destructive"}`}>
                {performanceGain > 0 ? "+" : ""}
                {performanceGain}%
              </p>
              <p className="text-xs text-foreground/60">vs comparison</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-card/30">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-foreground/70">Your Price/Perf</p>
              <p className="text-2xl font-bold neon-text">{pricePerformance}</p>
              <p className="text-xs text-foreground/60">per dollar</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-card/30">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-foreground/70">Compare Price/Perf</p>
              <p className="text-2xl font-bold text-primary">{comparePerformance}</p>
              <p className="text-xs text-foreground/60">per dollar</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>Performance Comparison</CardTitle>
          <CardDescription>Direct benchmark scores</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f3a93" />
              <XAxis dataKey="name" stroke="#64c8ff" />
              <YAxis stroke="#64c8ff" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0e27",
                  border: "1px solid #64c8ff",
                }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                <Cell fill="#64c8ff" />
                <Cell fill="#ff6b35" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-accent/30 bg-card/30">
          <CardHeader>
            <CardTitle className="text-lg">{your.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Performance Score</span>
                <span className="text-sm font-bold neon-text">{yourScore}</span>
              </div>
              <Progress value={Math.min((yourScore / 3000) * 100, 100)} />
            </div>
            <div className="pt-2 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground/70">Price:</span>
                <span className="font-semibold">${your.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Power Draw:</span>
                <span className="font-semibold">{your.power || "N/A"}W</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">TDP:</span>
                <span className="font-semibold">{your.tdp || "N/A"}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-card/30">
          <CardHeader>
            <CardTitle className="text-lg">{compare.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Performance Score</span>
                <span className="text-sm font-bold text-primary">{compareScore}</span>
              </div>
              <Progress value={Math.min((compareScore / 3000) * 100, 100)} />
            </div>
            <div className="pt-2 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground/70">Price:</span>
                <span className="font-semibold">${compare.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Power Draw:</span>
                <span className="font-semibold">{compare.power || "N/A"}W</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">TDP:</span>
                <span className="font-semibold">{compare.tdp || "N/A"}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
