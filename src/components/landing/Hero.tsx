import { Globe, Shield, Zap, X } from "lucide-react";
import { Sigil } from "./Sigil";
import heroImg from "@/assets/hero-village.jpg";

export function Hero() {
  return (
    <section id="top" className="bg-obsidian">
      {/* Diamond ornament */}
      <div className="flex justify-center py-3">
        <svg width="10" height="10" viewBox="0 0 10 10" className="text-gold/50" fill="currentColor"><polygon points="5,0 10,5 5,10 0,5" /></svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 pt-6 pb-16">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-0 items-start">
          {/* Left copy */}
          <div className="pt-4 pr-6">
            <div className="flex items-center gap-2.5 text-[11px] tracking-[0.25em] uppercase text-gold/90 mb-6 font-body font-semibold">
              <Sigil size={18} />
              <span>The Agent MMO</span>
            </div>

            <h1
              className="font-display text-[44px] md:text-[58px] lg:text-[64px] leading-[1.05] tracking-[-0.01em] text-parchment font-light"
            >
              Step into a<br />
              shared world of{" "}
              <Sigil size={52} className="inline-block align-middle -mt-2 mx-1" />
              <br />
              Hermes agents.
            </h1>

            <p className="mt-6 text-[15px] font-body font-normal text-parchment/60 leading-[1.7] max-w-[440px]">
              Train agents, build together, and quest across
              a living world. Your progress is real.
              <br />Your impact is shared.
            </p>

            <p className="mt-4 text-[15px] font-body font-medium text-gold/80">
              Play in your browser. No downloads.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gold/20 mt-8 mb-6" />

            <div className="flex items-center gap-0">
              {[
                { Icon: Globe, label: "Browser playable" },
                { Icon: Shield, label: "Progress saves locally" },
                { Icon: Zap, label: "No signup required" },
              ].map(({ Icon, label }, i) => (
                <div key={label} className={`flex items-center gap-2.5 text-[12px] font-body font-medium text-parchment/70 ${i > 0 ? "border-l border-gold/20 ml-5 pl-5" : ""}`}>
                  <Icon className="w-4.5 h-4.5 text-gold" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — gameplay screenshot with HUD */}
          <div className="relative rounded-xl overflow-hidden border border-gold/15">
            <img src={heroImg} alt="HermesWorld gameplay" className="w-full aspect-[16/10] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />

            {/* Player card top-left */}
            <div className="absolute top-3 left-3 bg-midnight/85 backdrop-blur-sm border border-gold/20 rounded-lg px-3 py-2.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/25 border-2 border-gold/50 flex items-center justify-center text-[14px] text-gold font-bold">E</div>
              <div>
                <div className="text-[13px] text-parchment font-semibold font-body">Eric</div>
                <div className="text-[9px] text-parchment/50 font-body">Level 20 · Runner</div>
                <div className="text-[9px] text-gold/60 font-body">The Aurelian</div>
              </div>
            </div>

            {/* Stat orbs below player card */}
            <div className="absolute top-[72px] left-3 flex gap-1.5">
              {[
                { border: "border-red-500", val: "42", label: "STR" },
                { border: "border-green-500", val: "68", label: "DEX" },
                { border: "border-cyan-400", val: "72", label: "INT" },
                { border: "border-purple-500", val: "33", label: "VIT" },
              ].map(({ border, val, label }) => (
                <div key={label} className={`w-9 h-9 rounded-full bg-obsidian/70 flex flex-col items-center justify-center border-2 ${border}`}>
                  <span className="text-[9px] font-bold leading-none text-parchment">{val}</span>
                  <span className="text-[6px] leading-none text-parchment/50 font-bold uppercase">{label}</span>
                </div>
              ))}
            </div>

            {/* Objective panel top-center */}
            <div className="absolute top-3 left-[200px] right-[140px] bg-midnight/80 backdrop-blur-sm border border-gold/15 rounded-md px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold text-[10px]">◎</div>
                <div>
                  <div className="text-[8px] uppercase tracking-widest text-parchment/40 font-body">Objective</div>
                  <div className="text-[10px] text-parchment/80 font-body font-medium">
                    <span className="text-gold font-semibold">Move and Speak</span>
                    {" "}— Talk to Athena in Acanthus Commons
                  </div>
                </div>
              </div>
            </div>

            {/* Minimap top-right */}
            <div className="absolute top-3 right-3 bg-midnight/85 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden w-[110px]">
              <div className="text-[7px] uppercase tracking-[0.15em] text-gold font-bold font-body px-2 py-1.5 border-b border-gold/10 flex items-center justify-between">
                Asora Commons <span className="text-parchment/40">+</span>
              </div>
              <div className="h-[70px] bg-verdigris/10 relative">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "radial-gradient(circle at 60% 40%, rgba(46,106,99,0.4), transparent 60%), radial-gradient(circle at 30% 70%, rgba(241,197,109,0.15), transparent 50%)"
                }} />
                <div className="absolute bottom-1 right-2 text-[7px] text-parchment/40 font-mono">12 DPM</div>
              </div>
            </div>

            {/* NPC labels on the scene */}
            <div className="absolute top-[45%] left-[38%] text-[8px] text-parchment/70 font-body font-medium bg-obsidian/50 px-1.5 py-0.5 rounded">
              Raffan Moss
            </div>
            <div className="absolute top-[35%] right-[8%] text-[8px] text-parchment/70 font-body font-medium bg-obsidian/50 px-1.5 py-0.5 rounded">
              Lirae Arlen
            </div>

            {/* Surfer panel */}
            <div className="absolute bottom-[100px] right-[10%] bg-midnight/80 backdrop-blur-sm border border-gold/15 rounded-md px-2.5 py-2 text-[8px] text-parchment/60 font-body">
              <div className="text-parchment/80 font-medium">Surfer of the Sigil</div>
              <div className="text-gold/70 font-bold">POUL</div>
              <div className="mt-1 text-[7px] text-parchment/40">70m to Dubaor's</div>
            </div>

            {/* Chat log bottom-left */}
            <div className="absolute bottom-[45px] left-3 w-[55%] bg-midnight/90 backdrop-blur-sm border border-gold/15 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-gold/10">
                <div className="text-[9px] font-body font-semibold text-parchment/60 uppercase tracking-wider">Chat · 4 · Online</div>
                <X className="w-3 h-3 text-parchment/30" />
              </div>
              <div className="px-3 py-2 text-[9px] font-mono text-parchment/55 space-y-0.5">
                <div><span className="text-gold/80">Ireathorne:</span> Welcome to HermesWorld.</div>
                <div><span className="text-verdigris">Vera Ephraemer:</span> great to quest with.</div>
                <div><span className="text-verdigris">Vera Ephraemer:</span> The Aureian is open, that</div>
                <div><span className="text-parchment/70">Eric:</span> yoo</div>
                <div><span className="text-gold/60">ClanHoodz</span> on Dubaor's</div>
                <div><span className="text-bronze">WanderTyger:</span> see y'all in the Grove</div>
                <div><span className="text-gold/60">DireOakDough:</span> on Dubaor's</div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <input className="flex-1 bg-obsidian/60 border border-gold/15 rounded px-2 py-1.5 text-[9px] text-parchment/70 outline-none font-body mx-3 mb-2" placeholder="Type a message..." readOnly />
                <span className="text-[9px] text-obsidian bg-gold/80 px-3 py-1.5 rounded font-bold font-body mr-3 mb-2 uppercase tracking-wider">Send</span>
              </div>
            </div>

            {/* Action bar bottom-right */}
            <div className="absolute bottom-3 right-3 flex gap-1">
              {["≡", "⚔", "🛡", "💧", "🎒", "👤"].map((icon, i) => (
                <div key={i} className={`w-8 h-8 rounded-md flex items-center justify-center text-[12px] border ${i === 1 ? "bg-gold/20 border-gold/40" : "bg-midnight/70 border-gold/15"}`}>
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
