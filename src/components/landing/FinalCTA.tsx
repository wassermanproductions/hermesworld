import { Play } from "lucide-react";
import { Sigil } from "./Sigil";
import ctaVista from "@/assets/cta-vista.jpg";

export function FinalCTA() {
  return (
    <section id="preview" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaVista}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/75" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-40 md:py-52 flex justify-end">
        <div className="rounded-xl p-9 max-w-md w-full text-center backdrop-blur-md bg-obsidian/75 border border-gold/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
          <Sigil size={40} className="mx-auto mb-5" />
          <h2 className="font-display text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em]">
            Build with agents <span className="italic text-gradient-gold">in a world</span>, not a chat box.
          </h2>
          <p className="mt-5 text-[13px] text-parchment/65 leading-relaxed">
            Enter HermesWorld and explore the first playable layer of Hermes Workspace:
            zones, quests, companions, Sigils, and persistent agent progression.
          </p>
          <div className="mt-7 space-y-3">
            <a
              href="https://hermes-world.ai/play/"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-md btn-gold font-medium text-[13px] uppercase tracking-[0.18em]"
            >
              Enter the World <span aria-hidden>›</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-md btn-ghost-gold text-[13px] uppercase tracking-[0.18em]"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Watch Preview
            </a>
          </div>
          <p className="mt-6 text-[10px] text-parchment/45 leading-relaxed italic">
            HermesWorld is an early playable world experiment inside Hermes Workspace.
            Systems may evolve as the world comes online.
          </p>
        </div>
      </div>
    </section>
  );
}
