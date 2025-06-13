import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { DestinationDataInterface } from "@/types/destination";

function DestinationCard({
  destination,
}: {
  destination: DestinationDataInterface;
}) {
  return (
    <div className="relative max-w-72 overflow-hidden rounded-xl ring-2 ring-gray-700 transition-colors">
      {destination.images?.card ? (
        <figure className="relative block h-96 w-full">
          <Image
            src={destination.images?.card}
            alt={destination?.name || ""}
            fill
            sizes="320"
            className="object-cover"
          />
        </figure>
      ) : (
        <div className="grid h-96 w-full animate-pulse place-items-center">
          <svg
            id="uuid-51245088-046f-416e-a4b8-b498321a8227"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 179.83 135.03"
            className="size-16 fill-gray-700 dark:fill-gray-400"
          >
            <g id="uuid-2b1326fa-0221-49bf-a1c2-19773f743f80">
              <path d="m89.46,134.97c-25.31,0-50.62-.07-75.92.05-5.43.03-9.99-1.23-12.42-6.43-2.28-4.89-.87-9.24,2.32-13.42,10.58-13.91,20.99-27.94,31.49-41.91,4.42-5.89,9.41-7.05,16.14-3.93,4.77,2.21,9.94,6.51,14.3,5.82,4.15-.65,7.5-6.53,11.15-10.17,8.71-8.7,17.37-17.44,26.06-26.14,7.51-7.52,14.19-7,20.31,1.58,17.88,25.03,35.71,50.1,53.64,75.1,3.03,4.23,4.58,8.55,2.03,13.42-2.54,4.85-6.92,6.11-12.16,6.08-25.64-.11-51.28-.05-76.92-.05Z" />
              <path d="m.08,22.64C.04,9.95,9.7.07,22.24,0c12.29-.07,22.77,10.23,22.74,22.34-.03,12.32-10.22,22.6-22.45,22.64C9.95,45.03.12,35.25.08,22.64Z" />
            </g>
          </svg>
        </div>
      )}

      <div className="absolute inset-0 z-[1] flex items-end bg-gradient-to-b from-transparent from-30% to-black">
        <div className="w-full space-y-3 p-3">
          <h4 className="mb-1 text-xl">{destination?.name}</h4>
          <p className="line-clamp-2 text-xs leading-tight text-gray-300">
            {destination?.trekOverview?.bestTime}
          </p>
          <div className="flex items-center gap-x-3">
            <Link
              href={destination?.url || "/"}
              className="flex-auto rounded-full bg-white/90 px-6 py-2 text-center text-sm font-semibold text-base-100 hover:bg-white"
            >
              {destination?.url ? "know more" : "Comming soon"}
            </Link>
            <button
              type="button"
              className="flex-none cursor-pointer rounded-full bg-gray-800 px-6 py-2 text-sm font-semibold"
            >
              {" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
