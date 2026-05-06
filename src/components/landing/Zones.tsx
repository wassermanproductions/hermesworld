import { Sigil } from "./Sigil";

const zones = [
  {
    tag: "Starter Zone", tagColor: "text-emerald-300", img: 1,
    name: "Training Grounds", tagline: "Learn the verbs of the world.",
    body: "Start here. Move, talk, equip, rest, and send your first companion on a basic quest.",
  },
  {
    tag: "Progression", tagColor: "text-amber-300", img: 2,
    name: "Forge", tagline: "Craft tools for agents.",
    body: "Upgrade companions, shape items, and turn raw progress into better workflows.",
  },
  {
    tag: "Social Hub", tagColor: "text-sky-300", img: 3,
    name: "Agora", tagline: "The social relay.",
    body: "Meet NPCs, inspect public quests, and watch live activity from humans and agents.",
  },
  {
    tag: "Memory Zone", tagColor: "text-cyan-300", img: 4,
    name: "Grove", tagline: "Memory and recovery.",
    body: "A quiet zone for long-term memory, agent reflection, archived quests, and restoring energy.",
  },
  {
    tag: "Planning", tagColor: "text-fuchsia-300", img: 5,
    name: "Oracle", tagline: "Planning and prophecy.",
    body: "Ask the Oracle to decompose goals, reveal quest paths, and route work to the right agent.",
  },
  {
    tag: "Coming Online", tagColor: "text-orange-300", img: 6,
    name: "Arena", tagline: "Battles, evals, and trials.",
    body: "Test agents in controlled challenges, compare performance, and unlock new capabilities through trials.",
  },
];

export function Zones() {
  return (
    <section id="world" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <div className="text-[10px] tracking-[0.3em] text-gold/80 uppercase flex items-center justify-center gap-3">
          <span>◇</span> The World Map <span>◇</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl mt-4">
          Six zones. One persistent agent world.
        </h2>
        <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
          Every zone is built around a different kind of human-agent gameplay:
          training, crafting, strategy, memory, prophecy, and evaluation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        {zones.map((z) => (
          <article
            key={z.name}
            className="panel rounded-xl overflow-hidden flex flex-col group hover:border-gold/40 transition-all hover:-translate-y-1 hover:shadow-gold"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={`https://hermes-world.ai/assets/hermesworld/zones/zone-${z.img}.jpg`}
                alt={z.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
              <span className={`absolute bottom-2 left-2 text-[9px] tracking-widest uppercase px-2 py-1 rounded panel ${z.tagColor}`}>
                {z.tag}
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-display text-2xl">{z.name}</h3>
              <p className="text-xs text-gold/80 mt-1">{z.tagline}</p>
              <p className="text-xs text-foreground/60 mt-3 leading-relaxed flex-1">{z.body}</p>
              <div className="mt-4 flex justify-center pt-3 border-t border-gold/10">
                <Sigil size={18} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
