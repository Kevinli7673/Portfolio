"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { experiences, type ExperienceEntry } from "@/data/experience";
import { gsap } from "@/lib/gsap";
import "./Experience.css";

function ExperienceCard({ image, role, roleClass, company, date, location, summary, details, tags }: ExperienceEntry) {
    return (
        <>
            <div className="Experience-card">
                <div className="Left">
                    <div className="Image">
                        <Image src={image} alt="Company Logo" />
                    </div>
                </div>
                <div className="Middle">
                    <div className={`Role ${roleClass ?? ""}`}>
                        <span>{role}</span>
                    </div>
                    <div className="Company">
                        <span>{company}</span>
                    </div>
                    <div className="Location">
                        <span>{location}</span>
                    </div>
                    <div className="Summary">
                        <p>{summary}</p>
                    </div>
                    <div className="Detail">
                        {details.map(detail => <p key={detail} className="details"><span className="Arrow">→ </span>{detail}</p>)}
                    </div>
                    <div className="Tags">
                        {tags.map(tag => (<span key={tag} className="tags">{tag}</span>))}
                    </div>
                </div>
                <div className="Date">
                    <span>{date}</span>
                </div>
            </div>
            <hr className="Bottom_hr" />
        </>
    );
}

function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from([".Title", ".caption"], {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.utils.toArray<HTMLElement>(".Experience-card").forEach(card => {
                gsap.from(card, {
                    opacity: 0,
                    y: 40,
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
        <div className="experience" id="Experience" ref={sectionRef}>
            <div className="Title">
                <span>Experience</span>
            </div>
            <div className="caption">
                <p>My Professional Journey: Growth Through Internships and Leadership</p>
            </div>
            {experiences.map(experience => (<ExperienceCard key={experience.company} {...experience} />))}
        </div>
    );
}

export default Experience;
