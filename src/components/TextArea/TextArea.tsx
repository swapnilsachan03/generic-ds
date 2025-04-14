import React from "react";

import { textAreaColors } from "./helpers/colors";
import { textAreaVariants } from "./helpers/variants";
import { textAreaSizes } from "./helpers/size";

export type TextAreaColor = "teal" | "cyan" | "red" | "neutral";
export type TextAreaSize = "small" | "medium" | "large";
export type TextAreaVariant = "flushed" | "outline";

export interface TextAreaProps {
  color?: TextAreaColor;
  size?: TextAreaSize;
  variant?: TextAreaVariant;
  rows?: number;
}

const TextArea = ({
  color = "neutral",
  variant = "flushed",
  size = "medium",
  rows = 3,
  ...props
}: TextAreaProps & Omit<React.ComponentProps<"textarea">, "size">) => {
  const baseClass =
    "relative w-full text-black dark:text-white bg-transparent transition ease-linear duration-200 focus:outline-none resize-y";

  const colorClass = textAreaColors[color];
  const variantClass = textAreaVariants[variant];
  const sizeClass = textAreaSizes[size];

  const textAreaClass = [baseClass, colorClass, sizeClass, variantClass].join(
    " "
  );

  return <textarea className={textAreaClass} rows={rows} {...props} />;
};

export default TextArea;
