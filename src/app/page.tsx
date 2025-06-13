import React from "react";
import { HeroSection, HeadingSection, DestinationSlider } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection img="/images/banner-image.webp">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">
            Share your trekking experiences with the world
          </h1>
          <p className="py-6">
            Connect with other trekkers, share your stories, and get inspired by
            others.
          </p>
        </div>
      </HeroSection>

      <HeadingSection
        tag="h2"
        title="trending treks"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae voluptatum atque maxime vero veniam velit illo molestias eveniet alias magni"
      >
        <DestinationSlider />
      </HeadingSection>
    </main>
  );
}
