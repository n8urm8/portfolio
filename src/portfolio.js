const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://natefarcasin.netlify.app',
  title: 'NF.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nate Farcasin',
  role: 'Software Engineer',
  description:
    'Frontend-leaning web devopler specialized in JavaScript frameworks.',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/nate-farcasin-282a4771/',
    github: 'https://github.com/n8urm8',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ShibaNova',
    description:
      'An automated market maker, yield aggregator, and launchpad project. Features a multi-token governance system and daily profit-sharing.',
    stack: ['Solidity', 'TypeScript', 'ReactJs', 'Styled Components'],
    sourceCode: 'https://github.com/shibanova',
    livePreview: '',
  },
  {
    name: 'Legend of Novaria',
    description:
      'A multiplayer, space-themed, strategy game built on the blockchain. Features multiplayer combat, an infinite exploration, and play to earn mechanics',
    stack: ['Solidity', 'NodeJS', 'ReactJs', 'JavaScript'],
    sourceCode: 'https://github.com/shibanova/novaria',
    livePreview: 'https://novadex.finance/legend-of-novaria',
  },
  {
    name: 'Fetch',
    description:
      'A mock dog adoption website. Find your favorites and get matched!',
    stack: ['Vite', 'TypeScript', 'React', 'REST', 'MaterialUI', 'Styled Components'],
    sourceCode: 'https://github.com/n8urm8/fetch',
    livePreview: 'https://fetch-rho-cyan.vercel.app/',
  },
  {
    name: 'TF-Stats',
    description:
      'A data analytics website. Pulls stats from mobile game and displays graphically. Allows users to get details on their account without accessing the game.',
    stack: ['NextJS', 'TypeScript', 'React', 'REST', 'TailwindCSS', 'Data Analytics'],
    sourceCode: '',
    livePreview: 'https://tf-stats.vercel.app/',
  },
  {
    name: 'Reignover',
    description:
      'Incremental, space-themed, tower-defense web game built with Phaser',
    stack: ['Phaser', 'TypeScript', 'NextJs', 'SQL', 'Prisma', 'TailwindCSS'],
    sourceCode: 'https://github.com/n8urm8/galactic-hero',
    livePreview: '',
  },
  {
    name: 'Galactic Hero',
    description:
      'An idle city development game integrated with blockchain assets.',
    stack: ['Solidity', 'TypeScript', 'NextJs', 'SQL', 'Prisma', 'TailwindCSS'],
    sourceCode: 'https://github.com/ReignoverProject/reignover',
    livePreview: 'https://galactic-hero.vercel.app/',
  },
  {
    name: 'Metric-Imperial Converter',
    description:
      'REST api that Converts between metric and imperial units. Created using Node, Express, HTML.',
    stack: ['JavaScript', 'NodeJS', 'REST', 'HTML', 'Express'],
    sourceCode: 'https://github.com/n8urm8/metric-imperial-converter',
    livePreview: 'https://sky-free-plutonium.glitch.me/',
  },
]

const skills = [
  'Solidity',
  'BlockChain',
  'Game Design',
  'Tokenomics',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'NextJS',
  'Vite',
  'Redux',
  'SQL',
  'NodeJS',
  'Git',
  'Product Development',
  'Project Management'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'natefarcasin@gmail.com',
}

export { header, about, projects, skills, contact }
