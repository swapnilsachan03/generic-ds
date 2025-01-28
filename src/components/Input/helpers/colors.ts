import { InputColor } from "../Input";

export const getInputColors = (color: InputColor) => {
  switch (color) {
    case "neutral":
      return "focus:border-neutral-500 dark:focus:border-neutral-300";

    case "teal":
      return "focus:border-teal-500 dark:focus:border-teal-500";

    case "cyan":
      return "focus:border-cyan-500 dark:focus:border-cyan-500";
  }
};
