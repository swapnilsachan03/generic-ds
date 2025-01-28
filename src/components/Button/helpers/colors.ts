import { ButtonColor } from "../Button";

export const getSolidButtonColors = (color: ButtonColor) => {
  switch (color) {
    case "neutral":
      return "bg-black hover:bg-neutral-950 dark:bg-white dark:hover:bg-neutral-300 text-white dark:text-black";

    case "teal":
      return "bg-teal-600 hover:bg-teal-700 dark:bg-teal-400 dark:hover:bg-teal-500 text-white dark:text-black";

    case "red":
      return "bg-red-600 hover:bg-red-700 dark:bg-red-400 dark:hover:bg-red-500 text-white dark:text-black";

    case "cyan":
      return "bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-black";
  }
};

export const getOutlineButtonColors = (color: ButtonColor) => {
  switch (color) {
    case "neutral":
      return "border-black dark:border-white hover:bg-neutral-400/10 text-black dark:text-white";

    case "teal":
      return "border-teal-600 dark:border-teal-400 hover:bg-teal-400/10 text-teal-600 dark:text-teal-400";

    case "red":
      return "border-red-600 dark:border-red-400 hover:bg-red-400/10 text-red-600 dark:text-red-400";

    case "cyan":
      return "border-cyan-600 dark:border-cyan-400 hover:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400";
  }
};

export const getGhostButtonColors = (color: ButtonColor) => {
  switch (color) {
    case "neutral":
      return "hover:bg-neutral-400/10 text-black dark:text-white";

    case "teal":
      return "hover:bg-teal-400/10 text-teal-600 dark:text-teal-400";

    case "red":
      return "hover:bg-red-400/10 text-red-600 dark:text-red-400";

    case "cyan":
      return "hover:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400";
  }
};
