import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";
import { Path } from "@/types";

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export const getMetadata = (
	title: string,
	desc: string,
	url: string
): Metadata => {
	return {
		title,
		description: desc,
		alternates: {
			canonical: url,
		},
		openGraph: {
			title,
			description: desc,
			url,
		},
		twitter: {
			title,
			description: desc,
		},
	};
};

export const getHref = (path: Path, slug: string) => {
	return `${path}${slug}`;
};
