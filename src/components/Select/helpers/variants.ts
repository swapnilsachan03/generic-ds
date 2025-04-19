import { SelectVariant } from "../Select";

export const selectVariants: Record<SelectVariant, string> = {
  solid: "border-none rounded-md shadow-sm",
  outline: "border-[1px] rounded-md shadow-sm",
  ghost: "border-none rounded-md",
  flushed: "border-b-[1px] focus:shadow-[0_1px_0_0]",
};
