// import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";

const PageContactMe = () => {
    return (
        <>
            {/* <Header /> */}
            <section className="h-[100dvh] box-border flex flex-col min-h-[80vh] bg-[#c6fca6] relative">
                {/* <div className="absolute left-0 h-full w-[50dvw] bg-gradient-to-tl from-[#c6fca67c] to-[#a7fcee78] rounded-full -ms-[45dvw] blur-3xl" /> */}
                <div className="py-20 px-10 flex-col flex min-h-[60vh] justify-center box-border h-[60vh]">
                    <div className="flex flex-col">
                        <div>
                            <Link href="/">
                                <Button
                                    className="transition-all duration-300  border-black h-10 border-opacity-0 rounded-[10px] border-2 text-black bg-black/10 hover:bg-black hover:text-white"
                                    variant="outline"
                                >
                                    <ArrowLeft className="size-4 shrink-0" />
                                    Home
                                </Button>
                            </Link>
                        </div>
                        <h1 className="text-[6em] min-h-[1em] h-[1em] font-semibold text-[#1e1e1e] text-center md:text-start">
                            Let&apos;s Talk
                        </h1>
                        <h4 className="text-[2em] min-h-[1em] h-[1em] font-medium text-[#1e1e1e] mt-[1em]  text-center md:text-start">
                            Connect with me to build tailor-made solutions.
                        </h4>
                    </div>
                </div>
                <div className="py-[5em] px-10 mb-15">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex gap-[2.5em] mt-[1em]">
                            <Link
                                href="mailto:vishvakalhara@gmail.com"
                                target="_blank"
                                className="flex gap-[8px] items-center"
                            >
                                <span className="text-[16px]">Email</span>
                                <Image
                                    width={15}
                                    height={15}
                                    alt=""
                                    className="h-[16px] w-[16px]"
                                    src="/icons/redirect-log.svg"
                                ></Image>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/wishva-kalhara/"
                                className="flex gap-[8px] items-center"
                            >
                                <span className="text-[16px]">LinkedIn</span>
                                <Image
                                    width={15}
                                    height={15}
                                    alt=""
                                    className="h-[16px] w-[16px]"
                                    src="/icons/redirect-log.svg"
                                ></Image>
                            </Link>
                            <Link
                                href="https://github.com/vishva-kalhara"
                                target="_blank"
                                className="flex gap-[8px] items-center"
                            >
                                <span className="text-[16px]">GitHub</span>
                                <Image
                                    width={15}
                                    height={15}
                                    alt=""
                                    className="h-[16px] w-[16px]"
                                    src="/icons/redirect-log.svg"
                                ></Image>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageContactMe;
