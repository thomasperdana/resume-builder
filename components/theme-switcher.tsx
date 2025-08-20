'use client'

import { useTheme } from '@/lib/theme'
import { Button } from '@/components/ui/button'
import { Palette, Moon, Sun } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="relative h-10 w-10 p-0 transition-all duration-300 hover:scale-105"
        >
          <Palette className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem
          onClick={() => setTheme('dark-blue')}
          className={`cursor-pointer transition-colors ${
            theme === 'dark-blue' ? 'bg-primary/10' : ''
          }`}
        >
          <Moon className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span className="font-medium">Dark Blue Shader</span>
            <span className="text-xs text-muted-foreground">
              Deep navy with electric blue accents
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('light-green')}
          className={`cursor-pointer transition-colors ${
            theme === 'light-green' ? 'bg-primary/10' : ''
          }`}
        >
          <Sun className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span className="font-medium">Light Green Shader</span>
            <span className="text-xs text-muted-foreground">
              Clean mint background with vibrant green accents
            </span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}