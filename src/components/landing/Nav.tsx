import { Sigil, WordmarkHorizontal } from "./Sigil";
import { Play } from "lucide-react";

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
          <Sigil size={32} />
          <WordmarkHorizontal height={20} />
          <span className="ml-2 text-[9px] font-medium uppercase tracking-[0.25em] border border-gold/50 text-gold rounded-full px-2.5 py-1">
            Preview Build
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 mx-auto text-[13px] tracking-wide text-parchment/75">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors uppercase text-[11px] tracking-[0.2em]">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <a
            href="#preview"
            className="hidden sm:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] px-4 py-2.5 rounded-md btn-ghost-gold transition-colors"
          >
            <Play className="w-3 h-3 fill-current" /> Watch Preview
          </a>
          <a
            href="https://hermes-world.ai/play/"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-medium px-4 py-2.5 rounded-md btn-gold"
          >
            Enter HermesWorld <span aria-hidden>›</span>
          </a>
        </div>
      </div>
    </header>
  );
}
