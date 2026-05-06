import { Sigil } from "./Sigil";

const zones = [
  {
    tag: "Starter Zone", tagColor: "text-emerald-300/90", img: 1,
    name: "Training Grounds", tagline: "Learn the verbs of the world.",
    body: "Start here. Move, talk, equip, rest, and send your first companion on a basic quest.",
  },
  {
    tag: "Progression", tagColor: "text-amber-300/90", img: 2,
    name: "Forge", tagline: "Craft tools for agents.",
    body: "Upgrade companions, shape items, and turn raw progress into better workflows.",
  },
  {
    tag: "Social Hub", tagColor: "text-sky-300/90", img: 3,
    name: "Agora", tagline: "The social relay.",
    body: "Meet NPCs, inspect public quests, and watch live activity from humans and agents.",
  },
  {
    tag: "Memory Zone", tagColor: "text-cyan-300/90", img: 4,
    name: "Grove", tagline: "Memory and recovery.",
    body: "A quiet zone for long-term memory, agent reflection, archived quests, and restoring energy.",
  },
  {
    tag: "Planning", tagColor: "text-fuchsia-300/90", img: 5,
    name: "Oracle", tagline: "Planning and prophecy.",
    body: "Ask the Oracle to decompose goals, reveal quest paths, and route work to the right agent.",
  },
  {
    tag: "Coming Online", tagColor: "text-orange-300/90", img: 6,
    name: "Arena", tagline: "Battles, evals, and trials.",
    body: "Test agents in controlled challenges, compare performance, and unlock new capabilities through trials.",
  },
];

export function Zones() {
  return (
    <section id="world" className="max-w-7xl mx-auto px-6 py-28">
      <div className="text-center mb-16">
        <div className="text-[10px] tracking-[0.35em] text-gold uppercase flex items-center justify-center gap-4 font-medium">
          <span className="w-8 h-px bg-gold/40" />
          <span>◇ The World Map ◇</span>
          <span className="w-8 h-px bg-gold/40" />
        </div>
        <h2 className="font-display text-[44px] md:text-[60px] mt-5 leading-[1.05] tracking-[-0.02em]">
          Six zones. <span className="italic text-gradient-gold">One persistent</span><br />agent world.
        </h2>
        <p className="mt-5 text-parchment/60 max-w-xl mx-auto text-[14px] leading-relaxed">
          Every zone is built around a different kind of human-agent gameplay:
          training, crafting, strategy, memory, prophecy, and evaluation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        {zones.map((z) => (
          <article
            key={z.name}
            className="panel-elevated rounded-xl overflow-hidden flex flex-col group hover:border-gold/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-gold"
          >
            <div className="relative aspect-[4/3.2] overflow-hidden">
              <img
                src={`https://hermes-world.ai/assets/hermesworld/zones/zone-${z.img}.jpg`}
                alt={z.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              <span className={`absolute bottom-2.5 left-2.5 text-[8px] tracking-[0.25em] uppercase px-2.5 py-1 rounded panel font-medium ${z.tagColor}`}>
                {z.tag}
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-display text-[26px] leading-tight">{z.name}</h3>
              <p className="text-[11px] text-gold/85 mt-1.5 italic">{z.tagline}</p>
              <p className="text-[12px] text-parchment/55 mt-3 leading-relaxed flex-1">{z.body}</p>
              <div className="mt-5 flex justify-center pt-4 border-t border-gold-soft">
                <Sigil size={20} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
