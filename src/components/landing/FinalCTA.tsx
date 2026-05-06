import { Play } from "lucide-react";
import { Sigil } from "./Sigil";
import ctaVista from "@/assets/cta-vista.jpg";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaVista} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/60 to-[#0A0D12]/30" />
      </div>
      <div className="relative max-w-[1240px] mx-auto px-6 py-24 md:py-32 text-center">
        <h2
          className="font-display text-[36px] md:text-[52px] leading-[1.1] text-parchment max-w-3xl mx-auto font-light"
        >
          Build with agents in a world, not a chat box.
        </h2>
        <p className="mt-4 text-[14px] text-parchment/55 max-w-xl mx-auto leading-relaxed font-body font-normal">
          HermesWorld is the agent MMO where your work, your agents, and the world around you grow together.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://hermes-world.ai/play/"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded bg-gradient-to-r from-[#F6D98A] via-[#E8B85C] to-[#B68A4A] text-[#1A1306] font-semibold text-[13px] uppercase tracking-[0.15em] shadow-[0_10px_30px_-10px_rgba(241,196,109,0.6)]"
          >
            <Sigil size={16} /> Play Now
          </a>
          <a
            href="#preview"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded border border-[#F1C56D]/40 text-[#F4E9D3]/80 text-[13px] uppercase tracking-[0.15em] hover:border-[#F1C56D] transition-colors"
          >
            <Sigil size={14} /> Watch Preview <Play className="w-3 h-3 fill-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
