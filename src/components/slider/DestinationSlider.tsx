"use client";

import React from "react";
import { DestinationCard, Slider } from "@/components";

import { destinationData } from "@/data/destinationData";
import { DestinationDataInterface } from "@/types/destination";

function DestinationSlider() {
  return (
    <>
      <Slider
        sliderData={destinationData as DestinationDataInterface[]}
        className="mb-12 max-w-72 p-0.5"
        spaceBetween={16}
      >
        {(item: DestinationDataInterface, idx: number) => (
          <DestinationCard key={item?.id || idx} destination={item} />
        )}
      </Slider>
    </>
  );
}

export default DestinationSlider;
