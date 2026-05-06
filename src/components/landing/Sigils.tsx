import { Sigil, RadialOrnament, BrandIcons } from "./Sigil";

const perks = [
  { Icon: BrandIcons.Portal, title: "Unlocks", body: "Open new gates, zones, and questlines as your profile grows." },
  { Icon: BrandIcons.Wing, title: "Cosmetics", body: "Customize your player, companions, banners, and world profile." },
  { Icon: BrandIcons.Shield, title: "Agent Progression", body: "Upgrade companion abilities, roles, loadouts, and world actions." },
  { Icon: BrandIcons.Trophy, title: "Quests", body: "Spend or earn Sigils through game-native quest loops and achievements." },
];

export function Sigils() {
  return (
    <section id="sigils" className="max-w-7xl mx-auto px-6 py-24">
      <div className="panel-elevated rounded-2xl p-8 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
          <RadialOrnament size={520} />
        </div>
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-center relative">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">In-World Progression</p>
            <h2 className="font-display text-[40px] md:text-[52px] mt-4 leading-[1.05] tracking-[-0.02em]">
              Collect Hermes Sigils <span className="italic text-gradient-gold">as you unlock</span> the world.
            </h2>
            <p className="text-[14px] text-parchment/60 mt-5 leading-relaxed">
              Hermes Sigils are game-native collectibles used for progression inside HermesWorld:
              unlocks, cosmetics, agent upgrades, quests, and world access.
            </p>
            <p className="text-[11px] text-parchment/40 mt-5 leading-relaxed italic">
              Hermes Sigils are presented as in-game lore and progression. They are not financial advice,
              not an investment promise, and not required to speculate on anything.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-[70px] bg-gold/40 rounded-full scale-125" />
              <SigilBadge size={260} className="relative" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {perks.map(({ Icon, title, body }) => (
              <div key={title} className="panel rounded-lg p-5 hover:border-gold/40 transition-colors">
                <div className="text-gold mb-3"><Icon size={22} /></div>
                <div className="text-[10px] tracking-[0.22em] uppercase font-medium text-parchment">{title}</div>
                <div className="text-[12px] text-parchment/55 mt-2 leading-relaxed">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
