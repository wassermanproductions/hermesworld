import { Globe, Shield, Zap } from "lucide-react";
import { Sigil } from "./Sigil";
import heroImg from "@/assets/hero-village.jpg";

export function Hero() {
  return (
    <section id="top" className="bg-[#0A0D12]">
      <div className="max-w-[1240px] mx-auto px-6 pt-14 pb-16">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Left copy */}
          <div className="pt-4">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#F1C56D]/80 mb-5">
              <Sigil size={14} />
              <span>The Agent MMO</span>
            </div>

            <h1
              className="font-display text-[46px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-parchment font-light"
            >
              Step into a<br />
              shared world of<br />
              Hermes agents.
            </h1>

            <p className="mt-5 text-[14px] font-body font-normal text-parchment/55 leading-relaxed max-w-[380px]">
              Train agents, build together, and quest across a living world.
              Your progress is real. Your impact is shared.
              Play in your browser. No downloads.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              {[
                { Icon: Globe, label: "Browser playable" },
                { Icon: Shield, label: "Progress saves locally" },
                { Icon: Zap, label: "No signup required" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-[11px] font-body font-medium text-parchment/65">
                  <Icon className="w-3.5 h-3.5 text-gold" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — gameplay screenshot with HUD */}
          <div className="relative rounded-xl overflow-hidden border border-[#F1C56D]/15">
            <img src={heroImg} alt="HermesWorld gameplay" className="w-full aspect-[16/10] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/60 via-transparent to-transparent" />

            {/* Player info top-left */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F1C56D]/30 border border-[#F1C56D]/50 flex items-center justify-center text-[10px] text-[#F1C56D] font-bold">E</div>
              <div className="text-[10px]">
                <div className="text-parchment font-medium font-body">Eric</div>
                <div className="text-parchment/50 font-body">Traveling Runner · Level 20</div>
              </div>
            </div>

            {/* Stat orbs */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {[
                { color: "bg-red-500", val: "HP", sub: "100" },
                { color: "bg-blue-500", val: "MP", sub: "50" },
                { color: "bg-green-500", val: "ST", sub: "35" },
                { color: "bg-purple-500", val: "XP", sub: "72" },
              ].map(({ color, val, sub }) => (
                <div key={val} className={`w-8 h-8 rounded-full ${color}/80 flex flex-col items-center justify-center text-white border-2 border-[#0A0D12]`}>
                  <span className="text-[6px] font-bold leading-none">{val}</span>
                  <span className="text-[7px] leading-none">{sub}</span>
                </div>
              ))}
            </div>

            {/* HUD top-right */}
              <div className="absolute top-3 right-3 bg-midnight/80 backdrop-blur-sm border border-gold/15 rounded-md px-3 py-2 text-[9px] text-parchment/70">
              <div className="text-gold font-semibold font-body text-[8px] uppercase tracking-widest mb-1">Agora Commons</div>
            </div>

            {/* Chat log bottom */}
            <div className="absolute bottom-3 left-3 right-3 bg-midnight/85 backdrop-blur-sm border border-gold/10 rounded-md px-3 py-2 text-[9px] font-mono text-parchment/60">
              <div>Eric: the wing is easy with Bolt</div>
              <div>Athena: small success x2</div>
              <div className="text-gold">OracleKnight: get builders</div>
              <div className="flex items-center gap-2 mt-1">
                <input className="flex-1 bg-obsidian/80 border border-gold/15 rounded px-2 py-1 text-[9px] text-parchment/80 outline-none font-body" placeholder="Type a message..." readOnly />
                <span className="text-[8px] text-gold bg-gold/15 px-2 py-0.5 rounded font-bold font-body">SAY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
