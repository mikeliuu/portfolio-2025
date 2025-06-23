"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes, useState } from "react";
import fallbackImage from "/public/placeholder.webp";
interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
	src: string;
	alt: string;
	tag?: string;
}

export default function ProjectCard({
	src,
	alt,
	tag,
	className,
	...props
}: ProjectCardProps) {
	const [imageSrc, setImageSrc] = useState(src);

	return (
		<div
			className={cn("relative rounded-2xl w-full overflow-hidden", className)}
			{...props}
		>
			<div className="relative aspect-phone w-full">
				<Image
					src={imageSrc}
					alt={alt}
					fill
					className="text-sm text-background w-full h-full object-cover hover:scale-110 transition-all duration-500"
					onError={() => {
						setImageSrc(fallbackImage.src);
					}}
				/>
			</div>

			{tag && (
				<div className="absolute top-2 left-2 rounded-4xl py-1 px-3 bg-blur backdrop-blur-sm">
					<p className="text-xs text-background uppercase">{tag}</p>
				</div>
			)}
		</div>
	);
}
