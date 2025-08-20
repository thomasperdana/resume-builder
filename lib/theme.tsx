'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark-blue' | 'light-green'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark-blue')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get theme from localStorage on mount
    const savedTheme = localStorage.getItem('resume-builder-theme') as Theme
    if (savedTheme && (savedTheme === 'dark-blue' || savedTheme === 'light-green')) {
      setTheme(savedTheme)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      // Save theme to localStorage
      localStorage.setItem('resume-builder-theme', theme)
      
      // Apply theme to document
      document.documentElement.className = theme
      
      // Apply CSS custom properties based on theme
      const root = document.documentElement
      
      if (theme === 'dark-blue') {
        // Dark Blue Shader Theme
        root.style.setProperty('--background', '220 25% 6%') // Deep navy
        root.style.setProperty('--foreground', '210 40% 98%') // Off-white
        root.style.setProperty('--primary', '210 100% 50%') // Electric blue
        root.style.setProperty('--primary-foreground', '220 25% 6%')
        root.style.setProperty('--secondary', '220 20% 14%') // Lighter navy
        root.style.setProperty('--secondary-foreground', '210 40% 98%')
        root.style.setProperty('--muted', '220 15% 20%')
        root.style.setProperty('--muted-foreground', '210 30% 80%')
        root.style.setProperty('--accent', '200 100% 60%') // Cyan accent
        root.style.setProperty('--accent-foreground', '220 25% 6%')
        root.style.setProperty('--card', '220 20% 10%')
        root.style.setProperty('--card-foreground', '210 40% 98%')
        root.style.setProperty('--border', '220 15% 25%')
        root.style.setProperty('--input', '220 15% 25%')
        root.style.setProperty('--ring', '210 100% 50%')
      } else {
        // Light Green Shader Theme
        root.style.setProperty('--background', '155 25% 97%') // Off-white with mint tint
        root.style.setProperty('--foreground', '160 15% 15%') // Dark charcoal
        root.style.setProperty('--primary', '165 85% 45%') // Vibrant mint green
        root.style.setProperty('--primary-foreground', '155 25% 97%')
        root.style.setProperty('--secondary', '155 15% 90%') // Light mint
        root.style.setProperty('--secondary-foreground', '160 15% 15%')
        root.style.setProperty('--muted', '155 10% 85%')
        root.style.setProperty('--muted-foreground', '160 10% 40%')
        root.style.setProperty('--accent', '170 80% 50%') // Seafoam green
        root.style.setProperty('--accent-foreground', '155 25% 97%')
        root.style.setProperty('--card', '155 20% 95%')
        root.style.setProperty('--card-foreground', '160 15% 15%')
        root.style.setProperty('--border', '155 15% 75%')
        root.style.setProperty('--input', '155 15% 85%')
        root.style.setProperty('--ring', '165 85% 45%')
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === 'dark-blue' ? 'light-green' : 'dark-blue')
  }

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}