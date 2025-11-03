"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { useEffect, useState } from "react"

// Simulated real-time data
const generateRealtimeData = () => {
  const baseTime = new Date().getTime()
  return Array.from({ length: 12 }, (_, i) => ({
    time: new Date(baseTime - (11 - i) * 60000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    cpuTemp: Math.random() * 25 + 50,
    gpuTemp: Math.random() * 20 + 55,
    cpuUsage: Math.random() * 40 + 30,
    gpuUsage: Math.random() * 50 + 40,
  }))
}

export function AdvancedSystemMonitor() {
  const [data, setData] = useState(generateRealtimeData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRealtimeData())
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const radarData = [
    { category: "CPU Performance", value: 85 },
    { category: "GPU Performance", value: 78 },
    { category: "Memory Health", value: 92 },
    { category: "Storage Speed", value: 88 },
    { category: "Thermal Mgmt", value: 80 },
    { category: "Power Efficiency", value: 75 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">System Performance Monitoring</h2>

      {/* Real-time Temperature Chart */}
      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>Temperature Trends (24-Hour View)</CardTitle>
          <CardDescription>Real-time CPU and GPU temperature monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorCpuTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#64c8ff" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#64c8ff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorGpuTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff6b35" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ff6b35" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f3a93" />
              <XAxis dataKey="time" stroke="#64c8ff" />
              <YAxis stroke="#64c8ff" label={{ value: "°C", angle: -90, position: "insideLeft" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0e27",
                  border: "1px solid #64c8ff",
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="cpuTemp"
                stroke="#64c8ff"
                fillOpacity={1}
                fill="url(#colorCpuTemp)"
                name="CPU Temp (°C)"
              />
              <Area
                type="monotone"
                dataKey="gpuTemp"
                stroke="#ff6b35"
                fillOpacity={1}
                fill="url(#colorGpuTemp)"
                name="GPU Temp (°C)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* CPU and GPU Usage Chart */}
      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>Component Usage</CardTitle>
          <CardDescription>CPU and GPU utilization percentage</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f3a93" />
              <XAxis dataKey="time" stroke="#64c8ff" />
              <YAxis stroke="#64c8ff" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0e27",
                  border: "1px solid #64c8ff",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="cpuUsage"
                stroke="#64c8ff"
                strokeWidth={2}
                dot={false}
                name="CPU Usage %"
              />
              <Line
                type="monotone"
                dataKey="gpuUsage"
                stroke="#ff6b35"
                strokeWidth={2}
                dot={false}
                name="GPU Usage %"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* System Health Radar */}
      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>System Health Score</CardTitle>
          <CardDescription>Overall system performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#1f3a93" />
              <PolarAngleAxis dataKey="category" stroke="#64c8ff" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#64c8ff" />
              <Radar name="Health Score" dataKey="value" stroke="#64c8ff" fill="#64c8ff" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
