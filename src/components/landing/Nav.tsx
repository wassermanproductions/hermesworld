import { Sigil, WordmarkHorizontal } from "./Sigil";

const links = [
  { label: "World", href: "#world" },
  { label: "Agents", href: "#agents" },
  { label: "Sigils", href: "#sigils" },
  { label: "Preview", href: "#preview" },
  { label: "Updates", href: "#updates" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(8,9,14,0.75)] border-b border-gold-soft">
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center gap-6">
        <a href="#top" className="flex items-center gap-3 group">
          <Sigil size={36} />
          <WordmarkHorizontal height={22} />
        </a>
        <nav className="hidden md:flex items-center gap-10 mx-auto text-parchment/85">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[18px] font-normal tracking-wide hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <a
            href="#signin"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-md border border-gold/40 text-parchment hover:border-gold/70 transition-colors font-display text-[16px]"
          >
            Sign In
          </a>
          <a
            href="https://hermes-world.ai/play/"
            className="inline-flex items-center px-6 py-2.5 rounded-md btn-gold font-display text-[16px]"
          >
            Play Now
          </a>
        </div>
      </div>
    </header>
  );
}
