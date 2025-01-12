"use client"

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    updateCanvasSize()

    function drawCloud(x: number, y: number, width: number, height: number) {
      if (!ctx) return
      
      // Draw main cloud body
      ctx.beginPath()
      ctx.moveTo(x, y + height * 0.5)
      
      // Left side
      ctx.bezierCurveTo(
        x - width * 0.1, y + height * 0.5,
        x - width * 0.1, y - height * 0.2,
        x + width * 0.3, y - height * 0.4
      )
      
      // Middle bump
      ctx.bezierCurveTo(
        x + width * 0.4, y - height * 0.5,
        x + width * 0.6, y - height * 0.5,
        x + width * 0.7, y - height * 0.4
      )
      
      // Right side
      ctx.bezierCurveTo(
        x + width * 1.1, y - height * 0.3,
        x + width * 1.1, y + height * 0.3,
        x + width, y + height * 0.5
      )
      
      ctx.closePath()
      
      // Add cloud shading
      const gradient = ctx.createLinearGradient(x, y - height * 0.5, x, y + height * 0.5)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.4)')
      ctx.fillStyle = gradient
      ctx.fill()
    }

    function drawNightSky() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Adjust number of stars based on screen width
      const starCount = window.innerWidth < 768 ? 40 : 100
      
      // Draw stars
      const stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5
      }))

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      stars.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    function drawDaySky() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Sky gradient for full height
      const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      skyGradient.addColorStop(0, '#B3D9FF')
      skyGradient.addColorStop(0.95, '#E6F3FF')
      ctx.fillStyle = skyGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Sun - adjusted position and size
      const sunGradient = ctx.createRadialGradient(
        canvas.width - 150, 120, 0,
        canvas.width - 150, 120, 80
      )
      sunGradient.addColorStop(0, '#FFD700')
      sunGradient.addColorStop(0.7, '#FFD700')
      sunGradient.addColorStop(1, 'rgba(255, 215, 0, 0)')
      ctx.fillStyle = sunGradient
      ctx.beginPath()
      ctx.arc(canvas.width - 150, 120, 80, 0, Math.PI * 2)
      ctx.fill()

      // Optional: Add a solid center to make the sun more prominent
      ctx.fillStyle = '#FFD700'
      ctx.beginPath()
      ctx.arc(canvas.width - 150, 120, 60, 0, Math.PI * 2)
      ctx.fill()

      // Adjust number of clouds based on screen width
      const isMobile = window.innerWidth < 768
      const clouds = isMobile ? [
        // Fewer clouds for mobile
        { x: canvas.width * 0.1, y: window.innerHeight * 0.1, width: 140, height: 35 },
        { x: canvas.width * 0.5, y: window.innerHeight * 0.15, width: 160, height: 40 },
        { x: canvas.width * 0.8, y: window.innerHeight * 0.08, width: 130, height: 35 },
        { x: canvas.width * 0.2, y: window.innerHeight * 0.3, width: 150, height: 40 },
        { x: canvas.width * 0.7, y: window.innerHeight * 0.35, width: 140, height: 35 }
      ] : [
        // Original cloud configuration for desktop
        { x: canvas.width * 0.1, y: window.innerHeight * 0.1, width: 180, height: 45 },
        { x: canvas.width * 0.5, y: window.innerHeight * 0.15, width: 250, height: 60 },
        { x: canvas.width * 0.8, y: window.innerHeight * 0.08, width: 190, height: 50 },
        { x: canvas.width * 0.2, y: window.innerHeight * 0.3, width: 220, height: 50 },
        { x: canvas.width * 0.6, y: window.innerHeight * 0.35, width: 200, height: 55 },
        { x: canvas.width * 0.85, y: window.innerHeight * 0.28, width: 170, height: 45 },
        { x: canvas.width * 0.15, y: window.innerHeight * 0.5, width: 180, height: 45 },
        { x: canvas.width * 0.45, y: window.innerHeight * 0.45, width: 220, height: 55 },
        { x: canvas.width * 0.75, y: window.innerHeight * 0.55, width: 190, height: 50 },
        { x: canvas.width * 0.3, y: window.innerHeight * 0.65, width: 160, height: 40 },
        { x: canvas.width * 0.7, y: window.innerHeight * 0.7, width: 200, height: 45 }
      ]

      // Draw each cloud
      clouds.forEach(cloud => drawCloud(cloud.x, cloud.y, cloud.width, cloud.height))

      // Simple grass fade at the bottom
      const grassGradient = ctx.createLinearGradient(
        0, canvas.height - 150,
        0, canvas.height - 100
      )
      grassGradient.addColorStop(0, 'rgba(76, 175, 80, 0)')
      grassGradient.addColorStop(1, '#4CAF50')
      ctx.fillStyle = grassGradient
      ctx.fillRect(0, canvas.height - 150, canvas.width, canvas.height - 100)
    }

    function draw() {
      if (theme === 'dark') {
        drawNightSky()
      } else {
        drawDaySky()
      }
    }

    draw()

    const handleResize = () => {
      updateCanvasSize()
      draw()
    }

    const handleScroll = () => {
      updateCanvasSize()
      draw()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [theme])

  return (
    <div className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  )
}

