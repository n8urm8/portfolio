import React from 'react';

interface ZoneProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Zone({ id, children, className = '' }: ZoneProps) {
  return (
    <section
      id={id}
      className={`relative flex-shrink-0 w-[100vw] h-[100vh] flex items-center justify-center ${className}`}
      tabIndex={-1}
    >
      {children}
    </section>
  );
}
