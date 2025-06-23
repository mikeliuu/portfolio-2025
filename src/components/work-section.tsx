"use client";

import { motion } from "framer-motion";
import Section from "@/components/shared/section";
import { Link } from "@/components/shared/link";
import ProjectCard from "@/components/shared/project-card";
import { MDXData, Path } from "@/types";
import { getHref } from "@/lib/utils";
import { ProjectMetadata } from "@/types/project";

const animate = {
	initial: { opacity: 0.25, y: 10 },
	whileInView: { opacity: 1, y: 0 },
	transition: { ease: "easeInOut", duration: 0.5 },
};

export function WorkSection({
	projects,
}: {
	projects: MDXData<ProjectMetadata>[];
}) {
	return (
		<Section className="px-[5vw] lg:px-[10vw] bg-foreground mt-[-32px] pt-20 grid grid-cols-1 lg:grid-cols-2">
			<motion.div
				className="flex flex-nowrap flex-col sm:flex-row lg:flex-col  justify-between lg:justify-start gap-4 mb-12 lg:m-0"
				initial={{ opacity: 0.25 }}
				whileInView={{ opacity: 1 }}
				transition={{ ease: "easeIn", duration: 0.5 }}
			>
				<p className="uppercase text-background text-[1em]">Projects /</p>
			</motion.div>

			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 transition-colors duration-200">
				{projects.map((project) => {
					const { name, tag, thumbnailUrl } = project.metadata;

					return (
						<motion.li
							key={name}
							initial={animate.initial}
							whileInView={animate.whileInView}
							transition={animate.transition}
						>
							<Link href={getHref(Path.Projects, project.slug)} prefetch>
								<ProjectCard
									src={thumbnailUrl}
									alt={`${name} project image`}
									tag={tag}
								/>
							</Link>

							<motion.p
								className="text-background text-lg lg:text-[1.5em] mt-2"
								initial={animate.initial}
								whileInView={animate.whileInView}
								transition={animate.transition}
							>
								{name}
							</motion.p>
						</motion.li>
					);
				})}
			</ul>
		</Section>
	);
}
