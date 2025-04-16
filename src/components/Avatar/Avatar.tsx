import { User } from "lucide-react";
import { Color } from "../shared/types";

import { colorMap } from "./helpers/colors";
import { shapeMap } from "./helpers/shape";
import { iconSizeMap, sizeMap } from "./helpers/size";

export type AvatarSize = "xx-small" | "x-small" | "small" | "medium" | "large";
export type AvatarShape = "circle" | "rounded";
export type AvatarFallbackType = "initials" | "icon";

export interface AvatarProps {
  id?: string;
  name?: string;
  color?: Color;
  shape?: AvatarShape;
  size?: AvatarSize;
  icon?: string;
  fallback?: AvatarFallbackType;
  className?: string;
}

const getInitials = (name: string) => {
  const parts = name.split(" ");
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Avatar = ({
  id,
  name,
  color = "neutral",
  shape = "circle",
  size = "medium",
  icon,
  fallback = "initials",
  className,
  ...props
}: AvatarProps) => {
  const sizeClasses = sizeMap[size];
  const shapeClass = shapeMap[shape];
  const { bg, text } = colorMap[color];
  const iconSize = iconSizeMap[size];

  const baseClasses =
    "aspect-square flex items-center justify-center transition-colors duration-200";
  const colorClasses = icon ? "" : `${bg} ${text}`;

  const classes = [
    baseClasses,
    sizeClasses,
    shapeClass,
    colorClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const renderContent = () => {
    if (icon) {
      return (
        <img
          src={icon}
          alt={name || "avatar"}
          className={`object-cover ${shapeClass} w-full h-full`}
        />
      );
    }

    if (fallback === "initials" && name) {
      return <span className="font-semibold">{getInitials(name)}</span>;
    }

    return <User size={iconSize} />;
  };

  return (
    <div className={classes} {...props}>
      {renderContent()}
    </div>
  );
};

export default Avatar;
