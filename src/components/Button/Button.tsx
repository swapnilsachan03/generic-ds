import React from "react";

import {
  getGhostButtonColors,
  getOutlineButtonColors,
  getSolidButtonColors,
} from "./helpers/colors";
import { getButtonSize } from "./helpers/size";

export type ButtonColor = "teal" | "red" | "cyan" | "neutral";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonVariant = "solid" | "outline" | "ghost";

export interface ButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  type?: ButtonType;
  variant?: ButtonVariant;
  customBgColor?: string;
  customTextColor?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  label: string;
}

export const Button = ({
  size = "medium",
  color = "neutral",
  type = "button",
  variant = "solid",
  customBgColor,
  customTextColor,
  disabled = false,
  children,
  label,
  ...props
}: ButtonProps & React.ComponentProps<"button">) => {
  const baseClass =
    "flex items-center justify-center gap-2 font-medium rounded-sm transition ease-linear duration-200 cursor-pointer";

  let colorClass = "";

  switch (variant) {
    case "solid":
      colorClass = getSolidButtonColors(color);
      break;

    case "outline":
      colorClass = getOutlineButtonColors(color).concat(" border-[1px]");
      break;

    case "ghost":
      colorClass = getGhostButtonColors(color);
      break;
  }

  const sizeClass = getButtonSize(size);
  const disabledClass = disabled
    ? "opacity-60 pointer-events-none cursor-not-allowed"
    : "";

  const buttonClasses = [baseClass, colorClass, sizeClass, disabledClass].join(
    " "
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      style={{ backgroundColor: customBgColor, color: customTextColor }}
      {...props}
    >
      {children ? children : label}
    </button>
  );
};
