import React from "react";
import { getInputColors } from "./helpers/colors";

export type InputColor = "teal" | "cyan" | "neutral";
export type InputType = "text" | "password" | "email" | "number";
export type InputVariant = "flushed" | "outline";

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  color?: InputColor;
  variant?: InputVariant;
  type?: InputType;
  disabled?: boolean;
  required?: boolean;
}

export const Input = ({
  placeholder,
  color = "neutral",
  variant = "flushed",
  value,
  onChange,
  type,
  disabled,
  required,
}: InputProps) => {
  const baseClass =
    "relative w-full p-3 text-[13px] text-black dark:text-white bg-transparent transition ease-linear duration-200 focus:outline-none";

  let colorClass = "";

  switch (variant) {
    case "flushed":
      colorClass = getInputColors(color).concat(
        " border-b-[1px] border-b-neutral-300 dark:border-b-neutral-500"
      );
      break;

    case "outline":
      colorClass = getInputColors(color).concat(
        " border-[1px] rounded-sm border-neutral-300 dark:border-neutral-500"
      );
      break;
  }

  const inputClass = [baseClass, colorClass].join(" ");

  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      required={required}
      disabled={disabled}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      className={inputClass}
    />
  );
};

export default Input;
