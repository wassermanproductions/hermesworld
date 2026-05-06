import { BrandIcons } from "./Sigil";

const items = [
  { Icon: BrandIcons.Trend, label: "Early Preview", sublabel: "Build is Live Now", text: "Jump in today. Shape the world as we build it." },
  { Icon: BrandIcons.Radio, label: "Humans & Agents", sublabel: "Share One World", text: "Work together with players and their agents in real time." },
  { Icon: BrandIcons.Compass, label: "6 Launch Zones", sublabel: "", text: "Explore six distinct zones with unique roles." },
  { Icon: BrandIcons.Bot, label: "Agent Companions", sublabel: "", text: "Recruit, train, and deploy agents that work with you." },
  { Icon: BrandIcons.Scroll, label: "Persistent Profiles", sublabel: "", text: "Your progress, loadouts, and journal persist." },
  { Icon: BrandIcons.Sigil, label: "Hermes Sigils", sublabel: "", text: "Earn Sigils. Unlock the world and its lore." },
];

export function FeatureStrip() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-[#F1C56D]/15 rounded-xl overflow-hidden bg-[#0F1622]/40">
        {items.map(({ Icon, label, sublabel, text }, i) => (
          <div
            key={label}
            className={`p-5 text-center flex flex-col items-center gap-2.5
              ${i !== 0 ? "lg:border-l" : ""}
              ${i % 2 !== 0 ? "border-l lg:border-l" : ""}
              ${i >= 2 ? "border-t lg:border-t-0" : ""}
              border-[#F1C56D]/10`}
          >
            <div className="w-11 h-11 rounded-full border border-[#F1C56D]/30 flex items-center justify-center text-[#F1C56D]">
              <Icon size={20} />
            </div>
            <div className="text-[9px] tracking-[0.18em] uppercase text-[#F1C56D] font-semibold leading-tight">
              {label}
              {sublabel && <><br /><span className="text-[#F4E9D3]/50">{sublabel}</span></>}
            </div>
            <div className="text-[11px] text-[#F4E9D3]/45 leading-snug">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
