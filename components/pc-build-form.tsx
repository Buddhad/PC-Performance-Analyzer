"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ArrowRight, Zap, Cpu } from "lucide-react"

export function PCBuildForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    cpu: "",
    gpu: "",
    ram: "",
    mobo: "",
    cpuCooler: "",
    psu: "",
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.cpu && formData.gpu && formData.ram && formData.mobo && formData.cpuCooler && formData.psu) {
      onSubmit(formData)
    }
  }

  const isComplete = Object.values(formData).every((v) => v.trim() !== "")

  return (
    <Card className="border-accent/30 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Cpu className="w-5 h-5 text-accent" />
          <CardTitle className="text-2xl">Your PC Configuration</CardTitle>
        </div>
        <CardDescription>Enter your PC components to analyze and benchmark</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* CPU Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">CPU</label>
              <Input
                placeholder="e.g., Intel i9-13900K or AMD Ryzen 9 7950X"
                value={formData.cpu}
                onChange={(e) => handleChange("cpu", e.target.value)}
                className="border-primary/30 focus:border-accent/50"
              />
            </div>

            {/* GPU Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">GPU</label>
              <Input
                placeholder="e.g., RTX 4080 or RTX 4070"
                value={formData.gpu}
                onChange={(e) => handleChange("gpu", e.target.value)}
                className="border-primary/30 focus:border-accent/50"
              />
            </div>

            {/* RAM Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">RAM</label>
              <Input
                placeholder="e.g., DDR5 32GB 6000MHz"
                value={formData.ram}
                onChange={(e) => handleChange("ram", e.target.value)}
                className="border-primary/30 focus:border-accent/50"
              />
            </div>

            {/* Motherboard Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Motherboard</label>
              <Input
                placeholder="e.g., ASUS ROG Strix Z790"
                value={formData.mobo}
                onChange={(e) => handleChange("mobo", e.target.value)}
                className="border-primary/30 focus:border-accent/50"
              />
            </div>

            {/* CPU Cooler Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">CPU Cooler</label>
              <Input
                placeholder="e.g., Noctua NH-D15 or NZXT Kraken X73"
                value={formData.cpuCooler}
                onChange={(e) => handleChange("cpuCooler", e.target.value)}
                className="border-primary/30 focus:border-accent/50"
              />
            </div>

            {/* PSU Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Power Supply</label>
              <Input
                placeholder="e.g., 1000W Corsair RM1000e"
                value={formData.psu}
                onChange={(e) => handleChange("psu", e.target.value)}
                className="border-primary/30 focus:border-accent/50"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={!isComplete}
            className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-black font-semibold py-2 flex items-center justify-center gap-2 transition-all"
          >
            <Zap className="w-4 h-4" />
            Analyze PC Build
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
