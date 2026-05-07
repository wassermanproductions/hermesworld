import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { FeatureStrip } from "@/components/landing/FeatureStrip";
import { Zones } from "@/components/landing/Zones";
import { Agents } from "@/components/landing/Agents";
import { VideoPreview } from "@/components/landing/VideoPreview";
import { Sigils } from "@/components/landing/Sigils";
import { FinalCTA } from "@/components/landing/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HermesWorld — Your AI workspace is becoming a world." },
      {
        name: "description",
        content:
          "HermesWorld is a persistent agent RPG inside Hermes Workspace. Explore six zones, command AI companions, complete quests, and collect Hermes Sigils.",
      },
      { property: "og:title", content: "HermesWorld — Persistent Agent RPG" },
      {
        property: "og:description",
        content:
          "Step into a playable low-poly world where humans and AI agents share zones, quests, and progression.",
      },
      {
        property: "og:image",
        content: "https://hermes-world.ai/assets/hermesworld/zones/zone-3.jpg",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-black">
      <main>
        <Hero />
        <SectionBlend />
        <FeatureStrip />
        <SectionBlend />
        <Zones />
        <SectionBlend />
        <Agents />
        <SectionBlend />
        <VideoPreview />
        <SectionBlend />
        <Sigils />
        <SectionBlend />
        <FinalCTA />
      </main>
    </div>
  );
}

function SectionBlend() {
  return (
    <div className="relative z-10 -mt-24 -mb-24 h-48 pointer-events-none" style={{
      background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.95) 35%, #000000 50%, rgba(0,0,0,0.95) 65%, transparent 100%)",
    }} />
  );
}
