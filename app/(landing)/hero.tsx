import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative bg-[#0D1725] min-h-[100dvh]">
            <div
                className="absolute w-full h-full max-h-[100dvh] flex justify-center bg-cover bg-no-repeat bg-center  "
                style={{ backgroundImage: "url('/hero-back.svg')" }}
            ></div>
            <div className="absolute w-full h-[100dvh] flex items-center justify-center text-center flex-col px-6 ">
                <div className="px-4 py-2 bg-gradient-to-br from-[#c6fca61d] to-[#a7fcee1d] rounded-full">
                    <p className="bg-gradient-to-r from-[#C6FCA6] to-[#A7FCEE] text-transparent bg-clip-text text-xs sm:text-sm font-semibold font-poppins">
                        UNDERGRADUATE
                    </p>
                </div>
                <h1 className="text-center font-cardo text-4xl sm:text-6xl text-white font-bold mt-4">
                    Wishva Chandrasekara
                </h1>

                <p className="text-white text-opacity-60 text-xs sm:text-sm/6 max-w-[45ch] font-normal font-poppins mt-6">
                    Skilled in modern web frameworks like React and TypeScript,
                    as well as backend technologies like Node.js and Express.js
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                    <Link href="#work">
                        <Button
                            className="transition-all duration-500  border-white h-10 border-opacity-20 rounded-[10px] border-2 text-white hover:bg-white/10 hover:text-white"
                            variant="outline"
                        >
                            Explore my work{" "}
                            <ArrowDown className="size-4 shrink-0" />
                        </Button>
                    </Link>
                    <Link href="/contact-me">
                        <Button className="transition-all duration-500  border-white h-10 border-opacity-20 rounded-[10px] border-2 bg-white/90 text-black hover:bg-white">
                            Let&apos;s Connect{" "}
                            <ArrowUpRight className="size-4 shrink-0" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
