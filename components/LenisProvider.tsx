"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

function ScrollSync() {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        const onScroll = () => ScrollTrigger.update();
        lenis.on("scroll", onScroll);

        const update = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.off("scroll", onScroll);
            gsap.ticker.remove(update);
        };
    }, [lenis]);

    return null;
}

function LenisProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ autoRaf: false }}>
            <ScrollSync />
            {children}
        </ReactLenis>
    );
}

export default LenisProvider;
