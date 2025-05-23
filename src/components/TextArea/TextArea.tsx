import React from "react";
import { Color } from "../shared/types";
import { textAreaColors } from "./helpers/colors";
import { textAreaVariants } from "./helpers/variants";
import { textAreaSizes } from "./helpers/size";

export type TextAreaColor = Color;
export type TextAreaSize = "small" | "medium" | "large";
export type TextAreaVariant = "flushed" | "outline";

export interface TextAreaProps {
  color?: TextAreaColor;
  size?: TextAreaSize;
  variant?: TextAreaVariant;
  rows?: number;
  resizeX?: boolean;
  resizeY?: boolean;
  disableResize?: boolean;
}

const TextArea = ({
  color = "neutral",
  variant = "flushed",
  size = "medium",
  rows = 3,
  resizeX = false,
  resizeY = false,
  disableResize = false,
  ...props
}: TextAreaProps & Omit<React.ComponentProps<"textarea">, "size">) => {
  const baseClass =
    "relative w-full text-black dark:text-white bg-transparent transition ease-linear duration-200 focus:outline-none";

  const colorClass = textAreaColors[color];
  const variantClass = textAreaVariants[variant];
  const sizeClass = textAreaSizes[size];
  const resizeClass = disableResize ? "resize-none" : "";
  const resizeXClass = resizeX ? "resize-x" : "";
  const resizeYClass = resizeY ? "resize-y" : "";

  const textAreaClass = [
    baseClass,
    colorClass,
    sizeClass,
    variantClass,
    resizeClass,
    resizeXClass,
    resizeYClass,
  ].join(" ");

  return <textarea className={textAreaClass} rows={rows} {...props} />;
};

export default TextArea;
