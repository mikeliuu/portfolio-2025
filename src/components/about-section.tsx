"use client";

import { motion } from "framer-motion";
import Section from "@/components/shared/section";

export function AboutSection() {
	return (
		<Section id="about" className="px-[5vw] lg:px-[10vw] bg-white relative grid grid-cols-1 md:grid-cols-2 lg:gap-4">
			<div>
				<motion.p
					className="uppercase text-secondary text-[1em] mb-2 lg:m-0"
					initial={{ opacity: 0.25 }}
					whileInView={{ opacity: 1 }}
					transition={{ ease: "easeIn", duration: 0.5 }}
				>
					About /
				</motion.p>
			</div>

			<motion.p
				className="text-primary text-lg lg:text-[1.5em]"
				initial={{ opacity: 0.25 }}
				whileInView={{ opacity: 1 }}
				transition={{ ease: "easeIn", duration: 0.5 }}
			>
				Highly accomplished Frontend Software Engineer with 4+ years of
				experience driving impactful web development using React, Next.js, and
				TypeScript. Proven ability to lead frontend initiatives, build scalable
				and user-centric applications, implement robust testing strategies, and
				optimize performance, resulting in significant improvements in user
				engagement, conversions, and development efficiency across diverse
				industries including e-commerce, SaaS and retail.
			</motion.p>
		</Section>
	);
}
