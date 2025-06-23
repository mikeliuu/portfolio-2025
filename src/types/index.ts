export interface PageProps {
	params: { slug: string };
	searchParams: object;
}

export enum Path {
	Projects = "/projects/",
}

export interface MDXData<MDXMetadata> {
	slug: string;
	metadata: MDXMetadata;
	content: string;
}
