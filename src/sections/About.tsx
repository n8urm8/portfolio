import ThemedContentBox from '../components/ThemedContentBox'

export default function About() {
  return (
    <ThemedContentBox className='text-center text-white max-w-xl mx-auto'>
      {/* The div below is now redundant as ThemedContentBox handles centering and max-width if passed via className */}
      {/* <div className="text-center text-white max-w-xl mx-auto"> */}
      <h1 className='text-3xl md:text-4xl font-press-start mb-8 text-outline-black'>
        About Me
      </h1>
      <div className='max-h-[50vh] overflow-y-auto px-2'>
        <p className='text-base md:text-lg leading-relaxed drop-shadow-glow text-outline-black'>
          Hi, I'm Nathan Farcasin, a Software Engineer deeply passionate about
          crafting exceptional user experiences through innovative frontend
          development. I specialize in building high-performance web
          applications that are both visually engaging and highly responsive.
          <br />
          My journey has involved spearheading frontend initiatives for
          demanding, high-traffic data platforms, where I've focused on
          dramatically optimizing rendering speeds and enhancing user
          interaction. I've also enthusiastically explored the exciting
          frontiers of Web3, contributing to the development of decentralized
          applications and robust NFT smart contract infrastructures.
          <br />
          I'm driven by the challenge of transforming complex problems into
          elegant, user-centric frontend solutions and thrive on delivering
          impactful digital experiences.
        </p>
      </div>
    </ThemedContentBox>
  )
}
