import path from "path";
import { MDXData } from "@/types";
import { Project, ProjectMetadata } from "@/types/project";
import { getMDXData } from "@/lib/markdown";

export function getProjects(): MDXData<ProjectMetadata>[] {
	// get all MDX files from the projects directory
	return getMDXData(path.join(process.cwd(), "src", "content", "projects"));
}

export function getProjectBySlug(slug: string): Project | undefined {
	const projects = getProjects();

	const projectIndex = projects.findIndex((project) => project.slug === slug);

	if (projectIndex === -1) {
		return undefined;
	}

	const prevSlug = projects[projectIndex - 1]?.slug || "";
	const nextSlug = projects[projectIndex + 1]?.slug || "";

	return {
		...projects[projectIndex],
		prevSlug,
		nextSlug,
	};
}
