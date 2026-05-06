import { Globe, HardDrive, Zap } from "lucide-react";
import { Sigil } from "./Sigil";
import heroImg from "@/assets/hero-village.jpg";

export function Hero() {
  return (
    <section id="top" className="bg-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[25%] w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[120px]" />
      </div>

      {/* Small gold diamond divider below nav */}
      <div className="flex justify-center py-3">
        <svg width="8" height="8" viewBox="0 0 8 8" className="text-gold/50" fill="currentColor">
          <polygon points="4,0 8,4 4,8 0,4" />
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12 pb-12">
        {/* Split layout: text left, screenshot right */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {/* Left column — text content */}
          <div className="flex-shrink-0 lg:w-[45%] lg:max-w-[540px] pt-4 lg:pt-8">
            {/* Tagline label */}
            <div className="flex items-center gap-2.5 text-[11px] tracking-[0.3em] uppercase text-gold/80 mb-6 font-body font-semibold">
              <svg width="12" height="12" viewBox="0 0 12 12" className="text-gold" fill="currentColor">
                <polygon points="6,0 8,4 12,4 9,7 10,12 6,9 2,12 3,7 0,4 4,4" />
              </svg>
              The Agent MMO
            </div>

            {/* Heading with inline sigil */}
            <div className="relative mb-6">
              <h1 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.08] tracking-[-0.01em] text-parchment font-light">
                Step into a<br />shared world of<br />Hermes agents.
              </h1>
              {/* Gold sigil floating next to heading */}
              <div className="absolute right-0 top-[20%] lg:right-[-20px]">
                <Sigil size={100} className="drop-shadow-[0_0_30px_rgba(241,197,109,0.3)]" />
              </div>
            </div>

            <p className="text-[15px] font-body font-normal text-parchment/50 leading-[1.75] max-w-[440px] mb-3">
              Train agents, build together, and quest across a living world.
              Your progress is real.{"\n"}Your impact is shared.
            </p>

            <p className="text-[14px] font-body font-medium text-gold/70 mb-8">
              Play in your browser. No downloads.
            </p>

            {/* Divider line */}
            <div className="w-full max-w-[440px] h-px bg-gold/20 mb-6" />

            {/* Feature badges */}
            <div className="flex items-center flex-wrap gap-y-3">
              {[
                { Icon: Globe, label: "Browser playable" },
                { Icon: HardDrive, label: "Progress saves locally" },
                { Icon: Zap, label: "No signup required" },
              ].map(({ Icon, label }, i) => (
                <div key={label} className={`flex items-center gap-2.5 text-[12px] font-body font-semibold text-gold/80 ${i > 0 ? "border-l border-gold/20 ml-4 pl-4" : ""}`}>
                  <div className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center flex-none">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — gameplay screenshot */}
          <div className="flex-1 min-w-0 lg:pt-0">
            <div className="relative w-full">
              <div className="relative rounded-xl overflow-hidden border border-gold/25 shadow-[0_20px_80px_-20px_rgba(241,197,109,0.15)]">
                <img src={heroImg} alt="HermesWorld gameplay" className="w-full aspect-[16/10] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                {/* HUD: Player card top-left */}
                <div className="absolute top-3 left-3 bg-midnight/85 backdrop-blur-sm border border-gold/20 rounded-lg px-3 py-2 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gold/25 border-2 border-gold/50 flex items-center justify-center text-[12px] text-gold font-bold">E</div>
                  <div>
                    <div className="text-[11px] text-parchment font-bold font-body">Eric</div>
                    <div className="text-[9px] text-parchment/50 font-body">Level 20 · Runner</div>
                    <div className="text-[8px] text-gold/40 font-body">The Aurelian</div>
                  </div>
                </div>

                {/* Stat orbs */}
                <div className="absolute top-[60px] left-3 flex gap-1.5">
                  {[
                    { border: "border-red-500", bg: "bg-red-500/20", val: "42", label: "STR" },
                    { border: "border-green-500", bg: "bg-green-500/20", val: "68", label: "DEX" },
                    { border: "border-cyan-400", bg: "bg-cyan-400/20", val: "72", label: "INT" },
                    { border: "border-purple-500", bg: "bg-purple-500/20", val: "33", label: "VIT" },
                  ].map(({ border, bg, val, label }) => (
                    <div key={label} className={`w-9 h-9 rounded-full ${bg} flex flex-col items-center justify-center border-2 ${border}`}>
                      <span className="text-[9px] font-bold leading-none text-parchment">{val}</span>
                      <span className="text-[6px] leading-none text-parchment/50 font-bold uppercase">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Objective panel */}
                <div className="absolute top-3 left-[200px] bg-midnight/85 backdrop-blur-sm border border-gold/15 rounded-lg px-3 py-2 max-w-[220px] hidden md:block">
                  <div className="text-[7px] uppercase tracking-wider text-parchment/40 font-body mb-0.5">Objective</div>
                  <div className="text-[10px] text-gold font-bold font-body">Move and Speak</div>
                  <div className="text-[8px] text-parchment/50 font-body">Talk to Athena in Acanthus Commons in the Aurelian Dome</div>
                </div>

                {/* Minimap top-right */}
                <div className="absolute top-3 right-3 bg-midnight/85 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden w-[100px]">
                  <div className="text-[7px] uppercase tracking-[0.12em] text-gold font-bold font-body px-2 py-1.5 border-b border-gold/10 flex items-center justify-between">
                    Asora Commons
                    <span className="text-gold/40">+</span>
                  </div>
                  <div className="h-[55px] bg-verdigris/10" />
                </div>

                {/* Chat overlay bottom-left */}
                <div className="absolute bottom-12 left-3 bg-midnight/90 backdrop-blur-sm border border-gold/15 rounded-lg w-[240px] hidden md:block">
                  <div className="px-2.5 py-1.5 border-b border-gold/10 flex items-center gap-2 text-[8px] font-body font-bold text-parchment/60 uppercase tracking-wider">
                    Chat · 4 · Online
                    <span className="ml-auto text-parchment/30 cursor-pointer">×</span>
                  </div>
                  <div className="px-2.5 py-2 space-y-1 text-[8px] font-body max-h-[80px] overflow-hidden">
                    <p><span className="text-gold/70 font-semibold">Ireathorne:</span> <span className="text-parchment/50">Welcome to HermesWorld.</span></p>
                    <p><span className="text-purple-400/70 font-semibold">Vera Ephraemer:</span> <span className="text-parchment/50">great to quest with.</span></p>
                    <p><span className="text-parchment/60 font-semibold">Eric:</span> <span className="text-parchment/50">yoo</span></p>
                    <p><span className="text-cyan-400/70 font-semibold">WanderTyger:</span> <span className="text-parchment/50">see y'all in the Grove</span></p>
                  </div>
                  <div className="px-2.5 py-1.5 border-t border-gold/10 flex items-center gap-1.5">
                    <div className="flex-1 bg-obsidian/60 border border-gold/10 rounded px-2 py-1 text-[7px] text-parchment/30 font-body">Type a message...</div>
                    <div className="bg-gold/80 text-obsidian text-[6px] font-bold font-body px-2 py-1 rounded uppercase">Send</div>
                  </div>
                </div>

                {/* Bottom action bar */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-1.5">
                  <div className="flex gap-1">
                    {["≡", "⚔", "🛡", "💧", "🎒", "👤"].map((icon, i) => (
                      <div key={i} className={`w-7 h-7 rounded flex items-center justify-center text-[10px] border ${i === 1 ? "bg-gold/20 border-gold/35" : "bg-midnight/60 border-gold/10"}`}>
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
