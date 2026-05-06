import { Sigil } from "./Sigil";
import { Twitter, Youtube, Github, MessageCircle } from "lucide-react";

const links = ["Enter World", "Watch Preview", "Hermes Workspace", "Updates", "Terms", "Privacy"];

export function Footer() {
  return (
    <footer id="updates" className="border-t border-gold/10 bg-obsidian/80">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-start">
        <div>
          <div className="flex items-center gap-2">
            <Sigil size={24} />
            <span className="font-display text-lg">HermesWorld</span>
          </div>
          <p className="text-xs text-foreground/50 mt-2 max-w-[220px]">
            A persistent AI agent RPG inside Hermes Workspace.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-gold transition-colors">{l}</a>
          ))}
        </nav>
        <div className="flex md:justify-end gap-4 text-foreground/60">
          <a href="#" aria-label="X"><Twitter className="w-4 h-4 hover:text-gold" /></a>
          <a href="#" aria-label="Discord"><MessageCircle className="w-4 h-4 hover:text-gold" /></a>
          <a href="#" aria-label="YouTube"><Youtube className="w-4 h-4 hover:text-gold" /></a>
          <a href="#" aria-label="GitHub"><Github className="w-4 h-4 hover:text-gold" /></a>
        </div>
      </div>
      <div className="border-t border-gold/10 py-4 text-center text-[11px] text-foreground/40 px-6">
        Hermes Sigils are game-native progression collectibles. No financial or investment claims are made.
      </div>
    </footer>
  );
}
