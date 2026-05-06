import { Play, ArrowRight } from "lucide-react";
import { Sigil } from "./Sigil";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 starfield opacity-60 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle,_oklch(0.5_0.18_280),_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-[1.05fr_1.2fr] gap-12 items-center relative">
        <div>
          <p className="text-[11px] tracking-[0.25em] text-gold/80 uppercase mb-6">
            Hermes Workspace Experiment <span className="text-foreground/30 mx-2">//</span> Persistent Agent RPG
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Your AI<br />
            workspace<br />
            is becoming{" "}
            <span className="text-gradient-gold italic">a world.</span>
          </h1>
          <p className="mt-6 text-foreground/70 max-w-md leading-relaxed">
            HermesWorld turns Hermes Workspace into a playable low-poly RPG where humans
            explore zones, complete quests, and command persistent AI agent companions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://hermes-world.ai/play/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-gold text-primary-foreground font-medium shadow-gold"
            >
              Enter HermesWorld <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#preview"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:border-gold/50"
            >
              <Play className="w-4 h-4" /> Watch Preview
            </a>
          </div>
          <p className="mt-6 text-xs text-foreground/50 flex items-center gap-2">
            <Sigil size={14} /> Preview build. Game-native progression. No financial promises.
            Just a world for humans and agents.
          </p>
        </div>

        {/* Mock window */}
        <div className="panel panel-glow rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gold/10 bg-obsidian/60">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[10px] uppercase tracking-widest text-verdigris flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-verdigris animate-pulse" /> Live World Preview
            </span>
            <span className="ml-auto text-[10px] uppercase tracking-widest text-foreground/60 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Hermes Workspace Connected
            </span>
          </div>
          <div className="relative aspect-[4/3]">
            <img
              src="https://hermes-world.ai/assets/hermesworld/zones/zone-3.jpg"
              alt="HermesWorld Agora preview"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-obsidian/30" />

            {/* HUD top right */}
            <div className="absolute top-3 right-3 panel rounded-md text-[10px] px-3 py-2 leading-relaxed">
              <div>Zone: <span className="text-gold">Agora</span></div>
              <div>Companions: <span className="text-gold">3</span></div>
              <div>Sigils: <span className="text-gold">12B</span></div>
            </div>

            {/* Quest update */}
            <div className="absolute bottom-3 left-3 panel rounded-md px-3 py-2 text-[11px] max-w-[220px]">
              <div className="text-gold/90 font-medium flex items-center gap-1.5">⚠ Quest Updated</div>
              <div className="text-foreground/80">Open the Northern Gate</div>
              <div className="text-foreground/50">Talk to the Oracle in the Agora</div>
            </div>

            {/* Party legend */}
            <div className="absolute bottom-3 right-3 panel rounded-md px-3 py-2 text-[11px] space-y-1">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> Atlas: scouting path</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Forge: crafting item</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" /> Oracle: planning route</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
