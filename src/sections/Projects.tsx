import { projects as allProjectsData } from './data/projects.ts'
import InfiniteScroll from '../components/InfiniteScroll.tsx'

interface Project {
  name: string
  description: string
  stack: string[]
  sourceCode?: string
  livePreview?: string
}

const allProjects: Project[] = allProjectsData as Project[]

const Projects = () => {
  const items = allProjects.map((project) => ({
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
                  key={`${tech}-${i}`}
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
  }))

  return (
    <div className='w-full max-h-[80vh] flex flex-col items-center p-1 md:p-8 text-white overflow-y-auto custom-scrollbar [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]'>
      <InfiniteScroll
        items={items}
        autoplay={true}
        autoplaySpeed={0.5}
        autoplayDirection='up'
        pauseOnHover={true}
      />
    </div>
  )
}

export default Projects
