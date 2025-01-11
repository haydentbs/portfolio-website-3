"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Footer() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="relative">
      {/* Extra large house with brick colors */}
      {mounted && theme === 'light' && (
        <div className="absolute -top-32 right-20">
          {/* Roof (wider triangle) */}
          <div 
            className="w-0 h-0 relative"
            style={{
              borderLeft: '70px solid transparent',
              borderRight: '70px solid transparent',
              borderBottom: '60px solid #4A312C',
              marginBottom: '-1px',
              transform: 'translateX(-10px)'  // Fine-tune centering with transform instead
            }}
          />
          {/* House body (square) */}
          <div className="w-[120px] h-[120px] bg-[#B25D4F]">
            {/* Taller door */}
            <div className="absolute left-1/2 bottom-0 w-10 h-20 bg-[#4A312C] -translate-x-1/2 rounded-t-sm" />
          </div>
        </div>
      )}
      
      {/* Main footer content */}
      <div 
        className={`relative ${mounted && theme === 'light' ? 'bg-[#4CAF50]' : 'border-t border-border/40'}`}
      >
        <div className={`container flex flex-col items-center justify-between gap-4 py-12 md:h-32 md:flex-row md:py-0 
          ${mounted && theme === 'light' ? 'text-white' : 'text-muted-foreground'}`}>
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-left">
              
            </p>
          </div>
          <p className="text-center text-sm md:text-left">
            © {new Date().getFullYear()} Hayden Tibbals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

