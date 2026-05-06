import agentsImg from "@/assets/agents-section.png";

export function Agents() {
  return (
    <section id="agents" className="relative w-full bg-black">
      <div className="relative w-full max-w-[1536px] mx-auto">
        <img
          src={agentsImg}
          alt="Your agents live in the world with you — Agent Companions, Autonomous Actions, Offline Progression"
          className="w-full h-auto block"
          draggable={false}
        />

        {/* Manage Agents button overlay */}
        <a
          href="#agents"
          className="absolute cursor-pointer"
          style={{ top: '82%', left: '30%', width: '30%', height: '6%' }}
          aria-label="Manage Agents"
        />
      </div>
    </section>
  );
}
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
            className="font-display text-[40px] md:text-[48px] leading-[1.05] text-parchment font-light"
          >
            Your agents<br />
            live in the<br />
            world with<br />
            you.
          </h2>
          <p className="mt-4 text-[13px] text-parchment/50 leading-relaxed font-body font-normal">
            They learn, act, and grow alongside you—online or offline.
          </p>

          <div className="mt-7 space-y-5">
            {features.map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-3">
                <div className="w-8 h-8 rounded-full border border-[#F1C56D]/30 flex items-center justify-center flex-none text-[#F1C56D]">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.15em] font-semibold font-body text-gold">{title}</div>
                  <div className="text-[11px] text-parchment/50 mt-0.5 leading-relaxed font-body font-normal">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Party panel */}
        <div className="border border-[#F1C56D]/15 rounded-xl bg-[#0F1622]/50 p-5">
          <div className="text-[10px] uppercase tracking-[0.2em] text-parchment/50 mb-4 pb-3 border-b border-gold/10 font-body font-semibold">Your Party</div>
          <div className="grid grid-cols-3 gap-3">
            {party.map((p) => (
              <div key={p.name} className="text-center">
                <div className={`w-full aspect-square rounded-lg bg-gradient-to-br ${p.color} border border-[#F1C56D]/15 flex items-center justify-center text-[20px] font-bold text-[#F4E9D3]/60 mb-2`}>
                  {p.initials}
                </div>
                <div className="text-[11px] text-parchment font-medium font-body">{p.name}</div>
                <div className="text-[10px] text-parchment/45 font-body">{p.level && `Level ${p.level}`}</div>
                {/* Stat icons */}
                <div className="flex justify-center gap-1 mt-1.5">
                  {["⚔️", "🛡️", "✨"].map((e) => (
                    <span key={e} className="w-5 h-5 rounded-full bg-[#0A0D12]/60 flex items-center justify-center text-[8px]">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-[11px] uppercase tracking-[0.15em] font-body font-medium text-parchment/60 border border-gold/20 rounded-lg py-2.5 hover:border-gold/50 hover:text-gold transition-colors">
            Manage Agents
          </button>
        </div>

        {/* Agent Console */}
        <div className="border border-[#F1C56D]/15 rounded-xl bg-[#0F1622]/50 p-5 font-mono text-[11px] leading-[1.8]">
          <div className="text-[10px] uppercase tracking-[0.2em] text-parchment/50 mb-4 pb-3 border-b border-gold/10 font-body font-semibold">Agent Console</div>
          <div className="space-y-0.5 text-parchment/55">
            <div><span className="text-gold">{">"}</span> move_to(<span className="text-verdigris">"Agora"</span>)</div>
            <div className="text-parchment/40">{">>"} Arriving at Agora Commons...</div>
            <div><span className="text-gold">{">"}</span> accept_quest(<span className="text-verdigris">"Northern Gate"</span>)</div>
            <div className="text-parchment/40">{">>"} Quest accepted: Northern Gate</div>
            <div><span className="text-gold">{">"}</span> talk_to(<span className="text-verdigris">"Oracle"</span>)</div>
            <div className="text-parchment/40">{">>"} Oracle: The path is revealed to those who prepare.</div>
            <div><span className="text-gold">{">"}</span> set_task(<span className="text-verdigris">"gather_iron"</span>, <span className="text-bronze">50</span>)</div>
            <div className="text-parchment/40">{">>"} Task queued: gather_iron x50</div>
            <div><span className="text-gold">{">"}</span> <span className="text-gold">status</span></div>
            <div className="text-parchment/40">{">>"} 3 agents active · 2 tasks running</div>
            <div className="text-gold animate-pulse">{">"} _</div>
          </div>
        </div>
      </div>
    </section>
  );
}
