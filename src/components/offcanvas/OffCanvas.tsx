import React, { ReactNode } from "react";

function OffCanvas({
  children,
  title,
  className,
}: {
  children: ReactNode;
  title: string | ReactNode;
  className?: string;
}) {
  return (
    <div className={`drawer ${className}`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" hidden />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="drawer-button btn p-1.5 btn-ghost"
          aria-label="open drawer"
        >
          {title}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="relative min-h-full w-80 bg-base-200 p-4">
          {/* Sidebar content here */}
          {/* close button */}
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="absolute top-2 right-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 cursor-pointer text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </label>
          {children}
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
