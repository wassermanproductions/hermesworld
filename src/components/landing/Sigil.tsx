type Props = { className?: string; size?: number };

export function Sigil({ className, size = 24 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="sigil-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.92 0.13 85)" />
          <stop offset="100%" stopColor="oklch(0.65 0.13 70)" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="28" stroke="url(#sigil-glow)" strokeWidth="1.2" opacity="0.6" />
      <circle cx="32" cy="32" r="22" stroke="url(#sigil-glow)" strokeWidth="0.8" opacity="0.4" />
      {/* Caduceus staff */}
      <line x1="32" y1="10" x2="32" y2="54" stroke="url(#sigil-glow)" strokeWidth="1.5" />
      {/* Wings */}
      <path
        d="M32 18 C 22 14, 16 16, 14 22 C 20 22, 26 20, 32 22 Z"
        fill="url(#sigil-glow)"
        opacity="0.85"
      />
      <path
        d="M32 18 C 42 14, 48 16, 50 22 C 44 22, 38 20, 32 22 Z"
        fill="url(#sigil-glow)"
        opacity="0.85"
      />
      {/* Snakes */}
      <path
        d="M32 26 C 26 30, 38 34, 32 38 C 26 42, 38 46, 32 50"
        stroke="url(#sigil-glow)"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M32 26 C 38 30, 26 34, 32 38 C 38 42, 26 46, 32 50"
        stroke="url(#sigil-glow)"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="32" cy="12" r="2" fill="url(#sigil-glow)" />
    </svg>
  );
}
