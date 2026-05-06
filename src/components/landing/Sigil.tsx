type Props = { className?: string; size?: number };

/** Caduceus sigil — gold medallion with rings, wings, staff, twin serpents */
export function Sigil({ className, size = 64 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="sg-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8DE9A" />
          <stop offset="45%" stopColor="#EAB85A" />
          <stop offset="100%" stopColor="#9A6B26" />
        </linearGradient>
        <radialGradient id="sg-glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#F8DE9A" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#F8DE9A" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#F8DE9A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft outer glow */}
      <circle cx="100" cy="100" r="95" fill="url(#sg-glow)" />

      {/* Outer thin ring */}
      <circle cx="100" cy="100" r="92" stroke="url(#sg-gold)" strokeWidth="0.8" opacity="0.85" />
      {/* Decorative dotted track */}
      {Array.from({ length: 60 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 60;
        return (
          <circle
            key={i}
            cx={100 + Math.cos(a) * 86}
            cy={100 + Math.sin(a) * 86}
            r={i % 5 === 0 ? 1.1 : 0.55}
            fill="url(#sg-gold)"
            opacity={i % 5 === 0 ? 0.95 : 0.55}
          />
        );
      })}
      {/* Inner ring */}
      <circle cx="100" cy="100" r="74" stroke="url(#sg-gold)" strokeWidth="1.1" opacity="0.95" />
      {/* Cardinal tick marks */}
      {[0, 90, 180, 270].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={100 + Math.cos(a) * 74}
            y1={100 + Math.sin(a) * 74}
            x2={100 + Math.cos(a) * 80}
            y2={100 + Math.sin(a) * 80}
            stroke="url(#sg-gold)"
            strokeWidth="1.2"
          />
        );
      })}

      {/* === Caduceus === */}
      {/* Staff */}
      <line
        x1="100" y1="46" x2="100" y2="160"
        stroke="url(#sg-gold)" strokeWidth="2.4" strokeLinecap="round"
      />
      {/* Top finial */}
      <circle cx="100" cy="44" r="3.4" fill="url(#sg-gold)" />
      <circle cx="100" cy="44" r="6" stroke="url(#sg-gold)" strokeWidth="1" fill="none" opacity="0.7" />

      {/* Wings — layered feathers */}
      {/* Left wing */}
      <g fill="url(#sg-gold)">
        <path d="M100 60 C 86 56 70 56 58 64 C 70 64 80 62 90 62 Z" opacity="0.95" />
        <path d="M100 64 C 84 62 66 64 52 74 C 66 72 78 70 92 70 Z" opacity="0.9" />
        <path d="M100 68 C 82 70 64 74 50 86 C 66 82 80 78 94 76 Z" opacity="0.85" />
      </g>
      {/* Right wing */}
      <g fill="url(#sg-gold)">
        <path d="M100 60 C 114 56 130 56 142 64 C 130 64 120 62 110 62 Z" opacity="0.95" />
        <path d="M100 64 C 116 62 134 64 148 74 C 134 72 122 70 108 70 Z" opacity="0.9" />
        <path d="M100 68 C 118 70 136 74 150 86 C 134 82 120 78 106 76 Z" opacity="0.85" />
      </g>

      {/* Twin serpents — sinuous double helix */}
      <path
        d="M100 78
           C 84 86 84 96 100 104
           C 116 112 116 122 100 130
           C 84 138 84 148 100 156"
        stroke="url(#sg-gold)" strokeWidth="2.2" fill="none" strokeLinecap="round"
      />
      <path
        d="M100 78
           C 116 86 116 96 100 104
           C 84 112 84 122 100 130
           C 116 138 116 148 100 156"
        stroke="url(#sg-gold)" strokeWidth="2.2" fill="none" strokeLinecap="round"
      />

      {/* Serpent heads */}
      <ellipse cx="86" cy="80" rx="3" ry="2" fill="url(#sg-gold)" transform="rotate(-25 86 80)" />
      <ellipse cx="114" cy="80" rx="3" ry="2" fill="url(#sg-gold)" transform="rotate(25 114 80)" />
    </svg>
  );
}

/** Horizontal wordmark — used in nav */
export function WordmarkHorizontal({ className, height = 28 }: { className?: string; height?: number }) {
  // Aspect ~ 6.2 : 1
  const width = height * 6.2;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 620 100"
      className={className}
      aria-label="HermesWorld"
    >
      <defs>
        <linearGradient id="wm-gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8DE9A" />
          <stop offset="100%" stopColor="#C9963F" />
        </linearGradient>
      </defs>
      <text
        x="0" y="72"
        fill="url(#wm-gold)"
        fontFamily='"Cormorant Garamond", "Instrument Serif", serif'
        fontWeight="500"
        fontSize="74"
        letterSpacing="2"
      >
        HERMESWORLD
      </text>
      {/* Underline diamond ornament */}
      <g transform="translate(310 90)" fill="url(#wm-gold)">
        <line x1="-90" y1="0" x2="-10" y2="0" stroke="url(#wm-gold)" strokeWidth="1" />
        <polygon points="0,-4 6,0 0,4 -6,0" />
        <line x1="10" y1="0" x2="90" y2="0" stroke="url(#wm-gold)" strokeWidth="1" />
      </g>
    </svg>
  );
}

/** Stacked logo — sigil above HERMES / WORLD */
export function LogoStacked({ className, width = 140 }: { className?: string; width?: number }) {
  const height = width * 1.4;
  return (
    <div className={className} style={{ width, height }}>
      <div className="flex flex-col items-center gap-2">
        <Sigil size={width * 0.55} />
        <div className="text-center leading-[0.95]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
          <div className="text-gold tracking-[0.18em] font-medium" style={{ fontSize: width * 0.16 }}>HERMES</div>
          <div className="text-gold tracking-[0.18em] font-medium" style={{ fontSize: width * 0.16 }}>WORLD</div>
        </div>
      </div>
    </div>
  );
}

/** Icon-only sigil inside a circular badge — for app icon / favicon-style use */
export function SigilBadge({ className, size = 96 }: { className?: string; size?: number }) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: "9999px",
        background: "radial-gradient(circle at 30% 25%, #1B2433 0%, #0A0D12 75%)",
        border: "1px solid rgba(241,196,109,0.35)",
        boxShadow: "inset 0 1px 0 rgba(246,217,138,0.2), 0 12px 30px -10px rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Sigil size={size * 0.78} />
    </div>
  );
}

/** Decorative radial ornament */
export function RadialOrnament({ className, size = 200 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="ro-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6D98A" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#A6772E" stopOpacity="0.15" />
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

/** Brand iconography — thin gold outline set */
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
