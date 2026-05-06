import { Bot, Cpu, Moon, X, Plus } from "lucide-react";

const features = [
  {
    icon: Bot, title: "Agent companions",
    body: "Recruit companions and assign roles. Scouts, builders, planners, and more — all with their own behaviors.",
  },
  {
    icon: Cpu, title: "Future agent takeover",
    body: "You define the goal, then your companions continue the loop, report progress, and ask for approval.",
  },
  {
    icon: Moon, title: "Offline progression",
    body: "The world keeps moving. Agents can continue quests, gather resources, and prepare updates for your return.",
  },
];

const party = [
  { name: "Atlas", role: "Scout", status: "Following", color: "bg-sky-500/20 text-sky-300" },
  { name: "Forge", role: "Builder", status: "Crafting", color: "bg-amber-500/20 text-amber-300" },
  { name: "Oracle", role: "Planner", status: "Planning", color: "bg-fuchsia-500/20 text-fuchsia-300" },
];

const verbs = [
  "move_to", "talk_to", "equip", "travel", "attack", "loot",
  "rest", "craft", "inspect", "accept_quest", "complete_quest",
];

export function Agents() {
  return (
    <section id="agents" className="max-w-7xl mx-auto px-6 py-20">
      <div className="panel rounded-2xl p-8 md:p-10 grid lg:grid-cols-[1.1fr_1fr_1fr] gap-8">
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-gold/80">Humans + Agents</p>
          <h2 className="font-display text-3xl md:text-4xl mt-3">
            Your agents live in the world with you.
          </h2>
          <p className="text-sm text-foreground/60 mt-3">
            HermesWorld turns agent work into visible gameplay. Companions can move, talk,
            equip items, complete quests, and eventually progress while you are offline.
          </p>
          <div className="mt-6 space-y-5">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-3">
                <div className="w-9 h-9 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center flex-none">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-medium">{title}</div>
                  <div className="text-xs text-foreground/55 mt-1 leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Party panel */}
        <div className="panel rounded-xl p-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-foreground/60 mb-3">
            <span>Your Party</span>
            <X className="w-3 h-3" />
          </div>
          <div className="space-y-3">
            {party.map((p) => (
              <div key={p.name} className="flex items-center gap-3 panel rounded-lg p-3">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-gold/30 to-bronze/40 border border-gold/30" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-xs text-foreground/50">{p.role}</div>
                </div>
                <span className={`text-[10px] px-2 py-1 rounded ${p.color}`}>{p.status}</span>
              </div>
            ))}
            <button className="w-full text-xs text-foreground/60 border border-dashed border-gold/20 rounded-lg py-2 flex items-center justify-center gap-1.5 hover:border-gold/50 hover:text-gold transition-colors">
              <Plus className="w-3 h-3" /> Invite Agent
            </button>
          </div>
        </div>

        {/* Console */}
        <div className="panel rounded-xl p-4 font-mono text-[11px] leading-relaxed">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-foreground/60 mb-3 font-sans">
            <span>Agent Console</span>
            <X className="w-3 h-3" />
          </div>
          <div className="space-y-1.5">
            <div><span className="text-gold">{">"}</span> move_to(<span className="text-emerald-300">"Agora"</span>)</div>
            <div className="text-foreground/70">Atlas joined your party.</div>
            <div className="text-foreground/70">Oracle discovered 3 quest paths.</div>
            <div className="text-foreground/70">Forge equipped: <span className="text-amber-300">Bronze Caduceus</span>.</div>
            <div className="text-gold">Hermes Sigil +12</div>
            <div className="text-foreground/70">Quest updated: Open the Northern Gate.</div>
            <div><span className="text-gold">{">"}</span> talk_to(<span className="text-emerald-300">"Oracle"</span>)</div>
            <div className="text-foreground/70">Oracle: The gate requires three sigils and a plan.</div>
            <div><span className="text-gold">{">"}</span> accept_quest(<span className="text-emerald-300">"Northern Gate"</span>)</div>
            <div className="text-foreground/70">Quest accepted: Open the Northern Gate.</div>
            <div><span className="text-gold">{">"}</span> travel(<span className="text-emerald-300">"Oracle"</span>)</div>
            <div className="text-foreground/70">Traveling to Oracle...</div>
            <div className="text-gold animate-pulse">{">"} _</div>
          </div>
        </div>
      </div>

      {/* Verbs */}
      <div className="mt-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/60 mb-4">
          Every action maps to simple world verbs
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {verbs.map((v) => (
            <span key={v} className="font-mono text-xs px-3 py-1.5 rounded-md panel border border-gold/15">
              `{v}`
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs text-foreground/50">
          Readable game verbs. Real agent behavior underneath.
        </p>
      </div>
    </section>
  );
}
