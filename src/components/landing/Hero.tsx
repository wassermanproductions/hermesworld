import { Play } from "lucide-react";
import { Sigil } from "./Sigil";
import heroImg from "@/assets/hero-village.jpg";
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
      <div className="relative max-w-[1400px] mx-auto px-6 pt-[60px] pb-24 md:pt-[80px] md:pb-32 min-h-[100vh] flex flex-col items-center text-center">
        <h1 className="sr-only">HermesWorld</h1>

        {/* Primary wordmark logo */}
        <img
          src={wordmarkImg}
          alt="HermesWorld"
          className="w-full max-w-[1100px] select-none"
          style={{
            filter:
              "drop-shadow(0 2px 0 rgba(0,0,0,0.45)) drop-shadow(0 12px 40px rgba(0,0,0,0.6)) drop-shadow(0 0 60px rgba(241,197,109,0.25))",
          }}
          draggable={false}
        />

        {/* Spacer pushes CTAs to bottom */}
        <div className="flex-1" />

        {/* CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
          <a
            href="#preview"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-md border border-gold/45 bg-obsidian/70 backdrop-blur-sm text-parchment hover:border-gold/70 transition-colors"
          >
            <span className="w-6 h-6 rounded-full border border-gold/60 flex items-center justify-center">
              <Play className="w-2.5 h-2.5 fill-gold text-gold" />
            </span>
            <span className="font-display text-[18px] font-normal">Watch Preview</span>
          </a>
          <a
            href="https://hermes-world.ai/play/"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-md btn-gold"
          >
            <span className="font-display text-[18px] text-obsidian">Play Now</span>
            <Sigil size={18} />
          </a>
        </div>
      </div>

    </section>
  );
}
