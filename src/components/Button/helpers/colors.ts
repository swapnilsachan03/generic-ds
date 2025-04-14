import { ButtonColor, ButtonVariant } from "../Button";

export const solidButtonColors: Record<ButtonColor, string> = {
  neutral:
    "bg-black hover:bg-neutral-700 dark:bg-white dark:hover:bg-neutral-300 text-white dark:text-black",
  red: "bg-red-600 hover:bg-red-700 dark:bg-red-400 dark:hover:bg-red-500 text-white dark:text-black",
  orange:
    "bg-orange-600 hover:bg-orange-700 dark:bg-orange-400 dark:hover:bg-orange-500 text-white dark:text-black",
  amber:
    "bg-amber-600 hover:bg-amber-700 dark:bg-amber-400 dark:hover:bg-amber-500 text-white dark:text-black",
  yellow:
    "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-black",
  lime: "bg-lime-600 hover:bg-lime-700 dark:bg-lime-400 dark:hover:bg-lime-500 text-white dark:text-black",
  green:
    "bg-green-600 hover:bg-green-700 dark:bg-green-400 dark:hover:bg-green-500 text-white dark:text-black",
  emerald:
    "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-400 dark:hover:bg-emerald-500 text-white dark:text-black",
  teal: "bg-teal-600 hover:bg-teal-700 dark:bg-teal-400 dark:hover:bg-teal-500 text-white dark:text-black",
  cyan: "bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-black",
  sky: "bg-sky-600 hover:bg-sky-700 dark:bg-sky-400 dark:hover:bg-sky-500 text-white dark:text-black",
  blue: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 text-white dark:text-black",
  indigo:
    "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500 text-white dark:text-black",
  violet:
    "bg-violet-600 hover:bg-violet-700 dark:bg-violet-400 dark:hover:bg-violet-500 text-white dark:text-black",
  purple:
    "bg-purple-600 hover:bg-purple-700 dark:bg-purple-400 dark:hover:bg-purple-500 text-white dark:text-black",
  fuchsia:
    "bg-fuchsia-600 hover:bg-fuchsia-700 dark:bg-fuchsia-400 dark:hover:bg-fuchsia-500 text-white dark:text-black",
  pink: "bg-pink-600 hover:bg-pink-700 dark:bg-pink-400 dark:hover:bg-pink-500 text-white dark:text-black",
  rose: "bg-rose-600 hover:bg-rose-700 dark:bg-rose-400 dark:hover:bg-rose-500 text-white dark:text-black",
  slate:
    "bg-slate-600 hover:bg-slate-700 dark:bg-slate-400 dark:hover:bg-slate-500 text-white dark:text-black",
  gray: "bg-gray-600 hover:bg-gray-700 dark:bg-gray-400 dark:hover:bg-gray-500 text-white dark:text-black",
  zinc: "bg-zinc-600 hover:bg-zinc-700 dark:bg-zinc-400 dark:hover:bg-zinc-500 text-white dark:text-black",
  stone:
    "bg-stone-600 hover:bg-stone-700 dark:bg-stone-400 dark:hover:bg-stone-500 text-white dark:text-black",
};

export const outlineButtonColors: Record<ButtonColor, string> = {
  neutral:
    "border-black dark:border-white hover:bg-neutral-400/10 text-black dark:text-white border-[1px]",
  red: "border-red-600 dark:border-red-400 hover:bg-red-400/10 text-red-600 dark:text-red-400 border-[1px]",
  orange:
    "border-orange-600 dark:border-orange-400 hover:bg-orange-400/10 text-orange-600 dark:text-orange-400 border-[1px]",
  amber:
    "border-amber-600 dark:border-amber-400 hover:bg-amber-400/10 text-amber-600 dark:text-amber-400 border-[1px]",
  yellow:
    "border-yellow-600 dark:border-yellow-400 hover:bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 border-[1px]",
  lime: "border-lime-600 dark:border-lime-400 hover:bg-lime-400/10 text-lime-600 dark:text-lime-400 border-[1px]",
  green:
    "border-green-600 dark:border-green-400 hover:bg-green-400/10 text-green-600 dark:text-green-400 border-[1px]",
  emerald:
    "border-emerald-600 dark:border-emerald-400 hover:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border-[1px]",
  teal: "border-teal-600 dark:border-teal-400 hover:bg-teal-400/10 text-teal-600 dark:text-teal-400 border-[1px]",
  cyan: "border-cyan-600 dark:border-cyan-400 hover:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border-[1px]",
  sky: "border-sky-600 dark:border-sky-400 hover:bg-sky-400/10 text-sky-600 dark:text-sky-400 border-[1px]",
  blue: "border-blue-600 dark:border-blue-400 hover:bg-blue-400/10 text-blue-600 dark:text-blue-400 border-[1px]",
  indigo:
    "border-indigo-600 dark:border-indigo-400 hover:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border-[1px]",
  violet:
    "border-violet-600 dark:border-violet-400 hover:bg-violet-400/10 text-violet-600 dark:text-violet-400 border-[1px]",
  purple:
    "border-purple-600 dark:border-purple-400 hover:bg-purple-400/10 text-purple-600 dark:text-purple-400 border-[1px]",
  fuchsia:
    "border-fuchsia-600 dark:border-fuchsia-400 hover:bg-fuchsia-400/10 text-fuchsia-600 dark:text-fuchsia-400 border-[1px]",
  pink: "border-pink-600 dark:border-pink-400 hover:bg-pink-400/10 text-pink-600 dark:text-pink-400 border-[1px]",
  rose: "border-rose-600 dark:border-rose-400 hover:bg-rose-400/10 text-rose-600 dark:text-rose-400 border-[1px]",
  slate:
    "border-slate-600 dark:border-slate-400 hover:bg-slate-400/10 text-slate-600 dark:text-slate-400 border-[1px]",
  gray: "border-gray-600 dark:border-gray-400 hover:bg-gray-400/10 text-gray-600 dark:text-gray-400 border-[1px]",
  zinc: "border-zinc-600 dark:border-zinc-400 hover:bg-zinc-400/10 text-zinc-600 dark:text-zinc-400 border-[1px]",
  stone:
    "border-stone-600 dark:border-stone-400 hover:bg-stone-400/10 text-stone-600 dark:text-stone-400 border-[1px]",
};

export const ghostButtonColors: Record<ButtonColor, string> = {
  neutral: "hover:bg-neutral-400/10 text-black dark:text-white",
  red: "hover:bg-red-400/10 text-red-600 dark:text-red-400",
  orange: "hover:bg-orange-400/10 text-orange-600 dark:text-orange-400",
  amber: "hover:bg-amber-400/10 text-amber-600 dark:text-amber-400",
  yellow: "hover:bg-yellow-400/10 text-yellow-600 dark:text-yellow-400",
  lime: "hover:bg-lime-400/10 text-lime-600 dark:text-lime-400",
  green: "hover:bg-green-400/10 text-green-600 dark:text-green-400",
  emerald: "hover:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400",
  teal: "hover:bg-teal-400/10 text-teal-600 dark:text-teal-400",
  cyan: "hover:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400",
  sky: "hover:bg-sky-400/10 text-sky-600 dark:text-sky-400",
  blue: "hover:bg-blue-400/10 text-blue-600 dark:text-blue-400",
  indigo: "hover:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400",
  violet: "hover:bg-violet-400/10 text-violet-600 dark:text-violet-400",
  purple: "hover:bg-purple-400/10 text-purple-600 dark:text-purple-400",
  fuchsia: "hover:bg-fuchsia-400/10 text-fuchsia-600 dark:text-fuchsia-400",
  pink: "hover:bg-pink-400/10 text-pink-600 dark:text-pink-400",
  rose: "hover:bg-rose-400/10 text-rose-600 dark:text-rose-400",
  slate: "hover:bg-slate-400/10 text-slate-600 dark:text-slate-400",
  gray: "hover:bg-gray-400/10 text-gray-600 dark:text-gray-400",
  zinc: "hover:bg-zinc-400/10 text-zinc-600 dark:text-zinc-400",
  stone: "hover:bg-stone-400/10 text-stone-600 dark:text-stone-400",
};

export const variantColorMap: Record<
  ButtonVariant,
  Record<ButtonColor, string>
> = {
  solid: solidButtonColors,
  outline: outlineButtonColors,
  ghost: ghostButtonColors,
};
