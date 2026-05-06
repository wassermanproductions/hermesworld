import { Play } from "lucide-react";
import { Sigil } from "./Sigil";
import heroImg from "@/assets/hero-village.jpg";
import sigilPedestal from "@/assets/sigil-pedestal.jpg";
import wordmarkImg from "@/assets/hermesworld-wordmark.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden -mt-[68px]">
      {/* Background art */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="HermesWorld village plaza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/10 to-obsidian/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,9,14,0.7)_100%)]" />
      </div>

      {/* Top gold hairline under nav */}
      <div className="absolute top-[68px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 pt-[140px] pb-24 md:pt-[170px] md:pb-32 min-h-[100vh] flex flex-col items-center text-center">
        <h1 className="sr-only">HermesWorld</h1>
        <img
          src={wordmarkImg}
          alt="HermesWorld"
          className="w-full max-w-[1200px] drop-shadow-[0_6px_40px_rgba(0,0,0,0.85)]"
        />

        {/* Diamond underline ornament is built into WordmarkHorizontal */}

        {/* Spacer pushes CTAs to bottom */}
        <div className="flex-1" />

        {/* CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-5 mb-4">
          <a
            href="#preview"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-md border border-gold/45 bg-obsidian/75 backdrop-blur-sm text-parchment hover:bg-obsidian/90 transition-colors"
          >
            <span className="w-7 h-7 rounded-full border border-gold/60 flex items-center justify-center">
              <Play className="w-3 h-3 fill-gold text-gold" />
            </span>
            <span className="font-display text-[22px] tracking-wide">Watch Preview</span>
          </a>
          <a
            href="https://hermes-world.ai/play/"
            className="inline-flex items-center gap-4 px-10 py-4 rounded-md btn-gold shadow-[0_10px_40px_-10px_rgba(241,197,109,0.6)]"
          >
            <span className="font-display text-[22px] text-obsidian tracking-wide">Play Now</span>
            <Sigil size={22} />
          </a>
        </div>
      </div>

      {/* Floating medallion bottom-right */}
      <div className="hidden md:block absolute bottom-8 right-8 w-[120px] h-[120px] z-10">
        <div className="absolute inset-0 blur-2xl bg-gold/40 rounded-full" />
        <img
          src={sigilPedestal}
          alt=""
          className="relative w-full h-full object-contain drop-shadow-[0_0_40px_rgba(241,197,109,0.6)]"
        />
      </div>
    </section>
  );
}
