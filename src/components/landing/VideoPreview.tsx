import { Play } from "lucide-react";
import heroImg from "@/assets/zone-agora.jpg";

export function VideoPreview() {
  return (
    <section id="preview" className="max-w-[1240px] mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
        <div>
          <h2
            className="font-display text-[40px] md:text-[48px] leading-[1.05] text-parchment font-light"
          >
            See HermesWorld<br />in action.
          </h2>
          <p className="mt-4 text-[13px] text-parchment/50 leading-relaxed font-body font-normal">
            Live systems. Real agents.<br />A world that reacts.
          </p>
          <a
            href="#preview"
            className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-medium px-5 py-2.5 rounded border border-[#F1C56D]/40 text-[#F4E9D3]/80 hover:border-[#F1C56D] transition-colors"
          >
            Watch Preview <Play className="w-3 h-3 fill-current" />
          </a>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] gap-4">
          {/* Video placeholder */}
          <div className="relative rounded-xl overflow-hidden border border-[#F1C56D]/15 aspect-video">
            <img src={heroImg} alt="HermesWorld preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0A0D12]/40 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[#F4E9D3]/20 backdrop-blur flex items-center justify-center border border-[#F4E9D3]/30">
                <Play className="w-6 h-6 text-[#F4E9D3] fill-current ml-0.5" />
              </div>
            </div>
          </div>

          {/* Right panels */}
          <div className="space-y-4">
            <div className="border border-[#F1C56D]/15 rounded-xl bg-[#0F1622]/50 p-4">
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold font-body mb-1">Dashboard View</div>
              <div className="text-[11px] text-parchment/50 font-body font-normal">Strategize and manage your world.</div>
            </div>
            <div className="border border-[#F1C56D]/15 rounded-xl bg-[#0F1622]/50 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#F1C56D]/20 border border-[#F1C56D]/40 flex items-center justify-center text-[10px] text-[#F1C56D] font-bold">E</div>
                <div>
                  <div className="text-[12px] text-parchment font-medium font-body">Eric</div>
                  <div className="text-[10px] text-parchment/45 font-body">Level 20</div>
                </div>
              </div>
              <div className="flex gap-1.5">
                {[
                  { color: "bg-red-500", label: "HP", val: "100" },
                  { color: "bg-blue-500", label: "MP", val: "50" },
                  { color: "bg-green-500", label: "ST", val: "35" },
                  { color: "bg-purple-500", label: "XP", val: "72" },
                ].map(({ color, label, val }) => (
                  <div key={label} className={`flex-1 ${color}/80 rounded-md py-1.5 text-center`}>
                    <div className="text-[7px] text-white/70 font-bold">{label}</div>
                    <div className="text-[10px] text-white font-bold">{val}</div>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-[9px] text-parchment/40 font-body">1,240 / 2,000 XP</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold font-body mt-3">Agent HUD</div>
              <div className="text-[11px] text-parchment/50 font-body font-normal">Full control. Real-time information.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}