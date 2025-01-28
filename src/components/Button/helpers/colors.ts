import { AllowedColors } from "../Button";

export const getButtonColors = (color: AllowedColors) => {
  let colors =
    "bg-black hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-100";

  switch (color) {
    case "teal":
      colors =
        "bg-teal-600 hover:bg-teal-700 dark:bg-teal-400 dark:hover:bg-teal-500 text-white dark:text-black";
      break;

    case "red":
      colors =
        "bg-red-600 hover:bg-red-700 dark:bg-red-400 dark:hover:bg-red-500 text-white dark:text-black";
      break;

    case "cyan":
      colors =
        "bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-black";
      break;
  }

  return colors;
};
