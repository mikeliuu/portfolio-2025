import { forwardRef, SVGProps } from "react";

interface HandDrawingCircleProps extends SVGProps<SVGSVGElement> {
	fill?: string;
}

const HandDrawingCircle = forwardRef<SVGSVGElement, HandDrawingCircleProps>(
	({ fill = "#000000", ...props }, ref) => {
		return (
			<svg
				{...props}
				ref={ref}
				version="1.0"
				xmlns="http://www.w3.org/2000/svg"
				width="403.000000pt"
				height="104.000000pt"
				viewBox="0 0 403.000000 104.000000"
				preserveAspectRatio="xMidYMid meet"
			>
				<g
					transform="translate(0.000000,104.000000) scale(0.100000,-0.100000)"
					fill={fill}
					stroke="none"
				>
					<path
						d="M2155 970 c-500 -27 -1016 -97 -1378 -186 -807 -199 -956 -432 -374
-584 460 -120 1394 -185 2162 -150 603 28 1021 98 1250 209 112 55 171 107
181 157 26 139 -135 219 -525 259 -414 42 -1411 74 -1411 45 0 -5 6 -10 13
-10 8 0 60 -5 118 -10 57 -6 300 -21 539 -35 495 -28 614 -38 825 -65 161 -21
234 -39 306 -75 58 -30 71 -46 67 -87 -9 -96 -287 -202 -688 -262 -379 -57
-866 -78 -1465 -65 -440 11 -740 37 -1120 100 -355 58 -545 131 -545 209 0
131 584 329 1250 424 471 68 799 91 1302 91 402 0 458 4 382 28 -39 13 -688
17 -889 7z"
					/>
				</g>
			</svg>
		);
	}
);

HandDrawingCircle.displayName = "HandDrawingCircle";

export default HandDrawingCircle;
