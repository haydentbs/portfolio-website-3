import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  
  {
    title: 'Reinforcement Learning for Cancer Treatment Plans',
    description: 'Developed a RL alggorithm alongside NHS Christie Hospital to optimise treatment plans for cancer patients',
    image: '/pbt_2.png',
    skills: ['Python', 'Reinforcement Learning'],
    github: 'https://github.com/haydentbs/PBT_RL_GAMIFICATION',
    paper: '/pbt.pdf'
  },
  {
    title: 'AI Negotiation App',
    description: 'Developed an AI negotiation app in a react framework using the OpenAI API. User can receive specialist advice for a situation and expert responses',
    image: '/ivor_2.png',
    skills: ['React', 'OpenAI API', 'TypeScript'],
    demo: 'https://negotitate-app-v2-haydentbs-haydentbs-projects.vercel.app'
  },
  {
    title: 'Reinforcement Learning Trading Bot',
    description: 'Built a trading bot that uses reinforcement learning to make trades based on historical data',
    image: '/stock.png?height=200&width=300',
    github: 'https://github.com/haydentbs/RL-Trading-Bot',
    skills: ['Python', 'Reinforcement Learning', 'Trading']
  },
  {
    title: 'Premier League Match Prediction Model',
    description: 'Built a model that predicts the outcome of Premier League matches with 80% accuracy based on historial data and match results',
    image: '/prem.png?height=200&width=300',
    github: 'https://github.com/haydentbs/Premier-League-Match-Predictor',
    skills: ['Python', 'NumPy', 'Sci-kit Learn']
  },
  {
    title: 'ML and Data Cleaning Porject on Global WHO data',
    description: 'Cleaned and analysed global WHO data, adding in additioanl data from other sources to produce a model that predicts the life expectancy of country with an R^2 of 0.96',
    image: '/who_ml2.png?height=200&width=300',
    repo: 'https://www.kaggle.com/code/haydentibbals/who-ml-v2',
    skills: ['Python', 'Data Analysis', 'Machine Learning']
  },
]




export default function Projects() {
  return (
    <section id="projects" className="container flex flex-col items-center justify-center py-8 md:py-12 lg:py-12">
      <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl mb-12 text-center">Projects</h2>
      <div className="grid gap-4 md:grid-cols-1 max-w-[1400px] w-full mx-auto px-4 md:px-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg border border-border/40 bg-card p-8 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-md object-cover w-full h-[300px]"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-2"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

