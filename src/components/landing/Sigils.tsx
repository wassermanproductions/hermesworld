import { BrandIcons, Sigil } from "./Sigil";
import sigilPedestal from "@/assets/sigil-pedestal.jpg";

const perks = [
  { Icon: BrandIcons.Portal, title: "Unlocks", body: "Open zones, panes, capabilities, and world systems as you progress." },
  { Icon: BrandIcons.Shield, title: "Agent Progression", body: "Upgrade companion abilities, tools, loadouts, and memory depth." },
  { Icon: BrandIcons.Quest, title: "Quests", body: "Convert goals into trackable quests with receipts, outcomes, and history." },
  { Icon: BrandIcons.Star, title: "Cosmetics + Lore", body: "Customize the player, agents, banners, and uncover world lore." },
];

export function Sigils() {
  return (
    <section id="sigils" className="max-w-[1240px] mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-[280px_1fr_1fr] gap-8 items-start">
        {/* Left text */}
        <div>
          <h2
            className="text-[40px] md:text-[48px] leading-[1.05] text-[#F4E9D3]"
            style={{ fontFamily: '"Cormorant Garamond", "Instrument Serif", serif' }}
          >
            Collect Hermes<br />Sigils as you<br />unlock the world.
          </h2>
          <p className="mt-5 text-[13px] text-[#F4E9D3]/50 leading-relaxed">
            Hermes Sigils are progression artifacts earned through quests, agent upgrades, world exploration, and system mastery.
          </p>
          <p className="mt-3 text-[12px] text-[#F4E9D3]/35 leading-relaxed italic">
            They make invisible agent progress visible.
          </p>
        </div>

        {/* Center medallion */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-[280px] h-[280px]">
            <div className="absolute inset-0 blur-[80px] bg-[#F1C56D]/40 rounded-full scale-125" />
            <img
              src={sigilPedestal}
              alt="Hermes Sigil"
              className="relative w-full h-full object-contain drop-shadow-[0_0_60px_rgba(241,197,109,0.5)]"
              loading="lazy"
            />
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <Sigil key={i} size={14} />
              ))}
            </div>
          </div>
          <div className="text-[10px] text-[#F4E9D3]/40 tracking-[0.15em] uppercase mt-2">
            Sigils Collected · 24 / 120
          </div>
        </div>

        {/* Right 2x2 perks */}
        <div className="grid grid-cols-2 gap-5">
          {perks.map(({ Icon, title, body }) => (
            <div key={title} className="border border-[#F1C56D]/15 rounded-lg bg-[#0F1622]/40 p-4">
              <div className="text-[#F1C56D] mb-2.5"><Icon size={24} /></div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#F1C56D]">{title}</div>
              <div className="text-[11px] text-[#F4E9D3]/50 mt-1.5 leading-relaxed">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
