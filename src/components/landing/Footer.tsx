import { Sigil } from "./Sigil";
import { Twitter, Youtube, Github, MessageCircle } from "lucide-react";

const links = ["Enter World", "Watch Preview", "Hermes Workspace", "Updates", "Terms", "Privacy"];

export function Footer() {
  return (
    <footer id="updates" className="border-t border-gold-soft bg-[rgba(8,9,14,0.9)]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-[1fr_2fr_1fr] gap-10 items-start">
        <div>
          <div className="flex items-center gap-2.5">
            <Sigil size={26} />
            <span className="font-display text-[20px] tracking-[0.04em] text-parchment">
              Hermes<span className="text-gold">World</span>
            </span>
          </div>
          <p className="text-[11px] text-parchment/45 mt-3 max-w-[240px] leading-relaxed italic">
            A persistent AI agent RPG inside Hermes Workspace.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[12px] uppercase tracking-[0.18em] text-parchment/65">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-gold transition-colors">{l}</a>
          ))}
        </nav>
        <div className="flex md:justify-end gap-5 text-parchment/55">
          <a href="#" aria-label="X"><Twitter className="w-4 h-4 hover:text-gold transition-colors" /></a>
          <a href="#" aria-label="Discord"><MessageCircle className="w-4 h-4 hover:text-gold transition-colors" /></a>
          <a href="#" aria-label="YouTube"><Youtube className="w-4 h-4 hover:text-gold transition-colors" /></a>
          <a href="#" aria-label="GitHub"><Github className="w-4 h-4 hover:text-gold transition-colors" /></a>
        </div>
      </div>
      <div className="border-t border-gold-soft py-5 text-center text-[10px] text-parchment/40 px-6 italic tracking-wide">
        Hermes Sigils are game-native progression collectibles. No financial or investment claims are made. © 2025 HermesWorld
      </div>
    </footer>
  );
}
