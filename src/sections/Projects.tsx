import ThemedContentBox from '../components/ThemedContentBox.tsx'
import { projects as allProjectsData } from './data/projects.ts'
import { motion, useAnimationControls } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useState, useEffect, useRef, useMemo } from 'react'

interface Project {
  name: string
  description: string
  stack: string[]
  sourceCode?: string
  livePreview?: string
}

const allProjects: Project[] = allProjectsData as Project[]

const Projects = () => {
  // Memoize items array to prevent re-creation on every render
  const items = useMemo(
    () =>
      allProjects.map((project) => ({
        id: project.name, // Assuming project.name is unique, use a more robust ID if not
        content: (
          <>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold mb-2 text-cyan-400'>
                {project.name}
              </h3>
              <p className='text-xs sm:text-sm text-gray-300 mb-4 h-24 overflow-y-auto custom-scrollbar'>
                {project.description}
              </p>
              <div className='mb-4'>
                <h4 className='text-md font-semibold mb-2 text-gray-200'>
                  Tech Stack:
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {project.stack.map((tech: string, i: number) => (
                    <span
                      key={`${project.name}-${tech}-${i}`}
                      className='text-[0.7rem] sm:text-xs bg-cyan-700 text-gray-300 px-2 py-1 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className='mt-auto pt-4 border-t border-gray-700 flex justify-start space-x-4'>
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300'
                >
                  Source Code
                </a>
              )}
              {project.livePreview && (
                <a
                  href={project.livePreview}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300'
                >
                  Live Preview
                </a>
              )}
            </div>
          </>
        ),
      })),
    []
  ) // allProjects is static, so empty dependency array is fine

  const [isHovering, setIsHovering] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const animationControls = useAnimationControls()
  const itemContainerRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  const DURATION_MULTIPLIER = 5 // Adjust for speed: lower is faster
  const scrollDuration = useMemo(
    () => items.length * DURATION_MULTIPLIER,
    [items, DURATION_MULTIPLIER]
  )

  const scrollVariants: Variants = useMemo(
    () => ({
      initial: { y: '0%' },
      animate: {
        y: '-50%',
        transition: {
          ease: 'linear',
          duration: scrollDuration,
          repeat: Infinity,
          repeatType: 'loop' as const, // Correctly typed for Framer Motion
        },
      },
    }),
    [scrollDuration]
  )

  // Effect to measure content height
  useEffect(() => {
    if (itemContainerRef.current) {
      // scrollHeight gives the total height of the content, even if not visible
      const measuredHeight = itemContainerRef.current.scrollHeight
      if (measuredHeight > 0) {
        setContentHeight(measuredHeight)
      }
    }
  }, [items]) // Re-measure if items change

  // Effect to control animation based on hover, drag, and contentHeight
  useEffect(() => {
    if (contentHeight === 0) return // Don't act if height not measured

    if (isHovering || isDragging) {
      animationControls.stop() // Stop the animation
    } else {
      // Resume animation from current position with infinite loop
      const resumeAnimation = async () => {
        await animationControls.start({
          y: '-50%',
          transition: {
            ease: 'linear',
            duration: scrollDuration,
            repeat: Infinity,
            repeatType: 'loop' as const,
          },
        })
      }
      resumeAnimation()
    }
  }, [isHovering, isDragging, animationControls, scrollDuration, contentHeight])

  // Effect to start animation on mount (once contentHeight is available) and clean up
  useEffect(() => {
    if (contentHeight > 0 && !isHovering && !isDragging) {
      animationControls.start('animate')
    }
    return () => {
      animationControls.stop() // Stop animation on component unmount
    }
  }, [animationControls, contentHeight, scrollVariants, isHovering, isDragging])

  return (
    <div className='max-w-xl max-h-[78vh] mt-6 flex flex-col items-center p-1 md:p-8 text-white overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]'>
      <motion.div
        ref={itemContainerRef}
        className='flex flex-col w-full items-center gap-6'
        variants={scrollVariants}
        initial='initial'
        animate={animationControls}
        drag='y'
        dragConstraints={{
          // Allow dragging up by one full set of items (half the total measured scrollHeight)
          top: contentHeight > 0 ? -contentHeight / 2 : 0,
          bottom: 0,
        }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Render items twice for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <ThemedContentBox key={`${item.id}-${index}`}>
            {item.content}
          </ThemedContentBox>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
