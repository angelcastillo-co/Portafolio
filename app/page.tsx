import { TopNav } from '@/components/system/top-nav'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Certifications } from '@/components/sections/certifications'
import { Blog } from '@/components/sections/blog'
import { AIAssistant } from '@/components/sections/ai-assistant'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <TopNav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Blog />
        <AIAssistant />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
