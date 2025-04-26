import { SelectColor, SelectVariant } from "../Select";

export const solidSelectColors: Record<SelectColor, string> = {
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

export const outlineSelectColors: Record<SelectColor, string> = {
  neutral:
    "border-[1px] !border-black dark:border-!white hover:bg-neutral-400/10 text-black dark:text-white",
  red: "border-[1px] !border-red-600 dark:!border-red-400 hover:bg-red-400/10 text-red-600 dark:text-red-400",
  orange:
    "border-[1px] !border-orange-600 dark:!border-orange-400 hover:bg-orange-400/10 text-orange-600 dark:text-orange-400",
  amber:
    "border-[1px] !border-amber-600 dark:!border-amber-400 hover:bg-amber-400/10 text-amber-600 dark:text-amber-400",
  yellow:
    "border-[1px] !border-yellow-600 dark:!border-yellow-400 hover:bg-yellow-400/10 text-yellow-600 dark:text-yellow-400",
  lime: "border-[1px] !border-lime-600 dark:!border-lime-400 hover:bg-lime-400/10 text-lime-600 dark:text-lime-400",
  green:
    "border-[1px] !border-green-600 dark:!border-green-400 hover:bg-green-400/10 text-green-600 dark:text-green-400",
  emerald:
    "border-[1px] !border-emerald-600 dark:!border-emerald-400 hover:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400",
  teal: "border-[1px] !border-teal-600 dark:!border-teal-400 hover:bg-teal-400/10 text-teal-600 dark:text-teal-400",
  cyan: "border-[1px] !border-cyan-600 dark:!border-cyan-400 hover:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400",
  sky: "border-[1px] !border-sky-600 dark:!border-sky-400 hover:bg-sky-400/10 text-sky-600 dark:text-sky-400",
  blue: "border-[1px] !border-blue-600 dark:!border-blue-400 hover:bg-blue-400/10 text-blue-600 dark:text-blue-400",
  indigo:
    "border-[1px] !border-indigo-600 dark:!border-indigo-400 hover:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400",
  violet:
    "border-[1px] !border-violet-600 dark:!border-violet-400 hover:bg-violet-400/10 text-violet-600 dark:text-violet-400",
  purple:
    "border-[1px] !border-purple-600 dark:!border-purple-400 hover:bg-purple-400/10 text-purple-600 dark:text-purple-400",
  fuchsia:
    "border-[1px] !border-fuchsia-600 dark:!border-fuchsia-400 hover:bg-fuchsia-400/10 text-fuchsia-600 dark:text-fuchsia-400",
  pink: "border-[1px] !border-pink-600 dark:!border-pink-400 hover:bg-pink-400/10 text-pink-600 dark:text-pink-400",
  rose: "border-[1px] !border-rose-600 dark:!border-rose-400 hover:bg-rose-400/10 text-rose-600 dark:text-rose-400",
  slate:
    "border-[1px] !border-slate-600 dark:!border-slate-400 hover:bg-slate-400/10 text-slate-600 dark:text-slate-400",
  gray: "border-[1px] !border-gray-600 dark:!border-gray-400 hover:bg-gray-400/10 text-gray-600 dark:text-gray-400",
  zinc: "border-[1px] !border-zinc-600 dark:!border-zinc-400 hover:bg-zinc-400/10 text-zinc-600 dark:text-zinc-400",
  stone:
    "border-[1px] !border-stone-600 dark:!border-stone-400 hover:bg-stone-400/10 text-stone-600 dark:text-stone-400",
};

export const ghostSelectColors: Record<SelectColor, string> = {
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

export const flushedSelectColors: Record<SelectColor, string> = {
  neutral:
    "border-neutral-500 hover:border-neutral-700 dark:border-neutral-400 dark:hover:border-neutral-300 text-black dark:text-white",
  red: "border-red-500 hover:border-red-700 dark:border-red-400 dark:hover:border-red-300 text-red-600 dark:text-red-400",
  orange:
    "border-orange-500 hover:border-orange-700 dark:border-orange-400 dark:hover:border-orange-300 text-orange-600 dark:text-orange-400",
  amber:
    "border-amber-500 hover:border-amber-700 dark:border-amber-400 dark:hover:border-amber-300 text-amber-600 dark:text-amber-400",
  yellow:
    "border-yellow-500 hover:border-yellow-700 dark:border-yellow-400 dark:hover:border-yellow-300 text-yellow-600 dark:text-yellow-400",
  lime: "border-lime-500 hover:border-lime-700 dark:border-lime-400 dark:hover:border-lime-300 text-lime-600 dark:text-lime-400",
  green:
    "border-green-500 hover:border-green-700 dark:border-green-400 dark:hover:border-green-300 text-green-600 dark:text-green-400",
  emerald:
    "border-emerald-500 hover:border-emerald-700 dark:border-emerald-400 dark:hover:border-emerald-300 text-emerald-600 dark:text-emerald-400",
  teal: "border-teal-500 hover:border-teal-700 dark:border-teal-400 dark:hover:border-teal-300 text-teal-600 dark:text-teal-400",
  cyan: "border-cyan-500 hover:border-cyan-700 dark:border-cyan-400 dark:hover:border-cyan-300 text-cyan-600 dark:text-cyan-400",
  sky: "border-sky-500 hover:border-sky-700 dark:border-sky-400 dark:hover:border-sky-300 text-sky-600 dark:text-sky-400",
  blue: "border-blue-500 hover:border-blue-700 dark:border-blue-400 dark:hover:border-blue-300 text-blue-600 dark:text-blue-400",
  indigo:
    "border-indigo-500 hover:border-indigo-700 dark:border-indigo-400 dark:hover:border-indigo-300 text-indigo-600 dark:text-indigo-400",
  violet:
    "border-violet-500 hover:border-violet-700 dark:border-violet-400 dark:hover:border-violet-300 text-violet-600 dark:text-violet-400",
  purple:
    "border-purple-500 hover:border-purple-700 dark:border-purple-400 dark:hover:border-purple-300 text-purple-600 dark:text-purple-400",
  fuchsia:
    "border-fuchsia-500 hover:border-fuchsia-700 dark:border-fuchsia-400 dark:hover:border-fuchsia-300 text-fuchsia-600 dark:text-fuchsia-400",
  pink: "border-pink-500 hover:border-pink-700 dark:border-pink-400 dark:hover:border-pink-300 text-pink-600 dark:text-pink-400",
  rose: "border-rose-500 hover:border-rose-700 dark:border-rose-400 dark:hover:border-rose-300 text-rose-600 dark:text-rose-400",
  slate:
    "border-slate-500 hover:border-slate-700 dark:border-slate-400 dark:hover:border-slate-300 text-slate-600 dark:text-slate-400",
  gray: "border-gray-500 hover:border-gray-700 dark:border-gray-400 dark:hover:border-gray-300 text-gray-600 dark:text-gray-400",
  zinc: "border-zinc-500 hover:border-zinc-700 dark:border-zinc-400 dark:hover:border-zinc-300 text-zinc-600 dark:text-zinc-400",
  stone:
    "border-stone-500 hover:border-stone-700 dark:border-stone-400 dark:hover:border-stone-300 text-stone-600 dark:text-stone-400",
};

export const variantColorMap: Record<
  SelectVariant,
  Record<SelectColor, string>
> = {
  solid: solidSelectColors,
  outline: outlineSelectColors,
  ghost: ghostSelectColors,
  flushed: flushedSelectColors,
  "outline-input": outlineSelectColors,
};
