import React from "react";

import { variantColorMap } from "./helpers/colors";
import { buttonSizes } from "./helpers/size";

export type ButtonColor = "teal" | "red" | "cyan" | "neutral";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "solid" | "outline" | "ghost";

export interface ButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  disabled?: boolean;
  isFullWidth?: boolean;
  children?: React.ReactNode;
  label?: string;
  icon?: React.ReactNode;
}

const Button = ({
  size = "medium",
  color = "neutral",
  variant = "solid",
  disabled = false,
  isFullWidth = false,
  children,
  label,
  icon,
  ...props
}: ButtonProps & React.ComponentProps<"button">) => {
  const baseClass =
    "flex items-center justify-center gap-2 font-medium rounded-md transition ease-linear duration-200 cursor-pointer";

  const variantColorClass = variantColorMap[variant][color];
  const sizeClass = buttonSizes[size];
  const disabledClass = disabled
    ? "opacity-60 pointer-events-none cursor-not-allowed"
    : "";
  const widthClass = isFullWidth ? "w-full" : "min-w-max";

  const buttonClasses = [
    baseClass,
    variantColorClass,
    sizeClass,
    disabledClass,
    widthClass,
  ].join(" ");

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {icon && icon}
      {children ? children : label}
    </button>
  );
};

export default Button;
