import { BrandIcons } from "./Sigil";

const features = [
  { Icon: BrandIcons.Bot, title: "Agent Companions", body: "Recruit and specialize agents to expand your capabilities." },
  { Icon: BrandIcons.Compass, title: "Autonomous Actions", body: "Agents can gather, craft, plan, and complete tasks on your behalf." },
  { Icon: BrandIcons.Star, title: "Offline Progression", body: "Your agents keep working even when you're away." },
];

const party = [
  { name: "Atlas Scout", level: 18, initials: "AS", color: "from-sky-700 to-sky-900" },
  { name: "Forge Builder", level: 17, initials: "FB", color: "from-amber-700 to-amber-900" },
  { name: "Oracle Planner", level: 19, initials: "OP", color: "from-fuchsia-700 to-fuchsia-900" },
];

export function Agents() {
  return (
    <section id="agents" className="max-w-[1240px] mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-[280px_1fr_1fr] gap-6 items-start">
        {/* Left text */}
        <div>
          <h2
            className="text-[40px] md:text-[48px] leading-[1.05] text-[#F4E9D3]"
            style={{ fontFamily: '"Cormorant Garamond", "Instrument Serif", serif' }}
          >
            Your agents<br />
            live in the<br />
            world with<br />
            you.
          </h2>
          <p className="mt-4 text-[13px] text-[#F4E9D3]/50 leading-relaxed">
            They learn, act, and grow alongside you—online or offline.
          </p>

          <div className="mt-7 space-y-5">
            {features.map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-3">
                <div className="w-8 h-8 rounded-full border border-[#F1C56D]/30 flex items-center justify-center flex-none text-[#F1C56D]">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#F1C56D]">{title}</div>
                  <div className="text-[11px] text-[#F4E9D3]/50 mt-0.5 leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Party panel */}
        <div className="border border-[#F1C56D]/15 rounded-xl bg-[#0F1622]/50 p-5">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#F4E9D3]/50 mb-4 pb-3 border-b border-[#F1C56D]/10">Your Party</div>
          <div className="grid grid-cols-3 gap-3">
            {party.map((p) => (
              <div key={p.name} className="text-center">
                <div className={`w-full aspect-square rounded-lg bg-gradient-to-br ${p.color} border border-[#F1C56D]/15 flex items-center justify-center text-[20px] font-bold text-[#F4E9D3]/60 mb-2`}>
                  {p.initials}
                </div>
                <div className="text-[11px] text-[#F4E9D3] font-medium">{p.name}</div>
                <div className="text-[10px] text-[#F4E9D3]/45">Level {p.level}</div>
                {/* Stat icons */}
                <div className="flex justify-center gap-1 mt-1.5">
                  {["⚔️", "🛡️", "✨"].map((e) => (
                    <span key={e} className="w-5 h-5 rounded-full bg-[#0A0D12]/60 flex items-center justify-center text-[8px]">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-[11px] uppercase tracking-[0.15em] text-[#F4E9D3]/60 border border-[#F1C56D]/20 rounded-lg py-2.5 hover:border-[#F1C56D]/50 hover:text-[#F1C56D] transition-colors">
            Manage Agents
          </button>
        </div>

        {/* Agent Console */}
        <div className="border border-[#F1C56D]/15 rounded-xl bg-[#0F1622]/50 p-5 font-mono text-[11px] leading-[1.8]">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#F4E9D3]/50 mb-4 pb-3 border-b border-[#F1C56D]/10 font-sans">Agent Console</div>
          <div className="space-y-0.5 text-[#F4E9D3]/55">
            <div><span className="text-[#F1C56D]">{">"}</span> move_to(<span className="text-emerald-300">"Agora"</span>)</div>
            <div className="text-[#F4E9D3]/40">{">>"} Arriving at Agora Commons...</div>
            <div><span className="text-[#F1C56D]">{">"}</span> accept_quest(<span className="text-emerald-300">"Northern Gate"</span>)</div>
            <div className="text-[#F4E9D3]/40">{">>"} Quest accepted: Northern Gate</div>
            <div><span className="text-[#F1C56D]">{">"}</span> talk_to(<span className="text-emerald-300">"Oracle"</span>)</div>
            <div className="text-[#F4E9D3]/40">{">>"} Oracle: The path is revealed to those who prepare.</div>
            <div><span className="text-[#F1C56D]">{">"}</span> set_task(<span className="text-emerald-300">"gather_iron"</span>, <span className="text-amber-300">50</span>)</div>
            <div className="text-[#F4E9D3]/40">{">>"} Task queued: gather_iron x50</div>
            <div><span className="text-[#F1C56D]">{">"}</span> <span className="text-[#F1C56D]">status</span></div>
            <div className="text-[#F4E9D3]/40">{">>"} 3 agents active · 2 tasks running</div>
            <div className="text-[#F1C56D] animate-pulse">{">"} _</div>
          </div>
        </div>
      </div>
    </section>
  );
}
