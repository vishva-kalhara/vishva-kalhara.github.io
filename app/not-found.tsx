import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <section className="h-auto box-border flex flex-col min-h-[80vh]">
                <div className="py-20 px-10 flex-col flex min-h-[60vh] justify-center box-border h-[60vh]">
                    <div className="flex flex-col">
                        <h1 className="text-[3em] min-h-[1em] h-[1em] font-semibold text-[#1e1e1e] text-center">
                            Oops. It looks like the page you&apos;re trying to
                            reach{" "}
                            <span className="text-[#717171]">
                                doesn&apos;t exist
                            </span>{" "}
                            or has been moved.
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="bg-[#1e1e1e] hover:bg-opacity-80 px-[16px] py-[8px] rounded-full text-white  text-[16px]"
                    >
                        Go to Home
                    </Link>
                </div>
            </section>
        </>
    );
};

export default NotFound;
