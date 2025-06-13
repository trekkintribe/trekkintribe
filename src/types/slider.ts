import { ReactNode } from "react";

export interface SliderInterface {
  sliderData: any[];
  children?: ReactNode | ((item: any, idx: number) => ReactNode);
  slidesPerView?: number | "auto";
  breakpoint?: { [width: number]: object };
  slideWidth?: number;
  spaceBetween?: number;
  className?: string;
  loop?: boolean;
  pagination?: boolean;
  navigation?: boolean;
}
