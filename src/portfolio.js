const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://natefarcasin.xyz',
  title: 'NF.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nate Farcasin',
  role: 'Blockchain Developer',
  description:
    'I fell in love with crypto, so I did what any sensible person does - I quit my job and dove right in. Solidity specialist with full stack experience',
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
    stack: ['Solidity', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/shibanova',
    livePreview: '',
  },
  {
    name: 'Legend of Novaria',
    description:
      'A multiplayer, space-themed, strategy game built on the blockchain. Features multiplayer combat, an infinite exploration, and play to earn mechanics',
    stack: ['Solidity', 'NodeJS', 'React'],
    sourceCode: 'https://github.com/shibanova/novaria',
    livePreview: 'https://novadex.finance/legend-of-novaria',
  },
  {
    name: 'Kingdom',
    description:
      'A new project coming soon. Designed around the idea of bringing the ole Crown of the Gods (Lords of Ultima) to the blockchain',
    stack: ['Solidity'],
    sourceCode: 'https://github.com/n8urm8/ContractPlayGround',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Solidity',
  'BlockChain',
  'Game Design',
  'Tokenomics',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
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
