import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react' // Combined React imports

// Pale images
import sky_pale from '../assets/city/parallax/pale/sky_pale.png'
import houses3_pale from '../assets/city/parallax/pale/houses3_pale.png'
import houses2_pale from '../assets/city/parallax/pale/houses2_pale.png'
import houses1_pale from '../assets/city/parallax/pale/houses1_pale.png'
import road_pale from '../assets/city/parallax/pale/road_pale.png'
import crosswalk_pale from '../assets/city/parallax/pale/crosswalk_pale.png'

// Bright images
import sky_bright from '../assets/city/parallax/bright/sky.png'
import houses3_bright from '../assets/city/parallax/bright/houses3.png'
import houses2_bright from '../assets/city/parallax/bright/houses2.png'
import houses1_bright from '../assets/city/parallax/bright/houses1.png'
import road_bright from '../assets/city/parallax/bright/road.png'
import crosswalk_bright from '../assets/city/parallax/bright/crosswalk.png'

// Updated layer data structure with weights
const layerData = [
  {
    name: 'sky',
    paleSrc: sky_pale,
    brightSrc: sky_bright,
    className: 'z-0',
    speed: 0.08,
    weight: 2,
  },
  {
    name: 'houses3',
    paleSrc: houses3_pale,
    brightSrc: houses3_bright,
    className: 'z-10',
    speed: 0.16,
    weight: 4,
  },
  {
    name: 'houses2',
    paleSrc: houses2_pale,
    brightSrc: houses2_bright,
    className: 'z-20',
    speed: 0.22,
    weight: 4,
  },
  {
    name: 'houses1',
    paleSrc: houses1_pale,
    brightSrc: houses1_bright,
    className: 'z-30',
    speed: 0.28,
    weight: 4,
  },
  {
    name: 'road',
    paleSrc: road_pale,
    brightSrc: road_bright,
    className: 'z-40',
    speed: 0.34,
    weight: 1,
  },
  {
    name: 'crosswalk',
    paleSrc: crosswalk_pale,
    brightSrc: crosswalk_bright,
    className: 'z-50',
    speed: 0.42,
    weight: 2,
  },
]

export default function ParallaxBackground({ scrollX }: { scrollX: number }) {
  const [vw, setVw] = useState(window.innerWidth)
  const [flickeringLayerIndex, setFlickeringLayerIndex] = useState<
    number | null
  >(null) // State for flickering layer

  useEffect(() => {
    const handleResize = () => setVw(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Effect for managing complex random flickers
  useEffect(() => {
    let sequenceSchedulerId: number
    let quickFlashOffId: number
    let sustainedBrightOnId: number
    let sustainedBrightOffId: number

    const QUICK_FLASH_DURATION = 100 // ms
    const INTER_FLASH_DELAY = 100 // ms
    const SUSTAINED_BRIGHT_DURATION = 4000 // ms // Increased for testing
    const MIN_INTERVAL_BETWEEN_SEQUENCES = 2000 // ms
    const RANDOM_INTERVAL_RANGE = 3000 // ms

    const executeFlickerSequence = () => {
      const chooseWeightedRandomLayerIndex = () => {
        const weightedIndexArray: number[] = [];
        layerData.forEach((layer, index) => {
          for (let i = 0; i < layer.weight; i++) {
            weightedIndexArray.push(index);
          }
        });

        if (weightedIndexArray.length === 0) {
          // Fallback if all weights are 0 (or no layers), though layerData has layers with weights
          return Math.floor(Math.random() * layerData.length);
        }

        const randomIndex = Math.floor(Math.random() * weightedIndexArray.length);
        return weightedIndexArray[randomIndex];
      };

      const layerIndexToFlicker = chooseWeightedRandomLayerIndex();

      // 1. Quick ON
      setFlickeringLayerIndex(layerIndexToFlicker)

      quickFlashOffId = setTimeout(() => {
        // 2. Quick OFF
        setFlickeringLayerIndex(null)

        sustainedBrightOnId = setTimeout(() => {
          // 3. Sustained ON
          setFlickeringLayerIndex(layerIndexToFlicker)

          sustainedBrightOffId = setTimeout(() => {
            // 4. Sustained OFF
            setFlickeringLayerIndex(null)

            // Schedule the next full flicker sequence
            scheduleNextFullSequence()
          }, SUSTAINED_BRIGHT_DURATION)
        }, INTER_FLASH_DELAY)
      }, QUICK_FLASH_DURATION)
    }

    const scheduleNextFullSequence = () => {
      clearTimeout(sequenceSchedulerId) // Clear previous scheduler if any
      const randomDelay =
        MIN_INTERVAL_BETWEEN_SEQUENCES + Math.random() * RANDOM_INTERVAL_RANGE
      sequenceSchedulerId = setTimeout(executeFlickerSequence, randomDelay)
    }

    scheduleNextFullSequence() // Start the cycle

    return () => {
      // Cleanup all timeouts
      clearTimeout(sequenceSchedulerId)
      clearTimeout(quickFlashOffId)
      clearTimeout(sustainedBrightOnId)
      clearTimeout(sustainedBrightOffId)
    }
  }, [])

  return (
    <div className='fixed inset-0 w-[300vw] md:w-screen h-screen overflow-hidden pointer-events-none'>
      {layerData.map((layerInfo, index) => {
        const offset = (scrollX * layerInfo.speed) % vw
        const currentSrc =
          index === flickeringLayerIndex
            ? layerInfo.brightSrc
            : layerInfo.paleSrc
        const firstImageWidthClass = vw < 768 ? 'w-[300vw]' : 'w-screen'
        const currentOffset = vw < 768 ? scrollX * layerInfo.speed : offset

        return (
          <React.Fragment key={layerInfo.name}>
            <motion.img
              src={currentSrc}
              className={`absolute h-screen object-cover ${layerInfo.className} ${firstImageWidthClass}`}
              style={{
                left: 0,
                transform: `translateX(-${currentOffset}px)`,
              }}
              alt=''
            />
            {vw >= 768 && (
              <motion.img
                src={currentSrc}
                className={`absolute h-screen object-cover ${layerInfo.className} w-screen`}
                style={{
                  left: `${vw}px`,
                  transform: `translateX(-${currentOffset}px)`,
                }}
                alt=''
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
