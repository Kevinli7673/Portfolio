"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Linkedin from "@/assets/linkedin-logo.svg";
import Github from "@/assets/github-logo.svg";
import Resume from "@/assets/resume-logo.svg";
import "./Nav.css";

function Nav() {
    const pathname = usePathname();

    const handleHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="Navbar">
                <nav className="Nav">
                    <Link className="name" href="/" onClick={handleHome}>Kevin Li</Link>
                    <ul className="mainNav">
                        <li><Link href="/" onClick={handleHome}>Home</Link></li>
                        <li><Link href="/experience">Experience</Link></li>
                        <li><Link href="/#Projects">Projects</Link></li>
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
