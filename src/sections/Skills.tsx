import React from 'react';

const skills = [
  'React',
  'TypeScript',
  'Framer Motion',
  'Tailwind CSS',
  'CSS Art',
  'Web Animation',
  'Game UI',
];

export default function Skills() {
  return (
    <div className="text-center text-cyan-100 max-w-xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-press-start mb-8 drop-shadow-glow">Skills</h1>
      <ul className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <li key={skill} className="bg-[#222a3a] border-2 border-cyan-400 rounded-lg px-4 py-2 text-lg font-press-start drop-shadow-glow">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
