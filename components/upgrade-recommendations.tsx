"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThumbsUp } from "lucide-react"

const recommendations = [
  {
    category: "GPU Upgrade",
    title: "NVIDIA RTX 4080 Super",
    specs: "16GB GDDR6X, 384-bit bus, DirectX 12",
    currentPrice: "$1,099",
    performanceGain: "+45% gaming FPS",
    pros: ["Excellent 1440p/4K performance", "16GB VRAM for 4K gaming", "Power efficient"],
    cons: ["High price point", "Overkill for 1080p"],
    bestFor: "1440p and 4K gaming",
    rating: 4.8,
  },
  {
    category: "GPU Upgrade (Budget)",
    title: "NVIDIA RTX 4070 Super",
    specs: "12GB GDDR6X, 192-bit bus, DirectX 12",
    currentPrice: "$599",
    performanceGain: "+35% gaming FPS",
    pros: ["Great value for performance", "Excellent 1440p gaming", "Lower power draw"],
    cons: ["12GB VRAM for 4K is tight", "Slightly slower than 4080"],
    bestFor: "Best value gaming GPU",
    rating: 4.7,
  },
  {
    category: "CPU Upgrade",
    title: "Intel i7-14700KF",
    specs: "20 cores (8P+12E), 5.6GHz boost, 253W TDP",
    currentPrice: "$419",
    performanceGain: "+20% CPU performance",
    pros: ["Strong gaming + productivity", "Good price-to-performance", "Efficient"],
    cons: ["Higher TDP than Ryzen", "Requires Z790 motherboard"],
    bestFor: "Gaming and productivity",
    rating: 4.6,
  },
  {
    category: "Storage Upgrade",
    title: "Samsung 990 Pro 2TB",
    specs: "2TB NVMe, PCIe 4.0, 7,100 MB/s read",
    currentPrice: "$179",
    performanceGain: "+200GB storage",
    pros: ["Blazing fast speeds", "Reliable brand", "Great for large files"],
    cons: ["Can get hot without heatsink", "Expensive per GB"],
    bestFor: "Fast game and file storage",
    rating: 4.9,
  },
  {
    category: "RAM Upgrade",
    title: "Corsair Dominator Titanium 32GB DDR5",
    specs: "32GB (2x16GB), 6000MHz, CAS 30",
    currentPrice: "$189",
    performanceGain: "Future-proofing",
    pros: ["Excellent speeds", "RGB lighting", "Reliability"],
    cons: ["Minimal gaming benefit now", "Expensive upgrade"],
    bestFor: "Future-proofing + multitasking",
    rating: 4.7,
  },
  {
    category: "Cooler Upgrade",
    title: "NZXT Kraken Z73 RGB",
    specs: '360mm AIO, 2.36" display, PWM pump',
    currentPrice: "$299",
    performanceGain: "-20°C temps",
    pros: ["Excellent cooling performance", "RGB with display", "Quiet operation"],
    cons: ["Potential for leaks over time", "Requires radiator space"],
    bestFor: "High-end overclocking",
    rating: 4.8,
  },
]

export function UpgradeRecommendations() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Recommended Upgrades</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {recommendations.map((item) => (
          <Card key={item.title} className="border-primary/20 bg-card/30 flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <Badge className="mb-2 bg-primary/20 text-primary border-primary/50">{item.category}</Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-xs mt-1">{item.specs}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-accent">{item.rating}</span>
                    <span className="text-accent text-sm">★</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Price:</span>
                  <span className="text-lg font-bold neon-text">{item.currentPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Gain:</span>
                  <span className="text-sm font-semibold text-accent">{item.performanceGain}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-foreground/70">Pros</p>
                <ul className="space-y-1">
                  {item.pros.map((pro, idx) => (
                    <li key={idx} className="text-xs text-foreground/60 flex items-start gap-2">
                      <span className="text-accent mt-1">+</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-foreground/70">Cons</p>
                <ul className="space-y-1">
                  {item.cons.map((con, idx) => (
                    <li key={idx} className="text-xs text-foreground/60 flex items-start gap-2">
                      <span className="text-destructive mt-1">−</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-foreground/60 mb-3">
                  Best for: <span className="text-foreground">{item.bestFor}</span>
                </p>
                <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  View on PCPartPicker
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
