import Avatar, { AvatarProps } from "./Avatar";
import { Color } from "../shared/types";
import { overlapMap } from "./helpers/overlaps";

export interface AvatarGroupProps {
  avatars: (AvatarProps & { id: string })[];
  max?: number;
  size?: AvatarProps["size"];
  shape?: AvatarProps["shape"];
  color?: Color;
  showTooltip?: boolean;
  className?: string;
  randomizeColor?: boolean;
}

const AvatarGroup = ({
  avatars,
  max,
  size = "medium",
  shape = "circle",
  color,
  showTooltip = false,
  className,
  randomizeColor = false,
}: AvatarGroupProps) => {
  const displayAvatars = max ? avatars.slice(0, max) : avatars;
  const remainingCount = max ? Math.max(0, avatars.length - max) : 0;
  const overlap = overlapMap[size];

  return (
    <div className={`flex items-center ${className || ""}`}>
      {displayAvatars.map((avatar, index) => (
        <div
          key={avatar.id}
          className={index > 0 ? overlap : ""}
          title={showTooltip ? avatar.name : undefined}
        >
          <Avatar
            size={size}
            shape={shape}
            color={color || avatar.color}
            randomizeColor={randomizeColor}
            {...avatar}
          />
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          className={overlap}
          title={
            showTooltip
              ? avatars
                  .slice(max)
                  .map(a => a.name)
                  .join(", ")
              : undefined
          }
        >
          <Avatar
            size={size}
            shape={shape}
            color={color || "neutral"}
            name={`+${remainingCount}`}
            fallback="initials"
            randomizeColor={randomizeColor}
          />
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
