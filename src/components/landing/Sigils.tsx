import { Sigil } from "./Sigil";
import { DoorOpen, Sparkles, Shield, Trophy } from "lucide-react";

const perks = [
  { icon: DoorOpen, title: "Unlocks", body: "Open new gates, zones, and questlines as your profile grows." },
  { icon: Sparkles, title: "Cosmetics", body: "Customize your player, companions, banners, and world profile." },
  { icon: Shield, title: "Agent Progression", body: "Upgrade companion abilities, roles, loadouts, and world actions." },
  { icon: Trophy, title: "Quests", body: "Spend or earn Sigils through game-native quest loops and achievements." },
];

export function Sigils() {
  return (
    <section id="sigils" className="max-w-7xl mx-auto px-6 py-20">
      <div className="panel panel-glow rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />
        <div className="grid lg:grid-cols-[1fr_1fr_1fr] gap-10 items-center relative">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold/80">In-World Progression</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              Collect Hermes Sigils as you unlock the world.
            </h2>
            <p className="text-sm text-foreground/60 mt-4 leading-relaxed">
              Hermes Sigils are game-native collectibles used for progression inside HermesWorld:
              unlocks, cosmetics, agent upgrades, quests, and world access.
            </p>
            <p className="text-xs text-foreground/40 mt-4 leading-relaxed">
              Hermes Sigils are presented as in-game lore and progression. They are not financial advice,
              not an investment promise, and not required to speculate on anything.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-gold/30 rounded-full" />
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold border border-gold/50">
                <Sigil size={120} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {perks.map(({ icon: Icon, title, body }) => (
              <div key={title} className="panel rounded-lg p-4">
                <Icon className="w-5 h-5 text-gold mb-2" />
                <div className="text-sm font-medium">{title}</div>
                <div className="text-xs text-foreground/55 mt-1 leading-relaxed">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
