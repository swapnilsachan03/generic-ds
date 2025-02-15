import { ButtonColor, ButtonVariant } from "../Button";

export const solidButtonColors: Record<ButtonColor, string> = {
  neutral:
    "bg-neutral-700 hover:bg-black dark:bg-white dark:hover:bg-neutral-300 text-white dark:text-black",
  teal: "bg-teal-600 hover:bg-teal-700 dark:bg-teal-400 dark:hover:bg-teal-500 text-white dark:text-black",
  red: "bg-red-600 hover:bg-red-700 dark:bg-red-400 dark:hover:bg-red-500 text-white dark:text-black",
  cyan: "bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-black",
};

export const outlineButtonColors: Record<ButtonColor, string> = {
  neutral:
    "border-black dark:border-white hover:bg-neutral-400/10 text-black dark:text-white border-[1px]",
  teal: "border-teal-600 dark:border-teal-400 hover:bg-teal-400/10 text-teal-600 dark:text-teal-400 border-[1px]",
  red: "border-red-600 dark:border-red-400 hover:bg-red-400/10 text-red-600 dark:text-red-400 border-[1px]",
  cyan: "border-cyan-600 dark:border-cyan-400 hover:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border-[1px]",
};

export const ghostButtonColors: Record<ButtonColor, string> = {
  neutral: "hover:bg-neutral-400/10 text-black dark:text-white",
  teal: "hover:bg-teal-400/10 text-teal-600 dark:text-teal-400",
  red: "hover:bg-red-400/10 text-red-600 dark:text-red-400",
  cyan: "hover:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400",
};

export const variantColorMap: Record<
  ButtonVariant,
  Record<ButtonColor, string>
> = {
  solid: solidButtonColors,
  outline: outlineButtonColors,
  ghost: ghostButtonColors,
};
