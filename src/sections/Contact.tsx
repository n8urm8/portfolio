import ThemedContentBox from '../components/ThemedContentBox'

export default function Contact() {
  return (
    <ThemedContentBox className='text-center text-white max-w-xl mx-auto'>
      {/* <div className="text-center text-white max-w-xl mx-auto"> */}
      <h1 className='text-3xl md:text-4xl font-press-start mb-8 text-outline-black'>
        Contact
      </h1>
      <p className='text-lg md:text-xl mb-4 drop-shadow-glow text-outline-black'>
        Let's connect! You can reach me via email or find me on these platforms:
      </p>
      <div className='space-y-3 md:space-y-4 flex flex-col items-center text-left'>
        <a
          className='text-yellow-300 hover:text-yellow-400 text-sm md:text-lg flex items-center text-outline-black'
          href='mailto:natefarcasin@gmail.com'
        >
          <span className='text-md mr-2'>📧</span> natefarcasin@gmail.com
        </a>
        <a
          className='text-yellow-300 hover:text-yellow-400 text-base md:text-lg flex items-center text-outline-black'
          href='https://linkedin.com/in/natefarcasin'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&labelColor=black&style=for-the-badge'
            alt='LinkedIn'
            className='h-6 mr-2'
          />{' '}
          LinkedIn Profile
        </a>
        <a
          className='text-yellow-300 hover:text-yellow-400 text-base md:text-lg flex items-center text-outline-black'
          href='https://github.com/n8urm8'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://img.shields.io/badge/GitHub-grey?logo=github&labelColor=black&style=for-the-badge'
            alt='GitHub'
            className='h-6 mr-2'
          />{' '}
          GitHub Profile
        </a>
      </div>
    </ThemedContentBox>
  )
}
