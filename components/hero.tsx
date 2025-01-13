import { GraduationCap, Atom } from 'lucide-react'
import SocialTags from './social-tags'

export default function Hero() {
  return (
    <section className="container grid items-center gap-6 px-4 pt-12 pb-8 md:gap-8 md:pt-16 md:pb-12">
      <div className="flex max-w-[980px] flex-col items-start gap-2 md:gap-3">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Hello, I am Hayden Tibbals <br className="hidden sm:inline" />
          Physics Graduate & Data Scientist
        </h1>
        <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground">
          Experienced in using data analysis and machine learning to solve real-world problems.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-2"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-card shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2"
        >
          Contact Me
        </a>
      </div>
      <div>
        <SocialTags />
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm">
          <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
          <span>Physics Graduate</span>
        </div>
        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm">
          <Atom className="h-4 w-4 sm:h-5 sm:w-5" />
          <span>Tech Enthusiast</span>
        </div>
      </div>
    </section>
  )
}

