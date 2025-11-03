"use client"

import { Navbar } from "@/components/navbar"
import { ComponentSelector } from "@/components/component-selector"
import { BenchmarkComparison } from "@/components/benchmark-comparison"
import { PCBuildForm } from "@/components/pc-build-form"
import { PCBuildDetails } from "@/components/pc-build-details"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BenchmarkPage() {
  const [componentType, setComponentType] = useState("cpu")
  const [yourComponent, setYourComponent] = useState("intel-i9-13900k")
  const [compareComponent, setCompareComponent] = useState("intel-i7-13700k")
  const [userBuild, setUserBuild] = useState(null)

  const handleBuildSubmit = (buildData) => {
    setUserBuild(buildData)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Component</span> Benchmark
          </h1>
          <p className="text-foreground/70 text-lg">
            Compare your components with other hardware and see how they stack up
          </p>
        </div>

        <Tabs defaultValue="component" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-primary/10 border border-primary/20">
            <TabsTrigger value="component" className="data-[state=active]:bg-accent/20">
              Component Compare
            </TabsTrigger>
            <TabsTrigger value="build" className="data-[state=active]:bg-accent/20">
              Your PC Build
            </TabsTrigger>
          </TabsList>

          <TabsContent value="component" className="space-y-6">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <div className="space-y-6 sticky top-24">
                  <ComponentSelector
                    componentType={componentType}
                    onSelectType={setComponentType}
                    yourComponent={yourComponent}
                    compareComponent={compareComponent}
                    onSelectYour={setYourComponent}
                    onSelectCompare={setCompareComponent}
                  />
                </div>
              </div>

              <div className="lg:col-span-2">
                <BenchmarkComparison
                  type={componentType}
                  yourComponent={yourComponent}
                  compareComponent={compareComponent}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="build" className="space-y-6">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <PCBuildForm onSubmit={handleBuildSubmit} />
                </div>
              </div>

              <div className="lg:col-span-2">
                <PCBuildDetails buildData={userBuild} />
                {!userBuild && (
                  <div className="text-center py-12 rounded-lg border-2 border-dashed border-primary/20 bg-primary/5">
                    <p className="text-foreground/60 text-lg">Enter your PC components to see detailed analysis</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
