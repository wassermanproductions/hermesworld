import { Play } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-obsidian/90 backdrop-blur-xl border-b border-gold/15">
      <div className="max-w-[1400px] mx-auto px-8 h-[72px] flex items-center">
        <a href="#top" className="flex items-center gap-3">
          <Sigil size={46} />
          <WordmarkHorizontal height={28} />
        </a>

        <nav className="hidden md:flex items-center gap-9 ml-16 text-[15px] font-body font-medium text-parchment/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5 flex-none">
          <a
            href="https://hermes-world.ai/play/"
            className="hidden lg:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-body font-semibold px-4 py-2 rounded-md border border-gold bg-gold/10 text-gold hover:bg-gold/20 transition-colors whitespace-nowrap"
          >
            <Diamond /> Enter the World <Diamond />
          </a>
          <a
            href="#preview"
            className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body font-semibold px-4 py-2 rounded-md bg-parchment/5 border border-parchment/30 text-parchment hover:bg-parchment/10 transition-colors whitespace-nowrap"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Watch Preview
          </a>
        </div>
      </div>
    </header>
  );
}

function Diamond() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" className="text-gold/60" fill="currentColor">
      <polygon points="4,0 8,4 4,8 0,4" />
    </svg>
  );
}
