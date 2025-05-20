interface NavigationArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}

export default function NavigationArrow({ direction, onClick, disabled }: NavigationArrowProps) {
  const arrowChar = direction === 'left' ? '◀' : '▶';
  const positionClasses = direction === 'left' ? 'left-4 md:left-8' : 'right-4 md:right-8';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        fixed bottom-4 md:bottom-8 z-20
        font-press-start text-3xl md:text-4xl 
        ${positionClasses}
        ${disabled ? 'text-gray-600 opacity-50 cursor-not-allowed' : 'text-fuchsia-500 hover:text-fuchsia-400 active:text-fuchsia-600 hover:scale-110 transition-transform'}
        text-outline-black
        p-2
      `}
      aria-label={direction === 'left' ? 'Previous Section' : 'Next Section'}
    >
      {arrowChar}
    </button>
  );
}
