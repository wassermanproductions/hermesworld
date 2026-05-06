import { BrandIcons } from "./Sigil";
import { X, Plus } from "lucide-react";

const features = [
  {
    Icon: BrandIcons.Bot, title: "Agent companions",
    body: "Recruit companions and assign roles. Scouts, builders, planners, and more — all with their own behaviors.",
  },
  {
    Icon: BrandIcons.Compass, title: "Future agent takeover",
    body: "You define the goal, then your companions continue the loop, report progress, and ask for approval.",
  },
  {
    Icon: BrandIcons.Star, title: "Offline progression",
    body: "The world keeps moving. Agents can continue quests, gather resources, and prepare updates for your return.",
  },
];

const party = [
  { name: "Atlas", role: "Scout", status: "Following", color: "bg-sky-500/15 text-sky-300 border-sky-400/30" },
  { name: "Forge", role: "Builder", status: "Crafting", color: "bg-amber-500/15 text-amber-300 border-amber-400/30" },
  { name: "Oracle", role: "Planner", status: "Planning", color: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30" },
];

const verbs = [
  "move_to", "talk_to", "equip", "travel", "attack", "loot",
  "rest", "craft", "inspect", "accept_quest", "complete_quest",
];

export function Agents() {
  return (
    <section id="agents" className="max-w-7xl mx-auto px-6 py-20">
      <div className="panel-elevated rounded-2xl p-8 md:p-12 grid lg:grid-cols-[1.15fr_1fr_1fr] gap-10">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium">Humans + Agents</p>
          <h2 className="font-display text-[36px] md:text-[44px] mt-4 leading-[1.05] tracking-[-0.02em]">
            Your agents live in <span className="italic text-gradient-gold">the world</span> with you.
          </h2>
          <p className="text-[14px] text-parchment/60 mt-4 leading-relaxed">
            HermesWorld turns agent work into visible gameplay. Companions can move, talk,
            equip items, complete quests, and eventually progress while you are offline.
          </p>
          <div className="mt-7 space-y-5">
            {features.map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-gold/15 to-bronze/10 border border-gold/25 flex items-center justify-center flex-none text-gold">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-parchment">{title}</div>
                  <div className="text-[12px] text-parchment/55 mt-1 leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Party */}
        <div className="panel rounded-xl p-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-parchment/65 mb-4 pb-3 border-b border-gold-soft">
            <span>Your Party</span>
            <X className="w-3 h-3" />
          </div>
          <div className="space-y-2.5">
            {party.map((p) => (
              <div key={p.name} className="flex items-center gap-3 panel rounded-lg p-3">
                <div className="w-11 h-11 rounded bg-gradient-to-br from-gold/30 via-bronze/40 to-slate-deep border border-gold/30 flex items-center justify-center text-[10px] font-display text-gold/90">
                  {p.name[0]}
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-medium text-parchment">{p.name}</div>
                  <div className="text-[11px] text-parchment/50">{p.role}</div>
                </div>
                <span className={`text-[10px] px-2 py-1 rounded border ${p.color}`}>{p.status}</span>
              </div>
            ))}
            <button className="w-full text-[11px] text-parchment/55 border border-dashed border-gold/25 rounded-lg py-2.5 flex items-center justify-center gap-1.5 hover:border-gold/60 hover:text-gold transition-colors">
              <Plus className="w-3 h-3" /> Invite Agent
            </button>
          </div>
        </div>

        {/* Console */}
        <div className="panel rounded-xl p-4 font-mono text-[11px] leading-[1.7]">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-parchment/65 mb-4 pb-3 border-b border-gold-soft font-sans">
            <span>Agent Console</span>
            <X className="w-3 h-3" />
          </div>
          <div className="space-y-1">
            <div><span className="text-gold">{">"}</span> move_to(<span className="text-emerald-300">"Agora"</span>)</div>
            <div className="text-parchment/65">Atlas joined your party.</div>
            <div className="text-parchment/65">Oracle discovered 3 quest paths.</div>
            <div className="text-parchment/65">Forge equipped: <span className="text-amber-300">Bronze Caduceus</span>.</div>
            <div className="text-gold">Hermes Sigil +12</div>
            <div className="text-parchment/65">Quest updated: Open the Northern Gate.</div>
            <div><span className="text-gold">{">"}</span> talk_to(<span className="text-emerald-300">"Oracle"</span>)</div>
            <div className="text-parchment/65">Oracle: The gate requires three sigils and a plan.</div>
            <div><span className="text-gold">{">"}</span> accept_quest(<span className="text-emerald-300">"Northern Gate"</span>)</div>
            <div className="text-parchment/65">Quest accepted: Open the Northern Gate.</div>
            <div><span className="text-gold">{">"}</span> travel(<span className="text-emerald-300">"Oracle"</span>)</div>
            <div className="text-parchment/65">Traveling to Oracle...</div>
            <div className="text-gold animate-pulse">{">"} _</div>
          </div>
        </div>
      </div>

      {/* Verbs */}
      <div className="mt-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-5 font-medium">
          Every action maps to simple world verbs
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {verbs.map((v) => (
            <span key={v} className="font-mono text-[12px] px-3.5 py-2 rounded-md panel border border-gold/15 text-parchment/85 hover:border-gold/40 hover:text-gold transition-colors">
              `{v}`
            </span>
          ))}
        </div>
        <p className="mt-5 text-[12px] text-parchment/50 italic">
          Readable game verbs. Real agent behavior underneath.
        </p>
      </div>
    </section>
  );
}
