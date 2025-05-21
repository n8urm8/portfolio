interface ThemedContentBoxProps {
  children: React.ReactNode
  className?: string
}

export default function ThemedContentBox({
  children,
  className = '',
}: ThemedContentBoxProps) {
  return (
    <div
      className={`
        bg-slate-800/70 
        border-2 border-fuchsia-200 
        rounded-lg 
        p-6 md:p-8 
        shadow-[0_0_25px_5px_rgba(217,70,239,0.6),inset_0_0_10px_rgba(217,70,239,0.3)]
        backdrop-blur-sm
        ${className}
      `}
    >
      {children}
    </div>
  )
}
