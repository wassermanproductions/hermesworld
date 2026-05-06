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
    <section id="sigils" className="max-w-7xl mx-auto px-6 py-24">
      <div className="panel-elevated rounded-2xl p-8 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
          <RadialOrnament size={520} />
        </div>
        <div className="grid lg:grid-cols-[1.05fr_1.1fr_1.05fr] gap-10 lg:gap-6 items-center relative">
          <div className="max-w-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">In-World Progression</p>
            <h2 className="font-display text-[34px] md:text-[42px] mt-4 leading-[1.05] tracking-[-0.02em]">
              Collect Hermes Sigils <span className="italic text-gradient-gold">as you unlock</span> the world.
            </h2>
            <p className="text-[13px] text-parchment/60 mt-5 leading-relaxed">
              Hermes Sigils are game-native collectibles used for progression inside HermesWorld:
              unlocks, cosmetics, agent upgrades, quests, and world access.
            </p>
            <p className="text-[11px] text-parchment/40 mt-5 leading-relaxed italic">
              Hermes Sigils are presented as in-game lore and progression. They are not financial advice,
              not an investment promise, and not required to speculate on anything.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[400px] h-[400px] max-w-full">
              <div className="absolute inset-0 blur-[120px] bg-gold/60 rounded-full scale-125" />
              <div className="absolute inset-6 blur-[60px] bg-gold/40 rounded-full" />
              <img
                src={sigilPedestal}
                alt="Hermes Sigil pedestal"
                className="relative w-full h-full object-contain drop-shadow-[0_0_80px_rgba(241,197,109,0.55)]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            {perks.map(({ Icon, title, body }) => (
              <div key={title} className="">
                <div className="text-gold mb-3"><Icon size={26} /></div>
                <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-gold/90">{title}</div>
                <div className="text-[12px] text-parchment/60 mt-2 leading-relaxed">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
