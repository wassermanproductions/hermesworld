import { Play, Globe, Shield, User } from "lucide-react";
import { Sigil } from "./Sigil";
import heroImg from "@/assets/hero-village.jpg";


export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden -mt-[68px]">
      {/* Background art */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="HermesWorld village plaza"
          className="w-full h-full object-cover brightness-125 contrast-75 saturate-90"
        />
        {/* Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(8,9,14,0.45)_100%)]" />
      </div>

      {/* Top gold hairline under nav */}
      <div className="absolute top-[68px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-[80px] pb-32 md:pt-[90px] md:pb-40 min-h-[92vh] flex flex-col items-center justify-start text-center">

        <h1 className="font-display text-[68px] md:text-[120px] lg:text-[160px] leading-[0.9] tracking-[0.04em] text-gradient-gold drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)]">
          HERMESWORLD
        </h1>

        {/* Divider with diamond */}
        <div className="mt-6 flex items-center gap-4 w-full max-w-xl">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <span className="text-gold/80 text-xs">◇</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        <p className="mt-7 max-w-2xl text-parchment/75 text-[15px] md:text-[17px] leading-relaxed">
          Step into a shared world of Hermes agents. Train, build, and quest with builders worldwide.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#preview"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-md btn-ghost-gold text-[13px] uppercase tracking-[0.2em]"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Watch Preview
          </a>
          <a
            href="https://hermes-world.ai/play/"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-md btn-gold font-semibold text-[13px] uppercase tracking-[0.2em]"
          >
            Play Now <Sigil size={16} />
          </a>
        </div>

        {/* Feature pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { Icon: Globe, label: "Browser Playable" },
            { Icon: Shield, label: "Progress Saves Locally" },
            { Icon: User, label: "No Signup Required" },
          ].map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-gold/25 bg-obsidian/50 backdrop-blur-sm text-[11px] uppercase tracking-[0.18em] text-parchment/75"
            >
              <Icon className="w-3.5 h-3.5 text-gold" /> {label}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
