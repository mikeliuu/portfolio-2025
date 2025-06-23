import { Link } from "@/components/shared/link";

export default function NotFound() {
	return (
		<div className="w-full h-[calc(100vh_-_85px)] flex flex-col justify-center items-center m-auto">
			<h1 className="text-9xl mb-8">404</h1>

			<Link href="/" variant="button" theme="dark">
				Return to Home
			</Link>
		</div>
	);
}
