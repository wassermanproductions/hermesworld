import { Play, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="preview" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://hermes-world.ai/assets/hermesworld/zones/zone-5.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian/40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-32 flex justify-end">
        <div className="panel panel-glow rounded-2xl p-8 max-w-md w-full text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Build with agents in a world, not a chat box.
          </h2>
          <p className="mt-4 text-sm text-foreground/60">
            Enter HermesWorld and explore the first playable layer of Hermes Workspace:
            zones, quests, companions, Sigils, and persistent agent progression.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href="https://hermes-world.ai/play/"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-gradient-gold text-primary-foreground font-medium shadow-gold"
            >
              Enter the World <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-border hover:border-gold/50"
            >
              Watch Preview <Play className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-5 text-[11px] text-foreground/45 leading-relaxed">
            HermesWorld is an early playable world experiment inside Hermes Workspace.
            Systems may evolve as the world comes online.
          </p>
        </div>
      </div>
    </section>
  );
}
