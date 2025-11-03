"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts"
import { AlertCircle, CheckCircle2, Zap, Thermometer } from "lucide-react"

export function PCBuildDetails({ buildData }) {
  if (!buildData) return null

  const estimatedPowerDraw = 550 // Base estimate
  const thermalLoad = 75 // Percentage
  const compatibilityScore = 95 // Out of 100
  const performanceRating = 88 // Out of 100

  const powerDistribution = [
    { name: "CPU", value: 150, color: "#64c8ff" },
    { name: "GPU", value: 320, color: "#ff6b35" },
    { name: "RAM", value: 20, color: "#00ff88" },
    { name: "Other", value: 60, color: "#7c3aed" },
  ]

  const performanceMetrics = [
    { category: "Gaming", score: 92 },
    { category: "Productivity", score: 95 },
    { category: "Streaming", score: 88 },
    { category: "3D Rendering", score: 90 },
  ]

  return (
    <div className="space-y-6">
      {/* Build Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-accent/30 bg-card/30">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <Zap className="w-6 h-6 text-accent mx-auto" />
              <p className="text-sm text-foreground/70">Est. Power Draw</p>
              <p className="text-2xl font-bold neon-text">{estimatedPowerDraw}W</p>
              <p className="text-xs text-foreground/60">~{estimatedPowerDraw + 100}W recommended PSU</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-card/30">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <Thermometer className="w-6 h-6 text-primary mx-auto" />
              <p className="text-sm text-foreground/70">Thermal Load</p>
              <p className="text-2xl font-bold text-primary">{thermalLoad}%</p>
              <p className="text-xs text-foreground/60">Moderate cooling needed</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-500/30 bg-card/30">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
              <p className="text-sm text-foreground/70">Compatibility</p>
              <p className="text-2xl font-bold text-green-500">{compatibilityScore}%</p>
              <p className="text-xs text-foreground/60">All components compatible</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-accent/30 bg-card/30">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <AlertCircle className="w-6 h-6 text-accent mx-auto" />
              <p className="text-sm text-foreground/70">Performance Rating</p>
              <p className="text-2xl font-bold neon-text">{performanceRating}/100</p>
              <p className="text-xs text-foreground/60">Excellent tier</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Build Configuration Display */}
      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>Your Build Configuration</CardTitle>
          <CardDescription>Complete system specifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-xs font-semibold text-primary/70 uppercase mb-1">CPU</p>
              <p className="text-lg font-bold">{buildData.cpu}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-xs font-semibold text-accent/70 uppercase mb-1">GPU</p>
              <p className="text-lg font-bold">{buildData.gpu}</p>
            </div>
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-xs font-semibold text-green-500/70 uppercase mb-1">RAM</p>
              <p className="text-lg font-bold">{buildData.ram}</p>
            </div>
            <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <p className="text-xs font-semibold text-purple-500/70 uppercase mb-1">Motherboard</p>
              <p className="text-lg font-bold">{buildData.mobo}</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <p className="text-xs font-semibold text-blue-500/70 uppercase mb-1">CPU Cooler</p>
              <p className="text-lg font-bold">{buildData.cpuCooler}</p>
            </div>
            <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <p className="text-xs font-semibold text-orange-500/70 uppercase mb-1">Power Supply</p>
              <p className="text-lg font-bold">{buildData.psu}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Power Distribution */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-primary/20 bg-card/30">
          <CardHeader>
            <CardTitle>Power Distribution</CardTitle>
            <CardDescription>Estimated power consumption by component</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={powerDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}W`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {powerDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0a0e27",
                    border: "1px solid #64c8ff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="border-accent/20 bg-card/30">
          <CardHeader>
            <CardTitle>Use Case Performance</CardTitle>
            <CardDescription>Expected performance across different workloads</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceMetrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f3a93" />
                <XAxis dataKey="category" stroke="#64c8ff" angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#64c8ff" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0a0e27",
                    border: "1px solid #64c8ff",
                  }}
                />
                <Bar dataKey="score" fill="#64c8ff" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="border-accent/20 bg-card/30">
        <CardHeader>
          <CardTitle>Build Recommendations</CardTitle>
          <CardDescription>Suggestions to optimize your build</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-500">Excellent PSU Headroom</p>
              <p className="text-sm text-foreground/70">Your PSU has plenty of capacity for stable operation</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-500">Consider Thermal Management</p>
              <p className="text-sm text-foreground/70">Ensure adequate case airflow for optimal temperatures</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-accent/10 border border-accent/20 flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-accent">Great Gaming Build</p>
              <p className="text-sm text-foreground/70">
                This configuration will deliver excellent gaming performance at high settings
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
