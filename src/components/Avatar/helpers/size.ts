import { AvatarSize } from "../Avatar";
export const sizeMap: Record<AvatarSize, string> = {
  "xx-small": "w-6 text-xs",
  "x-small": "w-8 text-sm",
  small: "w-10 text-base",
  medium: "w-12 text-lg",
  large: "w-14 text-xl",
};

export const iconSizeMap: Record<AvatarSize, number> = {
  "xx-small": 14,
  "x-small": 18,
  small: 20,
  medium: 24,
  large: 28,
};
