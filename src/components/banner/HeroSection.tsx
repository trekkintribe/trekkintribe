import React, { ReactNode } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";

function HeroSection({
  className,
  img,
  imgDes,
  children,
}: {
  className?: string;
  img?: string;
  imgDes?: string;
  children?: ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`relative hero min-h-[620px] ${className}`}
    >
      {img && (
        <div className="relative hero-overlay">
          <Image
            src={img}
            alt={imgDes || "Banner Image"}
            fill
            priority
            fetchPriority="high"
            className="object-cover"
          />
        </div>
      )}
      <div className="absolute inset-0 flex size-full items-center justify-center bg-base-100/40 text-center">
        {children}
      </div>
    </motion.section>
  );
}

export default HeroSection;
