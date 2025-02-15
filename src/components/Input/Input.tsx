import React from "react";

import { inputColors } from "./helpers/colors";
import { inputVariants } from "./helpers/variants";
import { inputSizes } from "./helpers/size";

export type InputColor = "teal" | "cyan" | "red" | "neutral";
export type InputSize = "small" | "medium" | "large";
export type InputVariant = "flushed" | "outline";

export interface InputProps {
  color?: InputColor;
  size?: InputSize;
  variant?: InputVariant;
}

export const Input = ({
  color = "neutral",
  variant = "flushed",
  size = "medium",
  ...props
}: InputProps & Omit<React.ComponentProps<"input">, "size">) => {
  const baseClass =
    "relative w-full text-black dark:text-white bg-transparent transition ease-linear duration-200 focus:outline-none";

  const colorClass = inputColors[color];
  const variantClass = inputVariants[variant];
  const sizeClass = inputSizes[size];

  const inputClass = [baseClass, colorClass, sizeClass, variantClass].join(" ");

  return <input className={inputClass} {...props} />;
};

export default Input;
