import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { WorkSection } from "@/components/work-section";
import { getProjects } from "@/app/projects/utils";

export default function Home() {
	const projects = getProjects();
	
	return (
		<>
			<HeroSection />
			<AboutSection />
			<WorkSection projects={projects} />
			<ContactSection />
		</>
	);
}
