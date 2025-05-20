import { motion } from 'framer-motion'
import sky from '../assets/city/parallax/pale/sky_pale.png'
import houses3 from '../assets/city/parallax/pale/houses3_pale.png'
import houses2 from '../assets/city/parallax/pale/houses2_pale.png'
import houses1 from '../assets/city/parallax/pale/houses1_pale.png'
import road from '../assets/city/parallax/pale/road_pale.png'
import crosswalk from '../assets/city/parallax/pale/crosswalk_pale.png'
import { useState, useEffect } from 'react'
import React from 'react'

const layers = [
  { src: sky, className: 'z-0', speed: 0.08 },
  { src: houses3, className: 'z-10', speed: 0.16 },
  { src: houses2, className: 'z-20', speed: 0.22 },
  { src: houses1, className: 'z-30', speed: 0.28 },
  { src: road, className: 'z-40', speed: 0.34 },
  { src: crosswalk, className: 'z-50', speed: 0.42 },
]

export default function ParallaxBackground({ scrollX }: { scrollX: number }) {
  const [vw, setVw] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setVw(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='fixed inset-0 w-[300vw] md:w-screen h-screen overflow-hidden pointer-events-none'>
      {layers.map((layer) => {
        // Calculate seamless offset
        const offset = (scrollX * layer.speed) % vw
        return (
          <React.Fragment key={layer.src}>
            <motion.img
              key={layer.src + '-1'}
              src={layer.src}
              className={`absolute w-[300vw] md:w-screen h-screen object-cover ${layer.className}`}
              style={{
                left: 0,
                transform: `translateX(-${offset}px)`,
              }}
              aria-hidden
              draggable={false}
              alt='parallax layer'
            />
            {/* Only render the second image for tiling on screens wider than 768px (md breakpoint) */}
            {vw >= 768 && (
              <motion.img
                key={layer.src + '-2'}
                src={layer.src}
                className={`absolute w-screen h-screen object-cover ${layer.className}`}
                style={{
                  left: `${vw}px`,
                  transform: `translateX(-${offset}px)`,
                }}
                aria-hidden
                draggable={false}
                alt='parallax layer'
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
