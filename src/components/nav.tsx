"use client";

import { Link } from "@/components/shared/link";
import { usePathname } from "next/navigation";
import { House, Ellipsis } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const HOME_HREF = "/";

interface Menu {
	href: string;
	name: ReactNode;
	animationDisabled?: boolean;
}

const menus: Menu[] = [
	{
		href: "/projects",
		name: "Projects",
	},
	{
		href: "/#about",
		name: "About",
		animationDisabled: true,
	},
	{
		href: "/#contact",
		name: "Contact",
		animationDisabled: true,
	},
];

const menusWithHomePage: Menu[] = [
	{
		href: HOME_HREF,
		name: <House strokeWidth="1.5" />,
	},
	...menus,
];

export default function Nav() {
	const pathname = usePathname();
	const isHomePage = pathname === HOME_HREF;

	const filteredMenus = isHomePage ? menus : menusWithHomePage;

	return (
		<nav className="fixed top-6 px-[5vw] lg:px-[10vw] flex justify-center items-center w-full mx-auto z-50">
			<ul
				id="mobile-menu"
				className="flex sm:hidden w-max h-auto col-span-1 col-start-2 justify-evenly items-center rounded-full bg-blur text-background backdrop-filter backdrop-blur-lg p-0 sm:p-0.5 mx-auto"
			>
				<li className="flex justify-center items-center flex-row uppercase hover:bg-secondary-light hover:text-foreground stroke-background hover:stroke-foreground transition-colors duration-200 rounded-full px-4 py-2 cursor-pointer">
					<p className="mr-1">Menu</p>
					<Ellipsis strokeWidth="1.5" />
				</li>
			</ul>

			<ul
				id="desktop-menu"
				className="hidden sm:flex w-max h-auto col-span-1 col-start-2 justify-evenly items-center gap-1 rounded-full bg-blur text-background backdrop-filter backdrop-blur-lg p-0 sm:p-0.5 mx-auto"
			>
				{filteredMenus.map(({ href, name, animationDisabled }) => (
					<Link
						key={href}
						href={href}
						animationDisabled={isHomePage && animationDisabled}
						className={cn(
							"uppercase hover:bg-background hover:text-foreground stroke-background hover:stroke-foreground transition-colors duration-200 rounded-full px-4 py-2",
							{
								"text-foreground bg-background pointer-events-none":
									href === pathname,
							}
						)}
					>
						{name}
					</Link>
				))}
			</ul>
		</nav>
	);
}
