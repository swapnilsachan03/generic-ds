import React from "react";
import { chipColors } from "./helpers/colors";
import { chipSizes } from "./helpers/size";
import { chipShapes } from "./helpers/shapes";

export type ChipColor = "teal" | "red" | "cyan" | "neutral";
export type ChipSize = "small" | "medium" | "large";
export type ChipVariant = "solid" | "outline";
export type ChipShape = "rounded" | "pill";

export interface ChipProps {
  color?: ChipColor;
  size?: ChipSize;
  variant?: ChipVariant;
  shape?: ChipShape;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const Chip = ({
  color = "neutral",
  size = "medium",
  variant = "solid",
  shape = "pill",
  icon,
  children,
  className,
  ...props
}: ChipProps) => {
  const baseClass =
    "inline-flex items-center font-medium transition-colors duration-200";
  const sizeClass = chipSizes[size];
  const shapeClass = chipShapes[shape];
  const bgClass =
    variant === "solid"
      ? "bg-[#f3f3f3] dark:bg-[#3f3f3f]"
      : "bg-transparent border border-current";
  const colorClass = chipColors[color];

  const chipClasses = [
    baseClass,
    bgClass,
    colorClass,
    sizeClass,
    shapeClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={chipClasses} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
};

export default Chip;
