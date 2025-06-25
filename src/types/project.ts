import { MDXData } from "@/types";

export interface ProjectMetadata {
	name: string;
	year: string;
	tag: string;
	description: string;
	thumbnailUrl: string;
	mediaUrl?: string;
	url?: string;
	client?: string;
}

export interface Project extends MDXData<ProjectMetadata> {
	prevSlug: string;
	nextSlug: string;
}
