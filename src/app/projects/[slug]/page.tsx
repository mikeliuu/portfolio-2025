import { Link } from "@/components/shared/link";
import { cn, getHref, getMetadata } from "@/lib/utils";
import { PageProps, Path } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { X, ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { getProjectBySlug, getProjects } from "@/app/projects/utils";

export function generateStaticParams() {
	const projects = getProjects();

	return projects.map((post) => ({
		slug: post.slug,
	}));
}

export function generateMetadata({ params: { slug } }: PageProps): Metadata {
	const project = getProjectBySlug(slug);

	if (!project) {
		console.error("Project not found for slug:", slug);

		return {};
	}

	const { name: title, description } = project.metadata;

	const url = getHref(Path.Projects, slug);

	return getMetadata(title, description, url);
}

export default function ProjectPage({ params: { slug } }: PageProps) {
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	const { year, client, tag, name, description, url, thumbnailUrl, mediaUrl } =
		project.metadata;

	const projectInfo = [
		{
			label: "Year",
			value: year,
		},
		{
			label: "Client",
			value: client,
		},
		{
			label: "Type",
			value: tag,
		},
	];

	const navigation = [
		{
			slug: project.prevSlug ? getHref(Path.Projects, project.prevSlug) : "",
			component: <ArrowLeft />,
		},
		{
			slug: project.nextSlug ? getHref(Path.Projects, project.nextSlug) : "",
			component: <ArrowRight />,
		},
	];

	return (
		<div className="relative h-full min-h-screen py-12 px-[5vw] lg:px-[10vw]">
			<Link
				href="/"
				variant="icon"
				theme="secondary"
				className="fixed top-12 right-[5vw] lg:right-[10vw] z-10"
			>
				<X className="stroke-blur" />
			</Link>

			<div className="me-[5vw] md:me-[10vw] mt-10">
				<h1 className="text-3xl mb-8">{name}</h1>
				<p className="text-lg mb-12">{description}</p>

				<ul className="grid grid-cols-1 sm:grid-cols-2 mb-12">
					{projectInfo.map(({ label, value }) => (
						<li key={value} className="grid grid-cols-5 gap-2 col-start-1">
							<span className="col-span-2">{label}:</span>
							<span className="col-span-3">{value}</span>
						</li>
					))}
				</ul>
			</div>

			<div
				className={cn("grid grid-cols-2 mb-6", {
					"grid-cols-1": !url,
				})}
			>
				{!!url && (
					<Link
						href={url}
						variant="button"
						theme="dark"
						className="w-max flex flex-row flex-nowrap justify-start stroke-foreground hover:stroke-background"
					>
						<p>Explore</p>

						<ArrowUpRight />
					</Link>
				)}

				<div className="flex justify-end items-center gap-4">
					{navigation.map(({ slug, component }) => (
						<Link
							key={slug}
							href={slug}
							variant="icon"
							theme="dark-reverse"
							disabled={!slug}
							className="w-max stroke-foreground hover:stroke-background"
						>
							{component}
						</Link>
					))}
				</div>
			</div>

			<div className="relative aspect-phone w-full">
				<Image
					src={mediaUrl ?? thumbnailUrl}
					alt={`${name} project image`}
					fill
					className="text-sm text-background w-full h-full object-cover rounded-2xl"
				/>
			</div>
		</div>
	);
}
