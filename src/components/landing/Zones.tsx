import { BrandIcons, Sigil } from "./Sigil";
import zoneTraining from "@/assets/zone-training.jpg";
import zoneForge from "@/assets/zone-forge.jpg";
import zoneAgora from "@/assets/zone-agora-card.jpg";
import zoneGrove from "@/assets/zone-grove.jpg";
import zoneOracle from "@/assets/zone-oracle.jpg";
import zoneArena from "@/assets/zone-arena.jpg";
import { Crosshair } from "lucide-react";

const zones = [
  { img: zoneTraining, name: "Training Grounds", tagline: "Train your agent.\nMaster skills and\nrefine your craft.", Icon: BrandIcons.Compass },
  { img: zoneForge, name: "Forge", tagline: "Forge tools\nand upgrade gear.\nEquip for deeper runs.", Icon: BrandIcons.Shield },
  { img: zoneAgora, name: "Agora", tagline: "Meet, trade,\nand form alliances\nwithin the world.", Icon: BrandIcons.Chat },
  { img: zoneGrove, name: "Grove", tagline: "Gather resources,\nharvest reagents,\nand craft with care.", Icon: BrandIcons.Star },
  { img: zoneOracle, name: "Oracle", tagline: "Seek insight, unlock\nlore, and reveal\nwhat lies ahead.", Icon: BrandIcons.Quest },
  { img: zoneArena, name: "Arena", tagline: "Hone skills, and\ncompete in challenges\nthat test mastery.", Icon: BrandIcons.Trophy },
];

export function Zones() {
  return (
    <section id="world" className="max-w-[1240px] mx-auto px-6 py-20">
      {/* Top diamond ornament */}
      <div className="flex justify-center mb-6">
        <Diamond />
      </div>

      <div className="border border-gold/20 rounded-2xl bg-midnight/60 p-6 md:p-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Left text */}
          <div className="lg:sticky lg:top-[80px] flex flex-col justify-between min-h-[420px]">
            <div>
              <h2 className="font-display text-[42px] md:text-[52px] leading-[1.05] text-parchment font-light">
                Six zones.<br />
                One persistent<br />
                agent world.
              </h2>

              {/* Diamond divider */}
              <div className="flex items-center gap-2 mt-5 mb-6">
                <div className="w-16 h-px bg-gold/50" />
                <svg width="10" height="10" viewBox="0 0 10 10" className="text-gold" fill="currentColor"><polygon points="5,0 10,5 5,10 0,5" /></svg>
              </div>

              <p className="text-[14px] text-parchment/60 leading-[1.7] font-body font-normal max-w-[280px]">
                Each zone has a purpose,
                together they form a living,
                together they form a living
                system, rich with mastery,
                social ties, and history.
              </p>
            </div>

            <a
              href="#world"
              className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-body font-semibold px-6 py-3 rounded-md border border-gold/40 text-gold hover:border-gold hover:bg-gold/5 transition-colors w-fit"
            >
              <Crosshair className="w-4 h-4" />
              Explore the Map
            </a>
          </div>

          {/* Right — 3x2 zone cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {zones.map((z) => (
              <div
                key={z.name}
                className="rounded-xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all bg-obsidian/40 group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={z.img}
                    alt={z.name}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Info below image */}
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-gold flex-none mt-0.5">
                      <z.Icon size={28} />
                    </div>
                    <div>
                      <div className="text-[12px] uppercase tracking-[0.18em] font-body font-bold text-gold mb-1">
                        {z.name}
                      </div>
                      <div className="text-[12px] text-parchment/55 leading-[1.6] font-body font-normal whitespace-pre-line">
                        {z.tagline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom diamond ornament */}
      <div className="flex justify-center mt-6">
        <Diamond />
      </div>
    </section>
  );
}

function Diamond() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" className="text-gold/60" fill="currentColor">
      <polygon points="6,0 12,6 6,12 0,6" />
    </svg>
  );
}
