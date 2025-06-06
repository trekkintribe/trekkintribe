import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 grid h-screen w-full place-items-center bg-black">
      <span className="loading size-14 loading-ring"></span>
    </div>
  );
}
