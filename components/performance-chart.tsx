"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const temperatureData = [
  { time: "00:00", temp: 45, power: 120 },
  { time: "04:00", temp: 48, power: 130 },
  { time: "08:00", temp: 62, power: 280 },
  { time: "12:00", temp: 68, power: 320 },
  { time: "16:00", temp: 72, power: 350 },
  { time: "20:00", temp: 65, power: 290 },
  { time: "24:00", temp: 52, power: 150 },
]

export function PerformanceChart() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>Temperature & Power Usage</CardTitle>
          <CardDescription>Last 24 hours</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f3a93" />
              <XAxis dataKey="time" stroke="#64c8ff" />
              <YAxis stroke="#64c8ff" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0e27",
                  border: "1px solid #64c8ff",
                }}
              />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#ff6b35"
                strokeWidth={2}
                dot={false}
                name="Temperature (°C)"
              />
              <Line type="monotone" dataKey="power" stroke="#64c8ff" strokeWidth={2} dot={false} name="Power (W)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>CPU & GPU Usage</CardTitle>
          <CardDescription>Real-time performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={temperatureData}>
              <defs>
                <linearGradient id="colorCPU" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#64c8ff" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#64c8ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f3a93" />
              <XAxis dataKey="time" stroke="#64c8ff" />
              <YAxis stroke="#64c8ff" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0e27",
                  border: "1px solid #64c8ff",
                }}
              />
              <Area type="monotone" dataKey="power" stroke="#64c8ff" fillOpacity={1} fill="url(#colorCPU)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
