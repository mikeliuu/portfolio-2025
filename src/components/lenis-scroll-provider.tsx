"use client";

import ReactLenis from "lenis/react";
import { FC, useEffect, useRef } from "react";

interface LenisScrollProviderProps {
	children: React.ReactNode;
}

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
	const lenisRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<ReactLenis
			ref={lenisRef}
			root
			options={{ lerp: 0.1, duration: 1, smoothWheel: true }}
		>
			{children}
		</ReactLenis>
	);
};

export default LenisScrollProvider;
