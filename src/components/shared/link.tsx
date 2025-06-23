"use client";

import { useTransitionRouter } from "next-view-transitions";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const linkVariant = cva("", {
	variants: {
		variant: {
			icon: "rounded-full border-1.5 p-2",
			button: "rounded-full border-1.5 px-4 py-2 w-max text-center uppercase",
		},
		theme: {
			dark: "border-foreground text-foreground hover:bg-foreground hover:text-background",
			light:
				"border-background text-background hover:bg-background hover:text-foreground",
			"dark-reverse":
				"border-foreground bg-foreground text-background hover:bg-transparent hover:text-primary",
			secondary:
				"bg-background border-blur hover:bg-secondary-light hover:border-secondary-light",
		},
	},
	compoundVariants: [
		{
			variant: ["icon", "button"],
			class: "transition-colors duration-200",
		},
	],
});

const renderPageAnimation = () => {
	document.documentElement.animate(
		[
			{
				opactiy: 1,
				transform: "translateY(0)",
			},
			{
				opactiy: 0.2,
				transform: "translateY(-35%)",
			},
		],
		{
			duration: 1500,
			easing: "cubic-bezier(0.87, 0, 0.13, 1)",
			fill: "forwards",
			pseudoElement: "::view-transition-old(root)",
		}
	);

	document.documentElement.animate(
		[
			{
				clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
			},
			{
				clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
			},
		],
		{
			duration: 1500,
			easing: "cubic-bezier(0.87, 0, 0.13, 1)",
			fill: "forwards",
			pseudoElement: "::view-transition-new(root)",
		}
	);
};

interface LinkProps
	extends VariantProps<typeof linkVariant>,
		Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
		NextLinkProps {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	animationDisabled?: boolean;
}

export const Link: React.FC<LinkProps> = ({
	disabled = false,
	variant,
	theme,
	href,
	children,
	passHref,
	replace,
	scroll,
	prefetch,
	animationDisabled,
	className,
	...props
}) => {
	const router = useTransitionRouter();
	const lenis = useLenis();

	return (
		<NextLink
			{...props}
			aria-disabled={disabled}
			className={cn(
				linkVariant({ variant, theme }),
				{ "pointer-events-none cursor-not-allowed opacity-50": disabled },
				className
			)}
			legacyBehavior={passHref}
			scroll={scroll}
			replace={replace}
			prefetch={prefetch}
			passHref={passHref}
			href={href}
			onClick={(event) => {
				event.preventDefault();

				router.push(href.toString(), {
					...(animationDisabled
						? {}
						: { onTransitionReady: renderPageAnimation }),
				});

				if (animationDisabled) {
					const id = href.toString().replace("/", "");

					lenis?.scrollTo(id);
				}
			}}
		>
			{passHref ? <a {...props}>{children}</a> : children}
		</NextLink>
	);
};
