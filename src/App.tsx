import { useRef, useState, useEffect } from 'react'
import ParallaxBackground from './components/ParallaxBackground'
import Zone from './components/Zone'
import ThemedMenu from './components/ThemedMenu'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import './index.css'

const ZONES = [
  { id: 'about', content: <About /> },
  { id: 'skills', content: <Skills /> },
  { id: 'contact', content: <Contact /> },
]

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollX, setScrollX] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(containerRef.current?.scrollLeft || 0)
    }
    const node = containerRef.current
    node?.addEventListener('scroll', handleScroll)
    return () => node?.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (id: string) => {
    const section = document.getElementById(id)
    if (section && containerRef.current) {
      const left = section.offsetLeft
      containerRef.current.scrollTo({ left, behavior: 'smooth' })
    }
  }

  return (
    <div className='relative w-screen h-screen overflow-hidden font-press-start bg-black'>
      <ParallaxBackground scrollX={scrollX} />
      <ThemedMenu onNavigate={handleNavigate} />
      <div
        ref={containerRef}
        className='flex flex-row w-screen h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth z-10 relative'
        tabIndex={0}
        style={{ scrollBehavior: 'smooth' }}
      >
        {ZONES.map((zone) => (
          <Zone key={zone.id} id={zone.id} className='snap-center'>
            {zone.content}
          </Zone>
        ))}
      </div>
    </div>
  )
}

export default App
