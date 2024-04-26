import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Collective Drop for Earthquake Victims",
	description:
		"This collection was created by Turkish artists and developers to help victims affected by the earthquake that took place in Turkey on 6th of February 2023",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>{children}</body>
		</html>
	);
}
