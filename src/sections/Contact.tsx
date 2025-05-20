import React from 'react';

export default function Contact() {
  return (
    <div className="text-center text-cyan-100 max-w-xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-press-start mb-8 drop-shadow-glow">Contact</h1>
      <p className="text-lg md:text-2xl mb-6 drop-shadow-glow">
        Want to connect? Email me at <a className="text-yellow-300 underline hover:text-yellow-400" href="mailto:youremail@example.com">youremail@example.com</a>
      </p>
    </div>
  );
}
