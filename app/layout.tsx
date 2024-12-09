import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/contexts/SmoothScroll";
import { ViewTransitions } from "next-view-transitions";

const inter = Poppins({ style: "normal", weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Wishva Chandrasekara",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="en">
                <head>
                    <link
                        rel="shortcut icon"
                        href="favicon.svg"
                        type="image/x-icon"
                    />
                    <meta name="view-transition" content="same-origin" />
                </head>
                <body className={inter.className}>
                    <SmoothScroll>{children}</SmoothScroll>
                </body>
            </html>
        </ViewTransitions>
    );
}
