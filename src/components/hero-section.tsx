"use client";

import { useEffect, useRef } from "react";
import HandDrawingCircle from "@/components/shared/hand-drawing-circle";
import SplitText from "@/components/shared/split-text";
import { motion } from "framer-motion";

const animate = {
	initial: {
		y: "100%",
	},
	whileInView: {
		y: 0,
	},
	transition: {
		type: "spring",
		duration: 2,
		bounce: 0,
		delay: 0.05,
	},
	viewport: {
		once: true,
	},
};

const MotionHandDrawingCircle = motion(HandDrawingCircle);

export function HeroSection() {
	const textRef = useRef<HTMLSpanElement | null>(null);
	const outlineRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (!textRef.current || !outlineRef.current) return;

		const updateOutlineWidth = () => {
			if (textRef.current && outlineRef.current) {
				const sclaedWidth = textRef.current.clientWidth * 1.1;

				outlineRef.current.style.width = `${sclaedWidth}px`;
			}
		};

		const resizeObserver = new ResizeObserver(() => {
			updateOutlineWidth();
		});

		if (textRef.current) {
			resizeObserver.observe(textRef.current);
		}

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<div className="px-[5vw] lg:px-[10vw] uppercase text-foreground text-wrap text-[12dvw] text-center leading-none h-[calc(100vh_-_80px)] flex justify-center items-center">
			<h1>
				<div className="relative">
					<SplitText
						ref={textRef}
						initial={animate.initial}
						whileInView={animate.whileInView}
						transition={animate.transition}
						viewport={animate.viewport}
						text="Frontend"
					/>

					<MotionHandDrawingCircle
						ref={outlineRef}
						fill="orange"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							type: "spring",
							duration: 2,
							bounce: 0,
							deplay: 1,
						}}
						viewport={animate.viewport}
						className="absolute -top-4 -left-3 sm:-top-10 sm:-left-6 w-full h-auto -z-10"
					/>
				</div>

				<SplitText
					initial={animate.initial}
					whileInView={animate.whileInView}
					transition={animate.transition}
					viewport={animate.viewport}
					text="Focused"
				/>
			</h1>
		</div>
	);
}
