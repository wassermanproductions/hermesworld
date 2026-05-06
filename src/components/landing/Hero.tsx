import { Play } from "lucide-react";
import { Sigil } from "./Sigil";
import heroImg from "@/assets/zone-agora.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 starfield opacity-50 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle,#3b2f7a,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-[1fr_1.15fr] gap-14 items-center relative">
        <div>
          <p className="text-[10px] tracking-[0.32em] text-gold/90 uppercase mb-7 font-medium">
            Hermes Workspace Experiment <span className="text-parchment/30 mx-2">//</span> Persistent Agent RPG
          </p>
          <h1 className="font-display text-[64px] md:text-[84px] lg:text-[96px] leading-[0.95] tracking-[-0.02em]">
            Your AI<br />
            workspace<br />
            is becoming<br />
            <span className="text-gradient-gold italic font-light">a world.</span>
          </h1>
          <p className="mt-8 text-parchment/65 max-w-md leading-[1.7] text-[15px]">
            HermesWorld turns Hermes Workspace into a playable low-poly RPG where humans
            explore zones, complete quests, and command persistent AI agent companions.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://hermes-world.ai/play/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md btn-gold font-medium text-[13px] uppercase tracking-[0.18em]"
            >
              Enter HermesWorld <span aria-hidden>›</span>
            </a>
            <a
              href="#preview"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md btn-ghost-gold text-[13px] uppercase tracking-[0.18em]"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Watch Preview
            </a>
          </div>
          <div className="mt-7 flex items-start gap-2.5 text-[11px] text-parchment/45 leading-relaxed">
            <Sigil size={14} className="flex-none mt-0.5" />
            <p>Preview build. Game-native progression.<br />No financial promises. Just a world for humans and agents.</p>
          </div>
        </div>

        {/* Browser-style mock window */}
        <div className="panel-elevated rounded-xl overflow-hidden corner-frame">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gold-soft bg-[rgba(8,9,14,0.7)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[9px] uppercase tracking-[0.25em] text-verdigris flex items-center gap-2 px-2 py-1 border border-verdigris/40 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-verdigris animate-pulse" /> Live World Preview
            </span>
            <span className="ml-auto text-[9px] uppercase tracking-[0.25em] text-parchment/60 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Hermes Workspace Connected
            </span>
          </div>
          <div className="relative aspect-[4/3]">
            <img
              src={heroImg}
              alt="HermesWorld Agora preview"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-obsidian/30" />

            {/* HUD top right */}
            <div className="absolute top-4 right-4 panel rounded-md text-[10px] px-3.5 py-2.5 leading-relaxed font-mono">
              <div className="text-parchment/50">Zone: <span className="text-gold">Agora</span></div>
              <div className="text-parchment/50">Companions: <span className="text-gold">3</span></div>
              <div className="text-parchment/50">Sigils: <span className="text-gold">12B</span></div>
            </div>

            {/* Quest update */}
            <div className="absolute bottom-4 left-4 panel rounded-md px-3.5 py-2.5 text-[11px] max-w-[240px]">
              <div className="text-gold flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] mb-1">
                <span>◇</span> Quest Updated
              </div>
              <div className="text-parchment font-medium">Open the Northern Gate</div>
              <div className="text-parchment/55 mt-0.5">Talk to the Oracle in the Agora</div>
            </div>

            {/* Party legend */}
            <div className="absolute bottom-4 right-4 panel rounded-md px-3.5 py-2.5 text-[11px] space-y-1.5">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> <span className="text-parchment/85">Atlas:</span> <span className="text-parchment/55">scouting path</span></div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> <span className="text-parchment/85">Forge:</span> <span className="text-parchment/55">crafting item</span></div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" /> <span className="text-parchment/85">Oracle:</span> <span className="text-parchment/55">planning route</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
