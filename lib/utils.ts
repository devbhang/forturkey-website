import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const parseWalletAddr = (value: string) => {
	return String(value).substring(0, 5) + "..." + String(value).substring(38);
};
