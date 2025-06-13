import React, { ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingSectionProps {
  tag: HeadingTag;
  children?: ReactNode;
  className?: string;
  title: string;
  description?: string;
}

export default function HeadingSection({
  tag: Tag = "h2",
  children,
  className,
  title,
  description,
}: HeadingSectionProps) {
  return (
    <>
      <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div
            className={
              children ? `mb-12 ${className ?? ""}` : (className ?? undefined)
            }
          >
            <span className="mb-2 block h-1 w-20 rounded-md bg-orange-500"></span>
            <Tag className="text-4xl font-semibold capitalize">{title}</Tag>
            {description && (
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
