import previewImg from "@/assets/preview-section.png";

export function VideoPreview() {
  return (
    <section id="preview" className="relative w-full bg-black">
      <div className="relative w-full max-w-[1536px] mx-auto">
        <img
          src={previewImg}
          alt="See HermesWorld in action — Live systems, real agents, a world that reacts"
          className="w-full h-auto block"
          draggable={false}
        />

        {/* Watch Preview button overlay */}
        <a
          href="#preview"
          className="absolute cursor-pointer"
          style={{ top: '68%', left: '2.5%', width: '22%', height: '8%' }}
          aria-label="Watch Preview"
        />
      </div>
    </section>
  );
}