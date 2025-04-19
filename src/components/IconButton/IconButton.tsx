import React from "react";
import { Color } from "../shared/types";
import { variantColorMap } from "../Button/helpers/colors";
import { iconButtonSizes } from "./helpers/size";

export type IconButtonColor = Color;
export type IconButtonSize = "small" | "medium" | "large";
export type IconButtonVariant = "solid" | "outline" | "ghost";

export interface IconButtonProps {
  size?: IconButtonSize;
  color?: IconButtonColor;
  variant?: IconButtonVariant;
  disabled?: boolean;
  icon: React.ReactNode;
  ariaLabel: string;
}

const IconButton = ({
  size = "medium",
  color = "neutral",
  variant = "solid",
  disabled = false,
  icon,
  ariaLabel,
  ...props
}: IconButtonProps & Omit<React.ComponentProps<"button">, "size">) => {
  const baseClass =
    "flex items-center justify-center rounded-md transition ease-linear duration-200 cursor-pointer";

  const variantColorClass = variantColorMap[variant][color];
  const sizeClass = iconButtonSizes[size];
  const disabledClass = disabled
    ? "opacity-60 pointer-events-none cursor-not-allowed"
    : "";

  const buttonClasses = [
    baseClass,
    variantColorClass,
    sizeClass,
    disabledClass,
  ].join(" ");

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
