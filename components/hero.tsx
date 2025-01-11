import { GraduationCap, Atom } from 'lucide-react'
import SocialTags from './social-tags'

export default function Hero() {
  return (
    <section className="container grid items-center gap-8 pt-16 pb-12 md:py-20">
      <div className="flex max-w-[980px] flex-col items-start gap-3 md:ml-12">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Hello, I am Hayden <br className="hidden sm:inline" />
          Physics Graduate & Developer
        </h1>
        <p className="max-w-[700px] text-xl text-muted-foreground">
          Using data analysis and machine learning to solve real-world problems. Experienced in building predictive models and creating data-driven applications.
        </p>
      </div>
      <div className="flex gap-4 md:ml-12">
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
      <div className="md:ml-12">
        <SocialTags />
      </div>
      <div className="flex items-center gap-4 md:ml-12">
        <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
          <GraduationCap className="h-5 w-5" />
          <span>Physics Graduate</span>
        </div>
        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
          <Atom className="h-5 w-5" />
          <span>Tech Enthusiast</span>
        </div>
      </div>
    </section>
  )
}

