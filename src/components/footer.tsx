import OnlineStatus from "@/components/online-status";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="mx-auto w-full flex flex-row justify-between items-center px-[5vw] lg:px-[10vw] py-6">
			<p className="text-lg text-foreground">©{currentYear} Mike Liu</p>

			<OnlineStatus className="col-span-1 w-max self-center text-lg px-4 py-2" />
		</footer>
	);
}
