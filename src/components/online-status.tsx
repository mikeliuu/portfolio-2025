"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

/**
 * Local time considering daylight saving time (DST)
 */
const isDST = (date: Date) => {
	const january = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
	const july = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();

	return Math.min(january, july) !== date.getTimezoneOffset();
};

/**
 * Summer time GMT+1
 */
const GMT_TIME = isDST(new Date()) ? 1 : 0;

const ONE_HOUR_IN_MS = 60 * 60 * 1000;

interface OnlineStatusProps {
	className?: string;
}

export default function OnlineStatus({ className }: OnlineStatusProps) {
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		const checkActiveStatus = () => {
			const today = new Date();
			const localTime = new Date(today.getTime() + GMT_TIME);
			const hour = localTime.getHours();
			const day = localTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

			// Set active to true if the hour is between 9 AM and 5 PM and it's a weekday (Monday to Friday)
			setActive(hour >= 9 && hour < 17 && day >= 1 && day <= 5);
		};

		checkActiveStatus();

		// Check active status every hour
		const intervalId = setInterval(checkActiveStatus, ONE_HOUR_IN_MS);

		return () => clearInterval(intervalId);
	});

	return (
		<div
			className={cn(
				"relative inline-flex justify-center items-center rounded-full bg-secondary-light",
				{
					"text-foreground": active,
					"text-secondary": !active,
				},
				className
			)}
		>
			<OnlineIndicator active={active} />

			<p className="ml-2">{active ? "Online" : "Offline"}</p>
		</div>
	);
}

function OnlineIndicator({ active }: { active: boolean }) {
	return (
		<span className="relative flex size-2">
			{active && (
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
			)}

			<span
				className={cn("relative inline-flex size-2 rounded-full", {
					"bg-green-500": active,
					"bg-secondary": !active,
				})}
			/>
		</span>
	);
}
