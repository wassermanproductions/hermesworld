import { Globe, HardDrive, Zap, X } from "lucide-react";
import { Sigil } from "./Sigil";
import heroImg from "@/assets/hero-village.jpg";

export function Hero() {
  return (
    <section id="top" className="bg-obsidian">
      {/* Diamond ornament */}
      <div className="flex justify-center py-3">
        <svg width="10" height="10" viewBox="0 0 10 10" className="text-gold/50" fill="currentColor"><polygon points="5,0 10,5 5,10 0,5" /></svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 pt-4 pb-10">
        <div className="relative grid lg:grid-cols-[42%_58%] gap-0 items-start">

          {/* Large decorative sigil watermark bridging text and image */}
          <div className="hidden lg:block absolute top-[40px] left-[32%] z-10 pointer-events-none">
            <div className="relative">
              <div className="absolute inset-0 blur-[40px] bg-gold/15 rounded-full scale-110" />
              <Sigil size={180} className="relative opacity-50" />
            </div>
          </div>

          {/* Left copy */}
          <div className="pt-2 pr-0 relative z-20">
            <div className="flex items-center gap-2.5 text-[11px] tracking-[0.25em] uppercase text-gold/90 mb-5 font-body font-semibold">
              <Sigil size={16} />
              <span>The Agent MMO</span>
            </div>

            <h1
              className="font-display text-[44px] md:text-[58px] lg:text-[68px] leading-[1.05] tracking-[-0.015em] text-parchment font-light"
            >
              Step into a<br />
              shared world of<br />
              Hermes agents.
            </h1>

            <p className="mt-5 text-[15px] font-body font-normal text-parchment/55 leading-[1.75] max-w-[420px]">
              Train agents, build together, and quest across a living world. Your progress is real.<br />
              Your impact is shared.
            </p>

            <p className="mt-3 text-[15px] font-body font-medium text-gold/80">
              Play in your browser. No downloads.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gold/20 mt-7 mb-5" />

            <div className="flex items-center pb-2">
              {[
                { Icon: Globe, label: "Browser playable" },
                { Icon: HardDrive, label: "Progress saves locally" },
                { Icon: Zap, label: "No signup required" },
              ].map(({ Icon, label }, i) => (
                <div key={label} className={`flex items-center gap-3 text-[14px] font-body font-semibold text-gold ${i > 0 ? "border-l border-gold/25 ml-6 pl-6" : ""}`}>
                  <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center flex-none">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — gameplay screenshot with HUD */}
          <div className="relative rounded-xl overflow-hidden border border-gold/15 z-20">
            <img src={heroImg} alt="HermesWorld gameplay" className="w-full aspect-[16/10] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />

            {/* Player card top-left */}
            <div className="absolute top-2.5 left-2.5 bg-midnight/85 backdrop-blur-sm border border-gold/20 rounded-lg px-2.5 py-2 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gold/25 border-2 border-gold/50 flex items-center justify-center text-[12px] text-gold font-bold overflow-hidden">
                <img src={heroImg} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-[12px] text-parchment font-semibold font-body">Eric</div>
                <div className="text-[9px] text-parchment/50 font-body">Level 20 · Runner</div>
                <div className="text-[9px] text-gold/60 font-body">The Aurelian</div>
              </div>
            </div>

            {/* Stat orbs below player card */}
            <div className="absolute top-[65px] left-2.5 flex gap-1">
              {[
                { border: "border-red-500", val: "42", label: "STR" },
                { border: "border-green-500", val: "68", label: "DEX" },
                { border: "border-cyan-400", val: "72", label: "INT" },
                { border: "border-purple-500", val: "33", label: "VIT" },
              ].map(({ border, val, label }) => (
                <div key={label} className={`w-8 h-8 rounded-full bg-obsidian/80 flex flex-col items-center justify-center border-2 ${border}`}>
                  <span className="text-[8px] font-bold leading-none text-parchment">{val}</span>
                  <span className="text-[5px] leading-none text-parchment/50 font-bold uppercase">{label}</span>
                </div>
              ))}
            </div>

            {/* Objective panel top-center */}
            <div className="absolute top-2.5 left-[180px] right-[125px] bg-midnight/80 backdrop-blur-sm border border-gold/15 rounded-md px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center text-gold text-[8px] flex-none">◎</div>
                <div>
                  <div className="text-[7px] uppercase tracking-widest text-parchment/40 font-body">Objective</div>
                  <div className="text-[9px] text-parchment/80 font-body font-medium">
                    <span className="text-gold font-semibold">Move and Speak</span>
                    {" "} Talk to Athena in Acanthus Commons
                  </div>
                </div>
              </div>
            </div>

            {/* Minimap top-right */}
            <div className="absolute top-2.5 right-2.5 bg-midnight/85 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden w-[100px]">
              <div className="text-[6px] uppercase tracking-[0.15em] text-gold font-bold font-body px-2 py-1 border-b border-gold/10 flex items-center justify-between">
                Asora Commons <span className="text-parchment/40">+</span>
              </div>
              <div className="h-[60px] bg-verdigris/10 relative">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "radial-gradient(circle at 60% 40%, rgba(46,106,99,0.4), transparent 60%), radial-gradient(circle at 30% 70%, rgba(241,197,109,0.15), transparent 50%)"
                }} />
                <div className="absolute bottom-1 right-1.5 text-[6px] text-parchment/40 font-mono">12 DPM</div>
              </div>
            </div>

            {/* NPC labels on the scene */}
            <div className="absolute top-[48%] left-[35%] text-[7px] text-parchment/60 font-body font-medium bg-obsidian/40 px-1 py-0.5 rounded">
              Raffan Moss
            </div>
            <div className="absolute top-[38%] right-[6%] text-[7px] text-parchment/60 font-body font-medium bg-obsidian/40 px-1 py-0.5 rounded">
              Lirae Arlen
            </div>

            {/* Surfer panel */}
            <div className="absolute bottom-[90px] right-[8%] bg-midnight/75 backdrop-blur-sm border border-gold/12 rounded-md px-2 py-1.5 text-[7px] text-parchment/55 font-body">
              <div className="text-parchment/70 font-medium text-[7px]">Surfer of the Sigil</div>
              <div className="text-gold/70 font-bold text-[8px]">POUL</div>
              <div className="mt-0.5 text-[6px] text-parchment/35">70m to Dubaor's</div>
            </div>

            {/* Chat log bottom-left */}
            <div className="absolute bottom-[40px] left-2.5 w-[52%] bg-midnight/90 backdrop-blur-sm border border-gold/15 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-2.5 py-1 border-b border-gold/10">
                <div className="text-[8px] font-body font-semibold text-parchment/60 uppercase tracking-wider">Chat · 4 · Online</div>
                <X className="w-2.5 h-2.5 text-parchment/30" />
              </div>
              <div className="px-2.5 py-1.5 text-[8px] font-mono text-parchment/50 space-y-px leading-[1.5]">
                <div><span className="text-gold/70">Ireathorne:</span> Welcome to HermesWorld.</div>
                <div><span className="text-verdigris">Vera Ephraemer:</span> great to quest with.</div>
                <div><span className="text-verdigris">Vera Ephraemer:</span> The Aureian is open, that</div>
                <div><span className="text-parchment/65">Eric:</span> yoo</div>
                <div><span className="text-gold/50">ClanHoodz</span> on Dubaor's</div>
                <div><span className="text-bronze">WanderTyger:</span> see y'all in the Grove</div>
                <div><span className="text-gold/50">DireOakDough:</span> on Dubaor's</div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 pb-2 pt-1">
                <input className="flex-1 bg-obsidian/60 border border-gold/15 rounded px-2 py-1 text-[8px] text-parchment/60 outline-none font-body" placeholder="Type a message..." readOnly />
                <span className="text-[8px] text-obsidian bg-gold/80 px-2.5 py-1 rounded font-bold font-body uppercase tracking-wider">Send</span>
              </div>
            </div>

            {/* Action bar bottom-right */}
            <div className="absolute bottom-2.5 right-2.5 flex gap-0.5">
              {["≡", "⚔", "🛡", "💧", "🎒", "👤"].map((icon, i) => (
                <div key={i} className={`w-7 h-7 rounded flex items-center justify-center text-[11px] border ${i === 1 ? "bg-gold/20 border-gold/40" : "bg-midnight/70 border-gold/12"}`}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
