import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PC Analyzer Pro",
  description: "Analyze your PC specs, performance, and gaming potential",
  generator: "v0.app",
  icons: {
    icon: "/settings.png", // Standard icon
    shortcut: "/settings.png", // For legacy browser shortcut icon
  },
  openGraph: {
    title: "PC Analyzer Pro",
    description: "Analyze your PC specs, performance, and gaming potential",
    url: "https://pcanalyzer.vercel.app/",
    siteName: "PC Analyzer Pro",
    images: [
      {
        url: "/og-image.png", // Place your Open Graph preview image in public/
        width: 1200,
        height: 630,
        alt: "PC Analyzer Pro Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PC Analyzer Pro",
    description: "Analyze your PC specs, performance, and gaming potential",
    images: ["/og-image.png"]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
