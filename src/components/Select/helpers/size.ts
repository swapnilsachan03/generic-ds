import { SelectSize } from "../Select";

export const selectSizes: Record<SelectSize, string> = {
  small: "h-7 px-1 text-xs",
  medium: "h-8 px-1.5 text-sm",
  large: "h-9 px-2 text-base",
};

export const selectOptionSizes: Record<SelectSize, string> = {
  small: "px-3 py-1.5 text-xs max-w-xs",
  medium: "px-3 py-1.5 text-sm max-w-sm",
  large: "px-4 py-2 text-base max-w-md",
};
