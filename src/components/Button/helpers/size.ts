import { AllowedSizes } from "../Button";

export const getButtonSize = (size: AllowedSizes) => {
  switch (size) {
    case "small":
      return "h-6 px-2 text-xs";
    case "medium":
      return "h-8 px-3 text-sm";
    case "large":
      return "h-10 px-4 text-lg";
    default:
      return "h-8 px-3 text-sm";
  }
};
