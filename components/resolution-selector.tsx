"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const resolutions = [
  { id: "1080p", name: "1080p (Full HD)", specs: "1920x1080" },
  { id: "1440p", name: "1440p (QHD)", specs: "2560x1440" },
  { id: "4k", name: "4K (Ultra HD)", specs: "3840x2160" },
]

export function ResolutionSelector({ selectedResolution, onSelectResolution }) {
  return (
    <Card className="border-primary/20 bg-card/30">
      <CardHeader>
        <CardTitle>Display Resolution</CardTitle>
        <CardDescription>Choose your target resolution</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {resolutions.map((res) => (
          <Button
            key={res.id}
            onClick={() => onSelectResolution(res.id)}
            variant={selectedResolution === res.id ? "default" : "outline"}
            className="w-full justify-start flex-col items-start h-auto py-3"
          >
            <span className="font-semibold">{res.name}</span>
            <span className="text-xs opacity-70">{res.specs}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
