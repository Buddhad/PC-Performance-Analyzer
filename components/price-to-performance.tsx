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

const pricePerformanceData = [
  { component: "RTX 4060", price: 299, performance: 1400, value: 4.68 },
  { component: "RTX 4070", price: 599, performance: 2200, value: 3.67 },
  { component: "RTX 4080", price: 1199, performance: 2850, value: 2.38 },
  { component: "RTX 4090", price: 1999, performance: 3950, value: 1.98 },
]

const cpuComparisonData = [
  { name: "i5-14600KF", price: 289, singlecore: 240, multicore: 1650 },
  { name: "i7-14700KF", price: 419, singlecore: 280, multicore: 2350 },
  { name: "i9-14900KF", price: 589, singlecore: 310, multicore: 2800 },
]

export function PriceToPerformance() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Price-to-Performance Analysis</h2>

      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>GPU Value Comparison</CardTitle>
          <CardDescription>Performance per dollar across price tiers</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={pricePerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f3a93" />
              <XAxis dataKey="component" stroke="#64c8ff" />
              <YAxis stroke="#64c8ff" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0e27",
                  border: "1px solid #64c8ff",
                }}
              />
              <Legend />
              <Bar dataKey="performance" fill="#64c8ff" name="Performance Score" radius={[8, 8, 0, 0]} />
              <Bar dataKey="price" fill="#ff6b35" name="Price ($)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-primary/20 bg-card/30">
          <CardHeader>
            <CardTitle>Best Value GPU</CardTitle>
            <CardDescription>Most performance per dollar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pricePerformanceData.map((item) => (
                <div key={item.component} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.component}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-2 bg-primary/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${(item.value / 4.68) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold neon-text w-12 text-right">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-card/30">
          <CardHeader>
            <CardTitle>CPU Price Breakdown</CardTitle>
            <CardDescription>CPU performance across price points</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={cpuComparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f3a93" />
                <XAxis dataKey="name" stroke="#64c8ff" fontSize={12} />
                <YAxis stroke="#64c8ff" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0a0e27",
                    border: "1px solid #64c8ff",
                  }}
                />
                <Line type="monotone" dataKey="price" stroke="#ff6b35" strokeWidth={2} name="Price ($)" />
                <Line type="monotone" dataKey="multicore" stroke="#64c8ff" strokeWidth={2} name="Multicore" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border-accent/50 bg-gradient-to-r from-accent/10 to-primary/10 neon-glow">
        <CardHeader>
          <CardTitle>Value Recommendation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Based on current pricing and performance metrics, the{" "}
            <span className="font-semibold text-accent">RTX 4070</span> offers the{" "}
            <span className="font-bold neon-text">best value</span> with 3.67 performance points per dollar. For
            budget-conscious builds, the <span className="font-semibold">RTX 4060</span> provides solid 1440p
            performance. High-end builds should consider the <span className="font-semibold">RTX 4090</span> for maximum
            4K capability.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
