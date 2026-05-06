import { BrandIcons } from "./Sigil";
import zoneTraining from "@/assets/zone-training.jpg";
import zoneForge from "@/assets/zone-forge.jpg";
import zoneAgora from "@/assets/zone-agora-card.jpg";
import zoneGrove from "@/assets/zone-grove.jpg";
import zoneOracle from "@/assets/zone-oracle.jpg";
import zoneArena from "@/assets/zone-arena.jpg";

const zones = [
  { img: zoneTraining, name: "Training Grounds", tag: "Starter zone", tagline: "Learn the verbs of the world.", Icon: BrandIcons.Compass },
  { img: zoneForge, name: "Forge", tag: "Progression", tagline: "Craft tools and upgrade companions.", Icon: BrandIcons.Shield },
  { img: zoneAgora, name: "Agora", tag: "Social hub", tagline: "Meet NPCs and watch live activity.", Icon: BrandIcons.Chat },
  { img: zoneGrove, name: "Grove", tag: "Memory zone", tagline: "Archived quests and long-term memory.", Icon: BrandIcons.Star },
  { img: zoneOracle, name: "Oracle", tag: "Planning", tagline: "Reveal quest paths and route work.", Icon: BrandIcons.Quest },
  { img: zoneArena, name: "Arena", tag: "Trials", tagline: "Battle, evals, and controlled challenges.", Icon: BrandIcons.Trophy },
];

export function Zones() {
  return (
    <section id="world" className="max-w-[1240px] mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
        {/* Left text */}
        <div className="lg:sticky lg:top-[80px]">
          <h2
            className="font-display text-[40px] md:text-[48px] leading-[1.05] text-parchment font-light"
          >
            Six zones.<br />
            One persistent<br />
            agent world.
          </h2>
          <p className="mt-5 text-[13px] text-parchment/50 leading-relaxed font-body font-normal">
            Each zone has a purpose. Together, they form a living system of work, memory, social play, and mastery.
          </p>
          <a
            href="#world"
            className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-medium px-5 py-2.5 rounded border border-[#F1C56D]/40 text-[#F4E9D3]/80 hover:border-[#F1C56D] transition-colors"
          >
            Explore the Map
          </a>
        </div>

        {/* Right — 3x2 zone cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {zones.map((z) => (
            <div
              key={z.name}
              className="relative rounded-lg overflow-hidden group border border-[#F1C56D]/10 hover:border-[#F1C56D]/30 transition-all"
            >
              <img
                src={z.img}
                alt={z.name}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/90 via-[#0A0D12]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="text-[#F1C56D]"><z.Icon size={16} /></div>
                  <span className="text-[10px] uppercase tracking-[0.18em] font-semibold font-body text-gold">{z.name}</span>
                </div>
                <div className="text-[9px] uppercase tracking-[0.15em] text-parchment/50 mb-0.5 font-body font-medium">{z.tag}</div>
                <div className="text-[11px] text-parchment/60 leading-snug font-body font-normal">{z.tagline}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
