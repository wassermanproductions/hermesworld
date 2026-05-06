import { TrendingUp, Radio, Map, Bot, UserCircle2, Coins } from "lucide-react";

const items = [
  { icon: TrendingUp, label: "Trending Build", text: "Early HermesWorld preview build is live" },
  { icon: Radio, label: "Live Multiplayer Relay", text: "Humans and agents share one world state" },
  { icon: Map, label: "6 Launch Zones", text: "Training Grounds, Forge, Agora, Grove, Oracle, Arena" },
  { icon: Bot, label: "Agent Companions", text: "Workers become in-world allies" },
  { icon: UserCircle2, label: "Persistent Profiles", text: "Progress, items, quests, and unlocks" },
  { icon: Coins, label: "Hermes Sigils", text: "Game-native collectible progression" },
];

export function FeatureStrip() {
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-8 mb-20 relative">
      <div className="panel panel-glow rounded-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-gold/10">
        {items.map(({ icon: Icon, label, text }) => (
          <div key={label} className="p-5 text-center flex flex-col items-center gap-2">
            <Icon className="w-5 h-5 text-gold" />
            <div className="text-[10px] tracking-widest uppercase text-foreground/80">{label}</div>
            <div className="text-xs text-foreground/60 leading-snug">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
