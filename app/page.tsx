import Header from '@/components/header'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Footer from '@/components/footer'
import Background from '@/components/background'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  )
}

