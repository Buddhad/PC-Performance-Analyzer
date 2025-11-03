"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const cpus = [
  { id: "intel-i9-13900k", name: "Intel i9-13900K", cores: "24 cores" },
  { id: "intel-i7-13700k", name: "Intel i7-13700K", cores: "16 cores" },
  { id: "amd-ryzen-9", name: "AMD Ryzen 9 7950X", cores: "16 cores" },
  { id: "amd-ryzen-7", name: "AMD Ryzen 7 7700X", cores: "8 cores" },
]

const gpus = [
  { id: "rtx-4080", name: "RTX 4080", memory: "16GB" },
  { id: "rtx-4070", name: "RTX 4070", memory: "12GB" },
  { id: "rtx-4060", name: "RTX 4060", memory: "8GB" },
  { id: "amd-7900xtx", name: "AMD Radeon 7900 XTX", memory: "24GB" },
]

const rams = [
  { id: "ddr5-32gb", name: "DDR5 32GB", speed: "6000MHz" },
  { id: "ddr5-64gb", name: "DDR5 64GB", speed: "6000MHz" },
  { id: "ddr4-32gb", name: "DDR4 32GB", speed: "3600MHz" },
  { id: "ddr4-16gb", name: "DDR4 16GB", speed: "3600MHz" },
]

export function ComponentSelector({
  componentType,
  onSelectType,
  yourComponent,
  compareComponent,
  onSelectYour,
  onSelectCompare,
}) {
  const components = componentType === "cpu" ? cpus : componentType === "gpu" ? gpus : rams
  const label = componentType === "cpu" ? "CPU" : componentType === "gpu" ? "GPU" : "RAM"

  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>Component Type</CardTitle>
          <CardDescription>Choose what to compare</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            onClick={() => onSelectType("cpu")}
            variant={componentType === "cpu" ? "default" : "outline"}
            className="w-full"
          >
            CPU
          </Button>
          <Button
            onClick={() => onSelectType("gpu")}
            variant={componentType === "gpu" ? "default" : "outline"}
            className="w-full"
          >
            GPU
          </Button>
          <Button
            onClick={() => onSelectType("ram")}
            variant={componentType === "ram" ? "default" : "outline"}
            className="w-full"
          >
            RAM
          </Button>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>Your {label}</CardTitle>
          <CardDescription>Select your component</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 max-h-64 overflow-y-auto">
          {components.map((comp) => (
            <Button
              key={comp.id}
              onClick={() => onSelectYour(comp.id)}
              variant={yourComponent === comp.id ? "default" : "outline"}
              className="w-full justify-start flex-col items-start h-auto py-2"
            >
              <span className="font-semibold text-sm">{comp.name}</span>
              <span className="text-xs opacity-70">{comp.cores || comp.memory || comp.speed}</span>
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-card/30">
        <CardHeader>
          <CardTitle>Compare With</CardTitle>
          <CardDescription>Select comparison component</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 max-h-64 overflow-y-auto">
          {components.map((comp) => (
            <Button
              key={comp.id}
              onClick={() => onSelectCompare(comp.id)}
              variant={compareComponent === comp.id ? "default" : "outline"}
              className="w-full justify-start flex-col items-start h-auto py-2"
            >
              <span className="font-semibold text-sm">{comp.name}</span>
              <span className="text-xs opacity-70">{comp.cores || comp.memory || comp.speed}</span>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
