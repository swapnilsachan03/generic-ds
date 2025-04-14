import React from "react";
import { Color } from "../shared/types";
import { inputColors } from "./helpers/colors";
import { inputVariants } from "./helpers/variants";
import { inputSizes } from "./helpers/size";

export type InputColor = Color;
export type InputSize = "small" | "medium" | "large";
export type InputVariant = "flushed" | "outline";

export interface InputProps {
  color?: InputColor;
  size?: InputSize;
  variant?: InputVariant;
  icon?: React.ReactNode;
}

const Input = ({
  color = "neutral",
  variant = "flushed",
  size = "medium",
  icon,
  ...props
}: InputProps & Omit<React.ComponentProps<"input">, "size">) => {
  const baseClass =
    "relative w-full text-black dark:text-white bg-transparent transition ease-linear duration-200 focus:outline-none";

  const colorClass = inputColors[color];
  const variantClass = inputVariants[variant];
  const sizeClass = inputSizes[size];

  const inputClass = [baseClass, colorClass, sizeClass, variantClass].join(" ");

  return (
    <div className="relative flex items-center">
      {icon && (
        <div className="absolute left-2 flex items-center justify-center text-neutral-500">
          {icon}
        </div>
      )}

      <input className={`${inputClass} ${icon ? "pl-8" : ""}`} {...props} />
    </div>
  );
};

export default Input;
