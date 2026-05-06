type Props = { className?: string; size?: number; withRings?: boolean };

export function Sigil({ className, size = 24, withRings = false }: Props) {
  const id = `sg-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6D98A" />
          <stop offset="50%" stopColor="#E8B85C" />
          <stop offset="100%" stopColor="#A6772E" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F6D98A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F6D98A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {withRings && (
        <>
          <circle cx="50" cy="50" r="48" fill={`url(#${id}-glow)`} />
          <circle cx="50" cy="50" r="46" stroke={`url(#${id}-grad)`} strokeWidth="0.4" opacity="0.6" />
          <circle cx="50" cy="50" r="42" stroke={`url(#${id}-grad)`} strokeWidth="0.3" opacity="0.4" />
          {/* tick marks */}
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 24;
            const x1 = 50 + Math.cos(a) * 44;
            const y1 = 50 + Math.sin(a) * 44;
            const x2 = 50 + Math.cos(a) * (i % 6 === 0 ? 40 : 42);
            const y2 = 50 + Math.sin(a) * (i % 6 === 0 ? 40 : 42);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#${id}-grad)`} strokeWidth="0.4" opacity="0.7" />;
          })}
        </>
      )}

      {/* Inner ring */}
      <circle cx="50" cy="50" r="34" stroke={`url(#${id}-grad)`} strokeWidth="0.8" opacity="0.7" />
      <circle cx="50" cy="50" r="30" stroke={`url(#${id}-grad)`} strokeWidth="0.4" opacity="0.4" />

      {/* Caduceus — staff */}
      <line x1="50" y1="20" x2="50" y2="82" stroke={`url(#${id}-grad)`} strokeWidth="1.6" strokeLinecap="round" />

      {/* Top orb */}
      <circle cx="50" cy="20" r="2.4" fill={`url(#${id}-grad)`} />

      {/* Wings */}
      <path
        d="M50 28 C 40 24, 30 25, 24 30 C 28 31, 33 31, 38 30 C 33 33, 28 35, 25 38 C 32 38, 40 36, 50 33 Z"
        fill={`url(#${id}-grad)`}
      />
      <path
        d="M50 28 C 60 24, 70 25, 76 30 C 72 31, 67 31, 62 30 C 67 33, 72 35, 75 38 C 68 38, 60 36, 50 33 Z"
        fill={`url(#${id}-grad)`}
      />

      {/* Snakes — sinuous double helix */}
      <path
        d="M50 36 C 40 42, 60 50, 50 56 C 40 62, 60 70, 50 78"
        stroke={`url(#${id}-grad)`}
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M50 36 C 60 42, 40 50, 50 56 C 60 62, 40 70, 50 78"
        stroke={`url(#${id}-grad)`}
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Snake heads */}
      <circle cx="42" cy="40" r="1.4" fill={`url(#${id}-grad)`} />
      <circle cx="58" cy="40" r="1.4" fill={`url(#${id}-grad)`} />
    </svg>
  );
}

export function RadialOrnament({ className, size = 200 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="ro-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6D98A" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#A6772E" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="98" stroke="url(#ro-g)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="80" stroke="url(#ro-g)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="60" stroke="url(#ro-g)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="40" stroke="url(#ro-g)" strokeWidth="0.5" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12;
        return (
          <line
            key={i}
            x1={100 + Math.cos(a) * 40}
            y1={100 + Math.sin(a) * 40}
            x2={100 + Math.cos(a) * 98}
            y2={100 + Math.sin(a) * 98}
            stroke="url(#ro-g)"
            strokeWidth="0.4"
          />
        );
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12;
        return (
          <circle
            key={i}
            cx={100 + Math.cos(a) * 80}
            cy={100 + Math.sin(a) * 80}
            r="1.6"
            fill="#F6D98A"
            opacity="0.8"
          />
        );
      })}
    </svg>
  );
}

/** Brand iconography — thin gold outlines */
export const BrandIcons = {
  Sigil: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 L14 6 L18 6 L15 9 L17 13 L12 11 L7 13 L9 9 L6 6 L10 6 Z" />
      <circle cx="12" cy="12" r="9" opacity="0.4" />
    </svg>
  ),
  Quest: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 C 8 3 6 6 6 9 C 6 13 12 21 12 21 C 12 21 18 13 18 9 C 18 6 16 3 12 3 Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  ),
  Compass: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9 L13 13 L9 15 L11 11 Z" />
    </svg>
  ),
  World: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" />
      <line x1="12" y1="3" x2="12" y2="21" opacity="0.4" />
      <line x1="3" y1="8" x2="21" y2="16" opacity="0.4" />
      <line x1="21" y1="8" x2="3" y2="16" opacity="0.4" />
    </svg>
  ),
  Scroll: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4 H17 C18 4 19 5 19 7 V17 C19 19 18 20 17 20 H7 C6 20 5 19 5 17 V4 Z" />
      <path d="M19 7 H21 V18 C21 19 20 20 19 20" />
      <line x1="8" y1="8" x2="15" y2="8" />
      <line x1="8" y1="11" x2="15" y2="11" />
      <line x1="8" y1="14" x2="13" y2="14" />
    </svg>
  ),
  Star: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 L14 10 L21 10 L15 14 L17 21 L12 17 L7 21 L9 14 L3 10 L10 10 Z" />
    </svg>
  ),
  Portal: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21 V9 C5 5 8 3 12 3 C16 3 19 5 19 9 V21" />
      <ellipse cx="12" cy="9" rx="7" ry="2" />
    </svg>
  ),
  Wing: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12 C 6 8 10 7 14 8 C 12 10 9 11 6 11 C 9 12 13 12 16 11 C 13 13 10 14 7 14 C 11 14 16 14 21 11" />
    </svg>
  ),
  Shield: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 L20 6 V12 C20 16 16 20 12 21 C8 20 4 16 4 12 V6 Z" />
      <path d="M12 8 V14" />
    </svg>
  ),
  Trophy: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4 H17 V10 C17 13 15 15 12 15 C9 15 7 13 7 10 Z" />
      <path d="M7 6 H4 V8 C4 10 5 11 7 11" />
      <path d="M17 6 H20 V8 C20 10 19 11 17 11" />
      <path d="M10 19 H14 V21 H10 Z" />
      <line x1="12" y1="15" x2="12" y2="19" />
    </svg>
  ),
  Radio: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <path d="M8 8 C 6 10 6 14 8 16" />
      <path d="M16 8 C 18 10 18 14 16 16" />
      <path d="M5 5 C 2 8 2 16 5 19" />
      <path d="M19 5 C 22 8 22 16 19 19" />
    </svg>
  ),
  User: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21 C 5 16 8 14 12 14 C 16 14 19 16 19 21" />
    </svg>
  ),
  Trend: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17 L9 11 L13 15 L21 7" />
      <path d="M15 7 H21 V13" />
    </svg>
  ),
  Bot: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="7" width="14" height="12" rx="2" />
      <line x1="12" y1="3" x2="12" y2="7" />
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  ),
};
