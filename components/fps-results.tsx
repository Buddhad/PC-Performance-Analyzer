"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

const fpsData = {
  "1080p": {
    cyberpunk2077: [
      { setting: "Low", fps: 120, power: 200 },
      { setting: "Medium", fps: 95, power: 250 },
      { setting: "High", fps: 78, power: 300 },
      { setting: "Ultra", fps: 45, power: 350 },
    ],
    gtav: [
      { setting: "Low", fps: 180, power: 180 },
      { setting: "Medium", fps: 155, power: 220 },
      { setting: "High", fps: 128, power: 270 },
      { setting: "Ultra", fps: 95, power: 320 },
    ],
    valorant: [
      { setting: "Low", fps: 300, power: 120 },
      { setting: "Medium", fps: 280, power: 150 },
      { setting: "High", fps: 260, power: 180 },
      { setting: "Ultra", fps: 240, power: 220 },
    ],
    fortnite: [
      { setting: "Low", fps: 165, power: 190 },
      { setting: "Medium", fps: 140, power: 240 },
      { setting: "High", fps: 110, power: 290 },
      { setting: "Epic", fps: 85, power: 330 },
    ],
    "elden-ring": [
      { setting: "Low", fps: 144, power: 200 },
      { setting: "Medium", fps: 120, power: 250 },
      { setting: "High", fps: 95, power: 300 },
      { setting: "Ultra", fps: 70, power: 350 },
    ],
    "baldurs-gate": [
      { setting: "Low", fps: 130, power: 210 },
      { setting: "Medium", fps: 105, power: 260 },
      { setting: "High", fps: 82, power: 310 },
      { setting: "Ultra", fps: 60, power: 360 },
    ],
  },
  "1440p": {
    cyberpunk2077: [
      { setting: "Low", fps: 85, power: 240 },
      { setting: "Medium", fps: 65, power: 290 },
      { setting: "High", fps: 50, power: 330 },
      { setting: "Ultra", fps: 28, power: 370 },
    ],
    gtav: [
      { setting: "Low", fps: 130, power: 210 },
      { setting: "Medium", fps: 110, power: 260 },
      { setting: "High", fps: 90, power: 310 },
      { setting: "Ultra", fps: 65, power: 350 },
    ],
    valorant: [
      { setting: "Low", fps: 220, power: 150 },
      { setting: "Medium", fps: 200, power: 180 },
      { setting: "High", fps: 180, power: 210 },
      { setting: "Ultra", fps: 160, power: 250 },
    ],
    fortnite: [
      { setting: "Low", fps: 120, power: 220 },
      { setting: "Medium", fps: 100, power: 270 },
      { setting: "High", fps: 80, power: 320 },
      { setting: "Epic", fps: 60, power: 360 },
    ],
    "elden-ring": [
      { setting: "Low", fps: 105, power: 230 },
      { setting: "Medium", fps: 85, power: 280 },
      { setting: "High", fps: 65, power: 330 },
      { setting: "Ultra", fps: 48, power: 370 },
    ],
    "baldurs-gate": [
      { setting: "Low", fps: 95, power: 240 },
      { setting: "Medium", fps: 75, power: 290 },
      { setting: "High", fps: 58, power: 340 },
      { setting: "Ultra", fps: 42, power: 380 },
    ],
  },
  "4k": {
    cyberpunk2077: [
      { setting: "Low", fps: 50, power: 300 },
      { setting: "Medium", fps: 35, power: 340 },
      { setting: "High", fps: 25, power: 370 },
      { setting: "Ultra", fps: 12, power: 400 },
    ],
    gtav: [
      { setting: "Low", fps: 75, power: 280 },
      { setting: "Medium", fps: 62, power: 320 },
      { setting: "High", fps: 50, power: 360 },
      { setting: "Ultra", fps: 38, power: 390 },
    ],
    valorant: [
      { setting: "Low", fps: 130, power: 200 },
      { setting: "Medium", fps: 115, power: 230 },
      { setting: "High", fps: 100, power: 260 },
      { setting: "Ultra", fps: 85, power: 290 },
    ],
    fortnite: [
      { setting: "Low", fps: 70, power: 280 },
      { setting: "Medium", fps: 58, power: 320 },
      { setting: "High", fps: 45, power: 360 },
      { setting: "Epic", fps: 35, power: 390 },
    ],
    "elden-ring": [
      { setting: "Low", fps: 60, power: 290 },
      { setting: "Medium", fps: 48, power: 330 },
      { setting: "High", fps: 38, power: 360 },
      { setting: "Ultra", fps: 28, power: 390 },
    ],
    "baldurs-gate": [
      { setting: "Low", fps: 55, power: 300 },
      { setting: "Medium", fps: 42, power: 340 },
      { setting: "High", fps: 32, power: 370 },
      { setting: "Ultra", fps: 24, power: 400 },
    ],
  },
}

const gameNames = {
  cyberpunk2077: "Cyberpunk 2077",
  gtav: "GTA V",
  valorant: "Valorant",
  fortnite: "Fortnite",
  "elden-ring": "Elden Ring",
  "baldurs-gate": "Baldur's Gate 3",
}

export function FPSResults({ game, resolution }) {
  const data = fpsData[resolution][game]

  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>
            {gameNames[game]} - {resolution}
          </CardTitle>
          <CardDescription>FPS at different graphics settings</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f3a93" />
              <XAxis dataKey="setting" stroke="#64c8ff" />
              <YAxis stroke="#64c8ff" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0e27",
                  border: "1px solid #64c8ff",
                }}
              />
              <Legend />
              <Bar dataKey="fps" fill="#64c8ff" name="FPS" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>Power Consumption</CardTitle>
          <CardDescription>Estimated power usage at different settings</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f3a93" />
              <XAxis dataKey="setting" stroke="#64c8ff" />
              <YAxis stroke="#64c8ff" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0e27",
                  border: "1px solid #64c8ff",
                }}
              />
              <Line
                type="monotone"
                dataKey="power"
                stroke="#ff6b35"
                strokeWidth={2}
                dot={{ fill: "#ff6b35" }}
                name="Power (W)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        {data.map((item) => (
          <Card key={item.setting} className="border-primary/20 bg-card/30 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-foreground/70">{item.setting} Settings</p>
                <p className="text-3xl font-bold neon-text">{item.fps} FPS</p>
                <p className="text-sm text-foreground/60">{item.power}W power draw</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
