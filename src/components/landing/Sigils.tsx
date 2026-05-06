import { RadialOrnament, BrandIcons } from "./Sigil";
import sigilPedestal from "@/assets/sigil-pedestal.jpg";

const perks = [
  { Icon: BrandIcons.Portal, title: "Unlocks", color: "text-gold", body: "Open new gates, zones, and questlines as your profile grows." },
  { Icon: BrandIcons.Wing, title: "Cosmetics", color: "text-sky-300", body: "Customize your player, companions, banners, and world profile." },
  { Icon: BrandIcons.Shield, title: "Agent Progression", color: "text-emerald-300", body: "Upgrade companion abilities, roles, loadouts, and world actions." },
  { Icon: BrandIcons.Trophy, title: "Quests", color: "text-fuchsia-300", body: "Spend or earn Sigils through game-native quest loops and achievements." },
];

export function Sigils() {
  return (
    <section id="sigils" className="max-w-7xl mx-auto px-6 py-20">
      <div className="panel-elevated rounded-2xl px-8 md:px-12 py-12 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 starfield opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <RadialOrnament size={460} />
        </div>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)_minmax(0,1.15fr)] gap-8 lg:gap-10 items-center relative">
          <div className="max-w-[360px]">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold font-medium">In-World Progression</p>
            <h2 className="font-display text-[32px] md:text-[36px] mt-4 leading-[1.1] tracking-[-0.015em]">
              Collect Hermes Sigils <span className="italic text-gradient-gold">as you unlock</span> the world.
            </h2>
            <p className="text-[12.5px] text-parchment/55 mt-4 leading-relaxed">
              Hermes Sigils are game-native collectibles used for progression inside HermesWorld:
              unlocks, cosmetics, agent upgrades, quests, and world access.
            </p>
            <p className="text-[11px] text-parchment/35 mt-4 leading-relaxed italic">
              Hermes Sigils are presented as in-game lore and progression. They are not financial advice,
              not an investment promise, and not required to speculate on anything.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] max-w-full">
              <div className="absolute inset-0 blur-[110px] bg-gold/55 rounded-full scale-125" />
              <div className="absolute inset-8 blur-[50px] bg-gold/35 rounded-full" />
              <img
                src={sigilPedestal}
                alt="Hermes Sigil pedestal"
                className="relative w-full h-full object-contain drop-shadow-[0_0_70px_rgba(241,197,109,0.55)]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {perks.map(({ Icon, title, body, color }) => (
              <div key={title}>
                <div className={`${color} mb-3`}><Icon size={28} /></div>
                <div className={`text-[10px] tracking-[0.26em] uppercase font-semibold ${color}`}>{title}</div>
                <div className="text-[12px] text-parchment/55 mt-1.5 leading-[1.55]">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
