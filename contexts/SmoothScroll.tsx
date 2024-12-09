"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

function SmoothScroll({ children }: { children: ReactNode }) {
    return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScroll;
