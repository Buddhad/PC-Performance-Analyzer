"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"

export function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    if (mounted) {
      const html = document.documentElement
      html.classList.toggle("dark")
      setIsDark(!isDark)
    }
  }

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center neon-glow">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="font-bold text-lg neon-text hidden sm:inline">PC Analyzer Pro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/benchmark" className="hover:text-primary transition-colors">
              Benchmark
            </Link>
            <Link href="/gaming-fps" className="hover:text-primary transition-colors">
              Gaming FPS
            </Link>
            <Link href="/optimization" className="hover:text-primary transition-colors">
              Optimization
            </Link>
            <Link href="/upgrade" className="hover:text-primary transition-colors">
              Upgrade
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (isDark ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hidden md:block p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (isDark ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <Link href="/" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Home
            </Link>
            <Link href="/dashboard" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Dashboard
            </Link>
            <Link href="/benchmark" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Benchmark
            </Link>
            <Link href="/gaming-fps" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Gaming FPS
            </Link>
            <Link href="/optimization" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Optimization
            </Link>
            <Link href="/upgrade" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Upgrade
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
