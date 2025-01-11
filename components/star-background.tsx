"use client"
import { useEffect, useRef } from 'react'


export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; radius: number; flickerSpeed: number; flickerState: number }[] = []

    for (let i = 0; i < 600; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        flickerSpeed: 0.55 + Math.random() * 0.1,
        flickerState: 0
      })
    }

    function drawStars() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'

      for (const star of stars) {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * (0.5 + Math.abs(Math.sin(star.flickerState)) * 0.5), 0, Math.PI * 2)
        ctx.fill()

        star.flickerState += star.flickerSpeed
      }

      requestAnimationFrame(drawStars)
    }

    drawStars()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  )
}

