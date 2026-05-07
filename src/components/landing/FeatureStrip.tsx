import featureStripImg from "@/assets/feature-strip-section.png";

export function FeatureStrip() {
  return (
    <section className="relative w-full bg-black">
      <div className="relative w-full max-w-[1536px] mx-auto">
        <img src={featureStripImg} alt="Feature highlights" className="w-full h-auto block object-scale-down" draggable={false} />
      </div>
    </section>
  );
}
