import { MDXData } from "@/types";

export interface ProjectMetadata {
	name: string;
	year: string;
	client: string;
	tag: string;
	description: string;
	thumbnailUrl: string;
	mediaUrl?: string;
	url?: string;
}

export interface Project extends MDXData<ProjectMetadata> {
	prevSlug: string;
	nextSlug: string;
}
