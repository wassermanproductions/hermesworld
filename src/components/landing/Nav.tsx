import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Sigil, WordmarkHorizontal } from "./Sigil";

const links: { label: string; href: string; sectionId: string }[] = [
  { label: "World", href: "#world", sectionId: "world" },
  { label: "Agents", href: "#agents", sectionId: "agents" },
  { label: "Sigils", href: "#sigils", sectionId: "sigils" },
  { label: "Preview", href: "#preview", sectionId: "preview" },
  { label: "Updates", href: "#updates", sectionId: "updates" },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    const ids = links.map((l) => l.sectionId);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-[72px] flex items-center">
        <a href="#top" className="flex items-center gap-3">
          <Sigil size={46} />
          <WordmarkHorizontal height={28} />
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7 ml-8 lg:ml-14 text-[13px] lg:text-[15px] font-body font-medium text-parchment/70">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(l.sectionId);
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className={`transition-colors ${
                activeSection === l.sectionId
                  ? "text-gold font-semibold"
                  : "hover:text-gold"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 flex-none">
          <a
            href="https://hermes-world.ai/play/"
            className="hidden md:inline-flex items-center gap-1.5 text-[10px] lg:text-[11px] uppercase tracking-[0.1em] font-body font-bold px-3 lg:px-5 py-2 lg:py-2.5 rounded-md border border-gold bg-gradient-to-r from-[#F6D98A] via-[#E8B85C] to-[#B68A4A] text-obsidian hover:brightness-110 transition-all whitespace-nowrap shadow-[0_4px_16px_-4px_rgba(241,196,109,0.5)]"
          >
            <Diamond /> Enter the World <Diamond />
          </a>
          <a
            href="#preview"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("preview");
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="hidden lg:inline-flex items-center gap-2 text-[10px] lg:text-[11px] uppercase tracking-[0.1em] font-body font-semibold px-3 lg:px-4 py-2 rounded-md bg-parchment/5 border border-parchment/30 text-parchment hover:bg-parchment/10 transition-colors whitespace-nowrap"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Watch Preview
          </a>
        </div>
      </div>
      <div
        className="w-full"
        style={{
          height: "2px",
          background: "linear-gradient(90deg, rgba(241,196,109,0.05) 0%, rgba(241,196,109,0.7) 30%, rgba(241,196,109,0.9) 50%, rgba(241,196,109,0.7) 70%, rgba(241,196,109,0.05) 100%)",
        }}
      />
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
