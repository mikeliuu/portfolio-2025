import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export default function Section({
	children,
	className,
	...props
}: SectionProps) {
	return (
		<div {...props} className={cn("rounded-b-4xl px-8 py-12", className)}>
			{children}
		</div>
	);
}
