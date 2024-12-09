"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "./ui/button";

export type indexProjectCardProps = {
    bannerCls: string;
    bannerContent: ReactNode;
    description: string;
    cta: {
        [key: string]: string;
    };
    href: string;
};

const IndexProjectCard = ({
    bannerCls,
    bannerContent,
    description,
    cta,
    href,
}: indexProjectCardProps) => {
    return (
        <div className="index-project-items flex flex-col hover:cursor-pointer group ">
            <div
                className={cn(
                    "w-full h-64 bg-gradient-to-br flex justify-center items-center relative  ",
                    bannerCls
                )}
            >
                {bannerContent}

                <Link href={href} target="_blank">
                    <Button
                        className="absolute top-4 right-4 bg-black/60 hover:bg-black/100 rounded-full text-white py-2 opacity-0  transition-all duration-500 group-hover:opacity-100 items-center flex gap-1 px-3"
                        size="sm"
                    >
                        View
                        <ArrowUpRight className="size-4 shrink-0" />
                    </Button>
                </Link>
            </div>
            <p className="text-white text-sm sm:text-base/7 w-full font-normal font-poppins mt-6 mb-6">
                {description}
            </p>
            <div className="w-full flex gap-8">
                {cta &&
                    Object.keys(cta).map((key, i) => (
                        <Link
                            className="text-white/70  transition-all duration-300 hover:bg-[#c6fca6] hover:text-black flex"
                            key={`${i}_${key}`}
                            href={cta[key]}
                            target="_blank"
                        >
                            {key}{" "}
                            <ArrowUpRight className="size-4 shrink-0 ms-1" />
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default IndexProjectCard;
