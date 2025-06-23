"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps extends MotionProps {
	text: string;
	className?: string;
}

const SplitText = React.forwardRef<HTMLSpanElement, SplitTextProps>(
	({ text, className, transition, ...motionProps }, ref) => {
		const delay = transition?.delay ?? 0;

		return (
			<span
				ref={ref}
				className={cn("inline-block overflow-y-hidden", className)}
			>
				{text.split("").map((char, index) => (
					<motion.span
						{...motionProps}
						transition={{
							...transition,
							delay: index * delay,
						}}
						key={index}
						className="inline-block"
					>
						{char === " " ? "\u00A0" : char}
					</motion.span>
				))}
			</span>
		);
	}
);

SplitText.displayName = "SplitText";

export default SplitText;
