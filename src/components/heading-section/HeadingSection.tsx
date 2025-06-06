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
  tag: Tag,
  children,
  className,
  title,
  description,
}: HeadingSectionProps) {
  return (
    <>
      <div className={`${className}`}>
        <Tag>{title}</Tag>
        <p>{description}</p>
      </div>
    </>
  );
}
