import { Globe, HardDrive, Zap } from "lucide-react";
import { WordmarkHorizontal } from "./Sigil";
import heroImg from "@/assets/hero-village.jpg";

export function Hero() {
  return (
    <section id="top" className="bg-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.04] blur-[120px]" />
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gold/[0.06] blur-[80px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 pt-4 pb-14">
        {/* Centered hero content */}
        <div className="flex flex-col items-center text-center">

          {/* Huge gold sigil */}

          {/* Large wordmark */}
          <div className="relative mb-10">
            <div className="absolute inset-0 blur-[60px] bg-gold/15 rounded-full scale-125 pointer-events-none" />
            <WordmarkHorizontal height={140} className="relative drop-shadow-[0_0_40px_rgba(241,197,109,0.3)]" />
          </div>

          {/* Tagline label */}
          <div className="flex items-center gap-2.5 text-[11px] tracking-[0.3em] uppercase text-gold/80 mb-4 font-body font-semibold">
            <svg width="20" height="1" className="text-gold/40"><line x1="0" y1="0.5" x2="20" y2="0.5" stroke="currentColor" /></svg>
            The Agent MMO
            <svg width="20" height="1" className="text-gold/40"><line x1="0" y1="0.5" x2="20" y2="0.5" stroke="currentColor" /></svg>
          </div>

          {/* Heading — reduced size */}
          <h1 className="font-display text-[32px] md:text-[40px] lg:text-[46px] leading-[1.1] tracking-[-0.01em] text-parchment font-light max-w-[700px]">
            Step into a shared world<br />of Hermes agents.
          </h1>

          <p className="mt-4 text-[15px] font-body font-normal text-parchment/50 leading-[1.75] max-w-[520px]">
            Train agents, build together, and quest across a living world.
            Your progress is real. Your impact is shared.
          </p>

          <p className="mt-2 text-[14px] font-body font-medium text-gold/70">
            Play in your browser. No downloads.
          </p>

          {/* Gameplay screenshot — smaller, centered, with subtle frame */}
          <div className="relative w-full max-w-[780px] mx-auto mt-8 mb-8">
            <div className="absolute -inset-4 bg-gradient-to-b from-gold/[0.06] to-transparent rounded-2xl blur-sm pointer-events-none" />
            <div className="relative rounded-xl overflow-hidden border border-gold/30 shadow-[0_20px_80px_-20px_rgba(241,197,109,0.2)]">
              <img src={heroImg} alt="HermesWorld gameplay" className="w-full aspect-[16/9] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-obsidian/20" />

              {/* Minimal HUD overlay */}
              <div className="absolute top-3 left-3 bg-midnight/80 backdrop-blur-sm border border-gold/20 rounded-lg px-2.5 py-1.5 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gold/25 border border-gold/50 flex items-center justify-center text-[10px] text-gold font-bold">E</div>
                <div>
                  <div className="text-[10px] text-parchment font-semibold font-body">Eric</div>
                  <div className="text-[8px] text-parchment/45 font-body">Level 20 · Runner</div>
                </div>
              </div>

              {/* Stat orbs */}
              <div className="absolute top-3 left-[120px] flex gap-1">
                {[
                  { border: "border-red-500", val: "42", label: "STR" },
                  { border: "border-green-500", val: "68", label: "DEX" },
                  { border: "border-cyan-400", val: "72", label: "INT" },
                  { border: "border-purple-500", val: "33", label: "VIT" },
                ].map(({ border, val, label }) => (
                  <div key={label} className={`w-7 h-7 rounded-full bg-obsidian/80 flex flex-col items-center justify-center border-2 ${border}`}>
                    <span className="text-[7px] font-bold leading-none text-parchment">{val}</span>
                    <span className="text-[4px] leading-none text-parchment/40 font-bold uppercase">{label}</span>
                  </div>
                ))}
              </div>

              {/* Minimap top-right */}
              <div className="absolute top-3 right-3 bg-midnight/80 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden w-[85px]">
                <div className="text-[6px] uppercase tracking-[0.12em] text-gold font-bold font-body px-1.5 py-1 border-b border-gold/10">
                  Asora Commons
                </div>
                <div className="h-[45px] bg-verdigris/10" />
              </div>

              {/* Bottom gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-obsidian/80 to-transparent flex items-end justify-center pb-2">
                <div className="flex gap-1">
                  {["≡", "⚔", "🛡", "💧", "🎒", "👤"].map((icon, i) => (
                    <div key={i} className={`w-6 h-6 rounded flex items-center justify-center text-[9px] border ${i === 1 ? "bg-gold/20 border-gold/35" : "bg-midnight/60 border-gold/10"}`}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature badges */}
          <div className="flex items-center mb-10">
            {[
              { Icon: Globe, label: "Browser playable" },
              { Icon: HardDrive, label: "Progress saves locally" },
              { Icon: Zap, label: "No signup required" },
            ].map(({ Icon, label }, i) => (
              <div key={label} className={`flex items-center gap-2.5 text-[12px] font-body font-semibold text-gold/80 ${i > 0 ? "border-l border-gold/20 ml-5 pl-5" : ""}`}>
                <div className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center flex-none">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
