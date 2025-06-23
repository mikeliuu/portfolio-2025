import "../styles/globals.css";

import { ViewTransitions } from "next-view-transitions";
import type { Metadata } from "next";
import LenisScrollProvider from "@/components/lenis-scroll-provider";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Footer from "@/components/footer";

const outfitFont = localFont({
	src: "../fonts/outfit.ttf",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Mike Liu | Frontend Developer",
	description:
		"I build and optimize robust web applications using modern frontend technologies (React, Typescript), focusing on code quality, thorough testing, and delivering impactful user experiences",
	keywords: "Mike Liu, Frontend Developer, Portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en">
				<body
					className={cn(
						"antialiased bg-background text-foreground",
						outfitFont.className
					)}
				>
					<LenisScrollProvider>

						<main className="overflow-x-hidden w-full h-full">{children}</main>

						<Footer />
					</LenisScrollProvider>
				</body>
			</html>
		</ViewTransitions>
	);
}
