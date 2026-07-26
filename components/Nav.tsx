"use client";

import Linkedin from "@/assets/linkedin-logo.svg";
import Github from "@/assets/github-logo.svg";
import Resume from "@/assets/resume-logo.svg";
import "./Nav.css";
import { useLenis } from "lenis/react";

function Nav() {
    const lenis = useLenis();

    const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>, id?: string) => {
        e.preventDefault();
        if (id) {
            lenis?.scrollTo(`#${id}`);
        } else {
            lenis?.scrollTo(0);
        }
    };

    return (
        <>
            <div className="Navbar">
                <nav className="Nav">
                    <a className="name" href="#" onClick={(e) => scrollToId(e)}>Kevin Li</a>
                    <ul className="mainNav">
                        <li><a href="#" onClick={(e) => scrollToId(e)}>Home</a></li>
                        <li><a href="#Experience" onClick={(e) => scrollToId(e, "Experience")}>Experience</a></li>
                        <li><a href="#Projects" onClick={(e) => scrollToId(e, "Projects")}>Projects</a></li>
                    </ul>
                    <ul className="Links">
                        <li><a href="https://www.linkedin.com/in/kevin-li7673/" target="_blank"><img className="linkedin" src={Linkedin.src} alt="Linkedin logo"/></a></li>
                        <li><a href="https://github.com/Kevinli7673" target="_blank"><img className="Github" src={Github.src} alt="Github logo"/></a></li>
                        <li><a href="/resume.pdf" target="_blank"><img className="Resume" src={Resume.src} alt="Resume logo"/></a></li>
                    </ul>
                </nav>
                <hr/>
            </div>
        </>
    );
}

export default Nav;
