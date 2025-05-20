import { useRef, useState, useEffect } from 'react'
import ParallaxBackground from './components/ParallaxBackground'
import Zone from './components/Zone'
import ThemedMenu from './components/ThemedMenu';
import NavigationArrow from './components/NavigationArrow';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentZoneIndex, setCurrentZoneIndex] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollX = containerRef.current?.scrollLeft || 0;
      setScrollX(currentScrollX);

      // Update currentZoneIndex based on scroll position
      if (containerRef.current) {
        const { scrollWidth } = containerRef.current;
        const zoneWidth = scrollWidth / ZONES.length;
        const newIndex = Math.round(currentScrollX / zoneWidth);
        if (newIndex !== currentZoneIndex && newIndex >= 0 && newIndex < ZONES.length) {
          setCurrentZoneIndex(newIndex);
        }
      }
    };
    const node = containerRef.current;
    node?.addEventListener('scroll', handleScroll);
    return () => node?.removeEventListener('scroll', handleScroll);
  }, [currentZoneIndex])

  const handleNavigate = (id: string) => {
    const zoneIndex = ZONES.findIndex(zone => zone.id === id);
    if (zoneIndex !== -1) {
      setCurrentZoneIndex(zoneIndex);
    }

    const section = document.getElementById(id)
    if (section && containerRef.current) {
      const left = section.offsetLeft
      containerRef.current.scrollTo({ left, behavior: 'smooth' })
    }
  };

  const navigateToPreviousZone = () => {
    if (currentZoneIndex > 0) {
      const prevZoneId = ZONES[currentZoneIndex - 1].id;
      handleNavigate(prevZoneId);
    }
  };

  const navigateToNextZone = () => {
    if (currentZoneIndex < ZONES.length - 1) {
      const nextZoneId = ZONES[currentZoneIndex + 1].id;
      handleNavigate(nextZoneId);
    }
  };

  return (
    <div className='relative w-screen h-screen overflow-hidden font-press-start bg-black'>
      <ParallaxBackground scrollX={scrollX} />
      <ThemedMenu onNavigate={handleNavigate} />
      <NavigationArrow direction="left" onClick={navigateToPreviousZone} disabled={currentZoneIndex === 0} />
      <NavigationArrow direction="right" onClick={navigateToNextZone} disabled={currentZoneIndex === ZONES.length - 1} />
      <div
        ref={containerRef}
        className='flex flex-row w-screen h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth z-10 relative'
        tabIndex={0}
        style={{ scrollBehavior: 'smooth' }} // scroll-smooth class also applied
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
