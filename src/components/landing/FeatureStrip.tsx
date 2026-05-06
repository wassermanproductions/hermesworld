import { BrandIcons } from "./Sigil";

const items = [
  { Icon: BrandIcons.Trend, label: "Trending Build", text: "Early HermesWorld preview build is live" },
  { Icon: BrandIcons.Radio, label: "Live Multiplayer Relay", text: "Humans and agents share one world state" },
  { Icon: BrandIcons.World, label: "6 Launch Zones", text: "Training Grounds, Forge, Agora, Grove, Oracle, Arena" },
  { Icon: BrandIcons.Bot, label: "Agent Companions", text: "Workers become in-world allies" },
  { Icon: BrandIcons.User, label: "Persistent Profiles", text: "Progress, items, quests, and unlocks" },
  { Icon: BrandIcons.Sigil, label: "Hermes Sigils", text: "Game-native collectible progression" },
];

export function FeatureStrip() {
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-10 mb-24 relative z-10">
      <div className="panel-elevated rounded-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {items.map(({ Icon, label, text }, i) => (
          <div
            key={label}
            className={`p-6 flex flex-col items-center gap-3 text-center
              ${i !== 0 ? "lg:border-l border-gold-soft" : ""}
              ${i % 2 !== 0 ? "border-l lg:border-l border-gold-soft" : ""}
              ${i >= 2 ? "border-t md:border-t-0 border-gold-soft" : ""}
              ${i >= 3 && i < 6 ? "md:border-t lg:border-t-0 border-gold-soft" : ""}`}
          >
            <div className="text-gold">
              <Icon size={24} />
            </div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-parchment font-medium">{label}</div>
            <div className="text-[12px] text-parchment/55 leading-snug max-w-[180px]">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
