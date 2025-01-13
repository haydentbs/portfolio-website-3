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
      {/* Light mode house */}
      {mounted && theme === 'light' && (
        <div className="absolute -top-32 right-20">
          {/* Roof */}
          <div 
            className="w-0 h-0 relative"
            style={{
              borderLeft: '70px solid transparent',
              borderRight: '70px solid transparent',
              borderBottom: '60px solid #4A312C',
              marginBottom: '-1px',
              transform: 'translateX(-10px)'
            }}
          />
          {/* House body */}
          <div className="w-[120px] h-[120px] bg-[#B25D4F]">
            {/* Door */}
            <div className="absolute left-1/2 bottom-0 w-10 h-20 bg-[#4A312C] -translate-x-1/2 rounded-t-sm" />
          </div>
        </div>
      )}

      {/* Dark mode alien and planet surface */}
      {mounted && theme === 'dark' && (
        <div className="absolute -top-32 right-20">
          {/* Alien */}
          <div className="relative w-[100px] h-[120px]">
            {/* Head */}
            <div className="absolute w-16 h-20 bg-[#50C878] rounded-t-full left-1/2 -translate-x-1/2">
              {/* Eyes */}
              <div className="absolute top-6 left-2 w-3 h-4 bg-black rounded-full"></div>
              <div className="absolute top-6 right-2 w-3 h-4 bg-black rounded-full"></div>
              {/* Antennae */}
              <div className="absolute -top-6 left-2 w-2 h-6 bg-[#50C878] rounded-full transform -rotate-12"></div>
              <div className="absolute -top-6 right-2 w-2 h-6 bg-[#50C878] rounded-full transform rotate-12"></div>
            </div>
            {/* Body */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-14 bg-[#50C878] rounded-b-lg"></div>
          </div>
        </div>
      )}
      
      {/* Footer content */}
      <div className={`relative ${mounted && theme === 'light' ? 'bg-[#4CAF50]' : 'bg-[#2C3E50]'}`}>
        {/* Craters for dark mode */}
        {mounted && theme === 'dark' && (
          <>
            <div className="absolute left-[10%] top-2 w-8 h-8 rounded-full bg-[#34495E]"></div>
            <div className="absolute left-[30%] top-4 w-6 h-6 rounded-full bg-[#34495E]"></div>
            <div className="absolute left-[60%] top-1 w-10 h-10 rounded-full bg-[#34495E]"></div>
            <div className="absolute left-[80%] top-3 w-7 h-7 rounded-full bg-[#34495E]"></div>
            <div className="absolute right-[15%] top-2 w-9 h-9 rounded-full bg-[#34495E]"></div>
          </>
        )}
        <div className={`container flex flex-col items-center justify-between gap-4 py-12 md:h-32 md:flex-row md:py-0 
          ${mounted && theme === 'light' ? 'text-white' : 'text-[#50C878]'}`}>
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

