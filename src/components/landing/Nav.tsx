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
    <header className="sticky top-0 z-50 bg-[#080910]/90 backdrop-blur-xl border-b border-[#F1C56D]/15">
      <div className="max-w-[1240px] mx-auto px-6 h-[60px] flex items-center">
        <a href="#top" className="flex items-center gap-2.5">
          <Sigil size={30} />
          <WordmarkHorizontal height={18} />
        </a>

        <nav className="hidden md:flex items-center gap-7 ml-14 text-[13px] font-body font-medium text-parchment/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="https://hermes-world.ai/play/"
            className="hidden sm:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] font-body font-semibold px-5 py-2 rounded border border-gold text-gold hover:bg-gold/10 transition-colors"
          >
            Enter the World
          </a>
          <a
            href="#preview"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] font-body font-semibold px-5 py-2 rounded bg-gold/15 border border-gold/60 text-gold hover:bg-gold/25 transition-colors"
          >
            <Sigil size={14} /> Watch Preview
          </a>
        </div>
      </div>
    </header>
  );
}
