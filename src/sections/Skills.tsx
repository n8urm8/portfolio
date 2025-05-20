const skills = [
  'JavaScript',
  'TypeScript',
  'Solidity',
  'ReactJS',
  'NextJS',
  'Vite',
  'Redux',
  'Node.js',
  'Express',
  'SQL',
  'PostgreSQL',
  'SQLite',
  'MongoDB',
  'Firebase',
  'Git',
  'Vercel',
  'Netlify',
  'HTML5',
  'CSS3',
  'React Native',
  'Azure',
  'Cloud',
]

import ThemedContentBox from '../components/ThemedContentBox'

export default function Skills() {
  return (
    <ThemedContentBox className='text-center text-white max-w-xl mx-auto'>
      {/* <div className='text-center text-white max-w-xl mx-auto'> */}
      <h1 className='text-3xl md:text-4xl font-press-start mb-8 text-outline-black'>
        Skills
      </h1>
      <div className='max-h-[50vh] overflow-y-auto px-2'>
        <ul className='flex flex-wrap gap-4 justify-center pb-4'>
          {' '}
          {/* Added pb-4 for spacing at the bottom of scroll */}
          {skills.map((skill) => (
            <li
              key={skill}
              className='bg-[#222a3a] border-2 border-cyan-400 rounded-lg px-4 py-2 text-lg font-press-start drop-shadow-glow text-outline-black'
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </ThemedContentBox>
  )
}
