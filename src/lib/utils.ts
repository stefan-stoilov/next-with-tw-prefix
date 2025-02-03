import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({
  prefix: "tw-",
});

/**
 * Classname helper function.
 * @see https://ui.shadcn.com/docs/installation/manual
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
