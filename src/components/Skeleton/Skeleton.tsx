export type SkeletonVariant = "circle" | "rectangle";

interface SkeletonProps {
  variant?: SkeletonVariant;
  isFullWidth?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

const Skeleton = ({
  variant = "rectangle",
  width = 100,
  height = 10,
  isFullWidth = false,
  className,
}: SkeletonProps) => {
  const baseClasses = "bg-neutral-300/40 dark:bg-neutral-500/50 animate-pulse";
  const variantClasses = variant === "circle" ? "rounded-full" : "rounded-lg";

  const classes = [baseClasses, variantClasses, className].join(" ");

  const styles = {
    width: isFullWidth ? "100%" : `${width}px`,
    height: `${height}px`,
  };

  return <div className={classes} style={styles}></div>;
};

export default Skeleton;
