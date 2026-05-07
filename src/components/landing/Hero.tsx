import heroLanding from "@/assets/hero-landing.png";
import hermesLogo from "@/assets/hermes-logo.jpg";
import { SpinningOrb } from "./SpinningOrb";

export function Hero() {
  return (
    <section id="top" className="relative w-full bg-black">
      {/* The hero image as background */}
      <div className="relative w-full max-w-[1536px] mx-auto">
        <img
          src={heroLanding}
          alt="HermesWorld — Step into a shared world of Hermes agents"
          className="w-full h-auto block object-scale-down"
          draggable={false}
        />

        {/* Spinning orb video overlay — covers the gameplay screenshot area */}
        <div
          className="absolute overflow-hidden bg-black"
          style={{ top: '12%', left: '44%', width: '56%', height: '88%' }}
        >
          <SpinningOrb />
          {/* Hermes logo overlaid on top portion of orb */}
          <img
            src={hermesLogo}
            alt="Hermes World"
            className="absolute w-[95%] h-auto pointer-events-none"
            style={{ mixBlendMode: 'lighten', top: '5%', left: '-10%' }}
            draggable={false}
          />
        </div>

        {/* Invisible clickable overlays positioned over the image buttons */}
        {/* Nav links — positioned over the nav text in the image */}
        <a href="#world" className="absolute opacity-0 hover:opacity-0" style={{ top: '2.5%', left: '30%', width: '5%', height: '5%' }} aria-label="World">World</a>
        <a href="#agents" className="absolute opacity-0 hover:opacity-0" style={{ top: '2.5%', left: '36%', width: '5.5%', height: '5%' }} aria-label="Agents">Agents</a>
        <a href="#sigils" className="absolute opacity-0 hover:opacity-0" style={{ top: '2.5%', left: '42.5%', width: '4.5%', height: '5%' }} aria-label="Sigils">Sigils</a>
        <a href="#preview" className="absolute opacity-0 hover:opacity-0" style={{ top: '2.5%', left: '48%', width: '5.5%', height: '5%' }} aria-label="Preview">Preview</a>
        <a href="#updates" className="absolute opacity-0 hover:opacity-0" style={{ top: '2.5%', left: '55%', width: '5.5%', height: '5%' }} aria-label="Updates">Updates</a>

        {/* ENTER THE WORLD button */}
        <a
          href="https://hermes-world.ai/play/"
          className="absolute cursor-pointer"
          style={{ top: '2%', left: '65%', width: '14%', height: '6%' }}
          aria-label="Enter the World"
        />

        {/* WATCH PREVIEW button */}
        <a
          href="#preview"
          className="absolute cursor-pointer"
          style={{ top: '2%', left: '80.5%', width: '14%', height: '6%' }}
          aria-label="Watch Preview"
        />
      </div>
    </section>
  );
}
