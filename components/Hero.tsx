"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import "./Hero.css";

const words = ["Software Engineer", "Fav games: Souls likes", "CS Major", "Rising Sophmore at UCF", "I like noodle"];

function Hero() {
    const [index, setIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setIndex(c => (c + 1) % words.length);
                setIsFading(false);
            }, 800);
        }, 2800);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } })
                .from(".heroQuote", { opacity: 0, y: 30 })
                .from(".Caption", { opacity: 0, y: 30 }, "-=0.5")
                .from(".rightSide", { opacity: 0, y: 30 }, "-=0.5");
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="Hero" ref={heroRef}>
                <div className="leftSide">
                    <div className="heroQuote">
                        <p>
                            Welcome to <br/>
                            <span>my place</span>, <br/>
                            Pull up a chair.
                        </p>
                    </div>
                    <div className="Caption">
                        <p>
                            Hi, I&apos;m Kevin. This is the corner of the internet where I <br className="br1"/>
                            share my projects, experience, and other exciting stuff. <br/>
                            Stay here as long as you like.
                        </p>
                    </div>
                </div>
                <div className="rightSide">
                    <img src="/campfire.gif" alt="Campfire"/>
                    <p className={`alt-Text ${isFading ? "fade-out" : "fade-in"}`}>{words[index]}</p>
                </div>
            </div>
        </>
    );
}

export default Hero;
