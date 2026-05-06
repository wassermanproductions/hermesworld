import { Sigil } from "./Sigil";
import { Play, ArrowRight } from "lucide-react";

const links = [
  { label: "World", href: "#world" },
  { label: "Agents", href: "#agents" },
  { label: "Sigils", href: "#sigils" },
  { label: "Preview", href: "#preview" },
  { label: "Updates", href: "#updates" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-obsidian/70 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-6">
        <a href="#top" className="flex items-center gap-2">
          <Sigil size={26} />
          <span className="font-display text-lg tracking-wide">HermesWorld</span>
          <span className="ml-2 text-[10px] font-medium uppercase tracking-widest border border-gold/40 text-gold rounded-full px-2 py-0.5">
            Preview Build
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 mx-auto text-sm text-foreground/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <a
            href="#preview"
            className="hidden sm:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-border hover:border-gold/50 transition-colors"
          >
            <Play className="w-3.5 h-3.5" /> Watch Preview
          </a>
          <a
            href="https://hermes-world.ai/play/"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-gradient-gold text-primary-foreground shadow-gold hover:opacity-95 transition-opacity"
          >
            Enter HermesWorld <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
