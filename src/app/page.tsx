// import Image from "next/image";
import { HeroSection } from "@/components";

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
    </main>
  );
}
