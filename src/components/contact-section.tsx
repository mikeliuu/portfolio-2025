"use client";

import { linkVariant } from "@/components/shared/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Contact {
	name: string;
	url: string;
}

const contacts: Contact[] = [
	{
		name: "Email",
		url: "mailto:mikeliu058@gmail.com",
	},
	{
		name: "Github",
		url: "https://github.com/mikeliuu",
	},

	{
		name: "Linkedin",
		url: "https://www.linkedin.com/in/mikeliutw/",
	},
];

export function ContactSection() {
	return (
		<div
			id="contact"
			className="px-[5vw] lg:px-[10vw] py-12 bg-background relative"
		>
			<motion.div
				className="grid grid-cols-1 grid-rows-2 gap-2 mb-6 uppercase text-foreground text-wrap text-[3.5em] sm:text-[6em] md:text-[8em] leading-[1em]"
				initial={{ opacity: 0.25 }}
				whileInView={{ opacity: 1 }}
				transition={{ ease: "easeIn", duration: 0.5 }}
			>
				<p>Lets</p>

				<p>connect</p>
			</motion.div>

			<div className="flex flex-row flex-wrap justify-start gap-6">
				{contacts.map((contact) => (
					<motion.a
						key={contact.name}
						initial={{ opacity: 0.25 }}
						whileInView={{ opacity: 1 }}
						transition={{ ease: "easeIn", duration: 0.5 }}
						className={cn(
							"w-max justify-self-end",
							linkVariant({ variant: "button", theme: "dark" })
						)}
						href={contact.url}
						target="_blank"
						rel="noreferrer"
					>
						{contact.name}
					</motion.a>
				))}
			</div>
		</div>
	);
}
