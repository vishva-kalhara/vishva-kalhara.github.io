"use client";
import React from "react";

import IndexProjectCard, {
    indexProjectCardProps,
} from "@/components/index-project-card";
import StarSvg from "@/components/star-svg";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SparkDisplaySvg from "@/components/logos/spark-display-svg";
import { projectData } from "../projects/display-data";
import Hero from "./hero";

export default function Page() {
    // S3jm66frDz

    return (
        <>
            <Hero />
            <section
                id="work"
                className="min-h-[200dvh] relative bg-[#0D1725] p-8 sm:py-20"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-20 sm:gap-10">
                    {/* Sticky Element */}
                    <div className="flex flex-col gap-4 sm:sticky top-20 self-start ">
                        <StarSvg />
                        <h1 className="font-cardo text-4xl sm:text-6xl text-white font-bold">
                            My Work
                        </h1>
                    </div>

                    {/* Content to create scrollable height */}
                    <div className="flex flex-col gap-20 sm:gap-32">
                        {projectData.map((project, i) => (
                            <IndexProjectCard key={i} {...project} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-10 bg-[#0D1725] pt-10">
                <div className="mt-28  grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-10">
                    <div className="w-full h-64 bg-[#1F2934] border border-white rounded-xl border-opacity-20 p-10 index-project-items">
                        <h1 className="text-base text-white">🎯 Leetcode</h1>
                        <h1 className="font-cardo text-4xl sm:text-5xl text-white font-bold mt-2">
                            50+ Solved
                        </h1>
                        <div className="h-20" />
                        <div className="flex flex-row">
                            <Link
                                className="text-white/70 transition-all duration-300 hover:bg-[#c6fca6] hover:text-black  flex"
                                href="https://leetcode.com/u/vishvakalhara/"
                                target="_blank"
                            >
                                Profile
                                <ArrowUpRight className="size-4 shrink-0 ms-1" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full h-64 bg-[#1F2934] border border-white rounded-xl border-opacity-20 p-10 index-project-items">
                        <h1 className="text-base text-white">✍️ Writing</h1>
                        <h1 className="font-cardo text-4xl sm:text-5xl text-white font-bold mt-2">
                            My Articles
                        </h1>
                        <div className="h-20" />
                        <div className="flex flex-row">
                            <Link
                                className="text-white/70 transition-all duration-300 hover:bg-[#c6fca6] hover:text-black flex"
                                href="https://medium.com/@vishvakalhara"
                                target="_blank"
                            >
                                Medium
                                <ArrowUpRight className="size-4 shrink-0 ms-1" />
                            </Link>
                        </div>
                    </div>
                </div>{" "}
            </section>
            <section className="px-10 bg-[#0D1725] py-10 overflow-clip">
                <div className="relative mx-auto bg-gradient-to-br from-[#C6FCA6] to-[#a7fceeba] w-full max-w-4xl p-10 rounded-2xl flex flex-col gap-4 index-project-items">
                    <h1 className="text-center font-cardo text-xl/6 sm:text-2xl/5 text-black/90 font-bold">
                        Let&apos;s connect and work together
                    </h1>
                    <p className="text-center mx-auto text-black/80 text-opacity-60 text-xs/4 sm:text-sm/4 max-w-prose font-normal font-poppins ">
                        Reach out to me for collaborations, inquiries, or just
                        to say hello.
                    </p>
                    <div className="flex justify-center mt-6">
                        <Link href="/contact-me">
                            <Button className="shadow-xl transition-all duration-300  border-black h-10 border-opacity-20 px-5 rounded-full border-2 bg-black/90 text-white hover:bg-black ">
                                Let&apos;s Connect{" "}
                                <ArrowUpRight className="size-4 shrink-0" />
                            </Button>
                        </Link>
                    </div>
                    <div className="absolute bottom-0 right-0 hidden sm:block">
                        <svg
                            width="115"
                            height="115"
                            viewBox="0 0 115 115"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M77 28L78.6045 34.0101C79.6976 38.1044 82.8956 41.3024 86.9899 42.3955L93 44L86.9899 45.6045C82.8956 46.6976 79.6976 49.8956 78.6045 53.9899L77 60L75.3955 53.9899C74.3024 49.8956 71.1044 46.6976 67.0101 45.6045L61 44L67.0101 42.3955C71.1044 41.3024 74.3024 38.1044 75.3955 34.0101L77 28Z"
                                fill="#1E1E1E"
                                fillOpacity="0.8"
                            />
                            <path
                                d="M48 64L48.8023 67.0051C49.3488 69.0522 50.9478 70.6512 52.9949 71.1977L56 72L52.9949 72.8023C50.9478 73.3488 49.3488 74.9478 48.8023 76.9949L48 80L47.1977 76.9949C46.6512 74.9478 45.0522 73.3488 43.0051 72.8023L40 72L43.0051 71.1977C45.0522 70.6512 46.6512 69.0522 47.1977 67.0051L48 64Z"
                                fill="#1E1E1E"
                                fillOpacity="0.65"
                            />
                            <g clipPath="url(#clip0_912_9)">
                                <path
                                    d="M96 60L99.2091 72.0202C101.395 80.2089 107.791 86.6048 115.98 88.7909L128 92L115.98 95.2091C107.791 97.3952 101.395 103.791 99.2091 111.98L96 124L92.7909 111.98C90.6047 103.791 84.2089 97.3952 76.0202 95.2091L64 92L76.0202 88.7909C84.2089 86.6047 90.6048 80.2089 92.7909 72.0202L96 60Z"
                                    fill="#1E1E1E"
                                />
                            </g>
                            <path
                                d="M115 115V0C41.5 3.5 2.5 55 0 115H115Z"
                                fill="#101010"
                                fillOpacity="0.1"
                            />
                            <defs>
                                <clipPath id="clip0_912_9">
                                    <rect
                                        width="51"
                                        height="55"
                                        fill="white"
                                        transform="translate(64 60)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </section>
            <section className="relative bg-[#0D1725] py-10 px-10">
                <div className="border border-white/10 w-full mb-10" />
                <div className="w-full flex flex-col max-w-4xl mx-auto gap-4">
                    <p className="text-center mx-auto text-white text-xs/4 sm:text-sm/4 max-w-prose font-normal font-poppins ">
                        &copy; 2024 Wishva Kalhara
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link
                            className="text-white/70 hover:text-white transition-all duration-500 hover:bg-white/10 flex text-sm/6 items-center"
                            href="https://www.linkedin.com/in/wishva-kalhara/"
                            target="_blank"
                        >
                            LinkedIn
                            <ArrowUpRight className="size-4 shrink-0 ms-1" />
                        </Link>
                        <Link
                            className="text-white/70 hover:text-white transition-all duration-500 hover:bg-white/10 flex text-sm/6 items-center"
                            href="https://github.com/vishva-kalhara"
                            target="_blank"
                        >
                            GitHub
                            <ArrowUpRight className="size-4 shrink-0 ms-1" />
                        </Link>
                        <Link
                            className="text-white/70 hover:text-white transition-all duration-500 hover:bg-white/10 flex text-sm/6 items-center"
                            href="https://medium.com/@vishvakalhara"
                            target="_blank"
                        >
                            Blog
                            <ArrowUpRight className="size-4 shrink-0 ms-1" />
                        </Link>
                    </div>
                    <p className="mt-6 text-center mx-auto text-white text-opacity-40 text-xs/4 sm:text-sm/4 max-w-prose font-normal font-poppins ">
                        Developed with{" "}
                        <Link
                            href="https://nextjs.org/"
                            className="underline underline-offset-2 hover:text-white transition-all duration-300"
                        >
                            Next.js
                        </Link>
                        ,{" "}
                        <Link
                            href="https://tailwindcss.com/"
                            className="underline underline-offset-2 hover:text-white transition-all duration-300"
                        >
                            Tailwind CSS
                        </Link>{" "}
                        &{" "}
                        <Link
                            href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API"
                            className="underline underline-offset-2 hover:text-white transition-all duration-300"
                        >
                            View Transitions API
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
}
