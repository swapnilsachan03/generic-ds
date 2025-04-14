export type SkeletonVariant = "circle" | "rectangle" | "pill";
export type SkeletonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SkeletonAnimation = "pulse" | "wave";

interface SkeletonProps {
  variant?: SkeletonVariant;
  size?: SkeletonSize;
  animation?: SkeletonAnimation;
  isFullWidth?: boolean;
  width?: number | string;
  height?: number;
  className?: string;
}

const sizeMap: Record<SkeletonSize, { height: number; width: number }> = {
  xs: { height: 12, width: 80 },
  sm: { height: 16, width: 120 },
  md: { height: 20, width: 200 },
  lg: { height: 24, width: 280 },
  xl: { height: 32, width: 360 },
};

const Skeleton = ({
  variant = "rectangle",
  size = "md",
  animation = "pulse",
  width: widthProp,
  height,
  isFullWidth = false,
  className,
}: SkeletonProps) => {
  const baseClasses = "bg-neutral-200/70 dark:bg-neutral-600/40";

  const animationClasses =
    animation === "pulse"
      ? "animate-pulse"
      : "relative overflow-hidden before:absolute before:inset-0 before:animate-[wave_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent";

  const variantClasses = {
    circle: "rounded-full",
    rectangle: "rounded-md",
    pill: "rounded-full",
  }[variant];

  const defaultSize = sizeMap[size];

  const widthValue = widthProp ?? defaultSize.width;
  const heightValue =
    height ?? (variant === "circle" ? widthValue : defaultSize.height);

  const dimensionStyle = isFullWidth
    ? { width: "100%", height: `${heightValue}px` }
    : {
        width: typeof widthValue === "number" ? `${widthValue}px` : widthValue,
        height: `${heightValue}px`,
      };

  const classes = [
    baseClasses,
    variantClasses,
    animationClasses,
    isFullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} style={dimensionStyle}></div>;
};

export default Skeleton;
