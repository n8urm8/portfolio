import { motion } from 'framer-motion'
// If you want to use react-scroll, install it and import { Link as ScrollLink } from 'react-scroll';

const menuItems = [
  { id: 'about', label: 'About', icon: '🦉' },
  { id: 'projects', label: 'Work', icon: '💻' },
  { id: 'skills', label: 'Skills', icon: '💡' },
  { id: 'contact', label: 'Contact', icon: '📫' },
]

export default function ThemedMenu({
  onNavigate,
}: {
  onNavigate: (id: string) => void
}) {
  return (
    <nav
      className='fixed top-8 left-1/2 bg-slate-800/70 z-50 backdrop-blur-sm -translate-x-1/2 flex 
      gap-8 bg-[#181838cc] px-6 py-2 rounded-md border-2 border-cyan-100 
        shadow-[0px_0px_25px_5px_rgba(46,231,255,.6)] font-press-start'
    >
      {menuItems.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
          className='flex flex-col items-center cursor-pointer select-none'
          onClick={() => onNavigate(item.id)}
        >
          <span className='text-cyan-300 text-2xl drop-shadow-glow'>
            {item.icon}
          </span>
          <span className='block text-xs mt-1 text-yellow-200'>
            {item.label}
          </span>
        </motion.div>
      ))}
    </nav>
  )
}
