import { getButtonColors } from "./helpers/colors";
import { getButtonSize } from "./helpers/size";

export type AllowedColors = "teal" | "red" | "cyan";
export type AllowedSizes = "small" | "medium" | "large";
export type AllowedButtonTypes = "button" | "submit" | "reset";

export interface ButtonProps {
  customBgColor?: string;
  customTextColor?: string;
  size?: AllowedSizes;
  color?: AllowedColors;
  type?: AllowedButtonTypes;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  size = "medium",
  color = "teal",
  type = "button",
  customBgColor,
  customTextColor,
  label,
  ...props
}: ButtonProps) => {
  const baseClass =
    "flex items-center justify-center gap-2 font-medium rounded-sm transition ease-linear duration-200 cursor-pointer";

  const colorClass = getButtonColors(color);
  const sizeClass = getButtonSize(size);

  const buttonClasses = [baseClass, colorClass, sizeClass].join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      style={{ backgroundColor: customBgColor, color: customTextColor }}
      {...props}
    >
      {label}
    </button>
  );
};
