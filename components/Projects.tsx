"use client";

import { useEffect, useRef } from "react";
import { projects, type Project } from "@/data/projects";
import { gsap } from "@/lib/gsap";
import "./Projects.css";

function ProjectsCard({ name, role, year, description, tags, image }: Project) {
    return (
        <div className="ProjectCard" style={{ "--card-image": `url(${image.src})` } as React.CSSProperties}>
            <div className="Name text">
                <span>{name}</span>
            </div>
            <div className="Role">
                <span>{role}</span>
            </div>
            <div className="Year text">
                <span>{year}</span>
            </div>
            <div className="Description text">
                <p>{description}</p>
            </div>
            <div className="Tags">
                {tags.map(tag => <span key={tag} className="tag text">{tag}</span>)}
            </div>
        </div>
    );
}

function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".ProjectCard").forEach(card => {
                gsap.from(card, {
                    opacity: 0,
                    y: 40,
                    scale: 0.96,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="Project-Section" id="Projects" ref={sectionRef}>
            <div className="Hover_caption">
                <span>Hover to preview</span>
            </div>
            <div className="projects-grid">
                {projects.map(p => <ProjectsCard key={p.name} {...p} />)}
            </div>
        </div>
    );
}

export default Projects;
