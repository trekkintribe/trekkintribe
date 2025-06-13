import dynamic from "next/dynamic";

export const HeroSection = dynamic(
  () => import("@/components/banner/HeroSection"),
  {
    ssr: false,
    loading: () => <p>Loading Hero...</p>,
  },
);
