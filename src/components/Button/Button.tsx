import React from "react";
import { Color } from "../shared/types";
import { variantColorMap } from "./helpers/colors";
import { buttonSizes } from "./helpers/size";

export type ButtonColor = Color;
export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonIconPosition = "left" | "right";

export interface ButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  disabled?: boolean;
  isFullWidth?: boolean;
  children?: React.ReactNode;
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPosition;
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
  iconPosition = "left",
  ...props
}: ButtonProps & React.ComponentProps<"button">) => {
  const baseClass =
    "flex items-center justify-center gap-2 font-medium rounded-md transition ease-linear duration-200";

  const variantColorClass = variantColorMap[variant][color];
  const sizeClass = buttonSizes[size];
  const disabledClass = disabled
    ? "opacity-60 pointer-events-none"
    : "cursor-pointer";
  const widthClass = isFullWidth ? "w-full" : "min-w-max";

  const buttonClasses = [
    baseClass,
    variantColorClass,
    sizeClass,
    disabledClass,
    widthClass,
  ].join(" ");

  const content = children ? children : label;

  const buttonWithIcon =
    iconPosition === "left" ? (
      <>
        {icon}
        {content}
      </>
    ) : (
      <>
        {content}
        {icon}
      </>
    );

  return (
    <div className={disabled ? "cursor-not-allowed" : ""}>
      <button className={buttonClasses} disabled={disabled} {...props}>
        {icon ? buttonWithIcon : content}
      </button>
    </div>
  );
};

export default Button;
