import React from "react";
import { OffCanvas } from "@/components";

function MobileAppBar() {
  return (
    <OffCanvas
      className="md:hidden"
      title={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      }
    >
      <ul className="menu text-base-content">
        <li>
          <a>Sidebar Item 1</a>
        </li>
      </ul>
    </OffCanvas>
  );
}

export default MobileAppBar;
