import type { StaticImageData } from "next/image";
import IST from "@/assets/IST.jpg";
import KH from "@/assets/KH-logo.png";
import GPK from "@/assets/gpk-logo.png";

export interface ExperienceEntry {
    image: StaticImageData;
    role: string;
    roleClass?: string;
    company: string;
    date: string;
    location: string;
    summary: string;
    details: string[];
    tags: string[];
}

export const experiences: ExperienceEntry[] = [
    {
        image: IST,
        role: "Software Engineer Intern",
        roleClass: "long-title",
        company: "UCF - Institute For Simulation & Training",
        date: "May 2026 - Present",
        location: "Orlando, Fl",
        summary: "Developing a real-time Unity VR simulator that visualizes ionizing radiation through cloud-chamber particle tracks.",
        details: [
            "Built a real-time VR radiation simulator in Unity for Meta Quest 3, rendering accurate alpha, beta, and gamma particle trails at 90 FPS.",
            "Engineered a dual-perspective system (macro table view and first-person chamber view) with seamless scaling and real-time switching across 4+ radiation sources.",
            "Delivered an open-source AR/VR educational prototype with a [4]-person team for ORAU to demonstrate radiation physics interactively."
        ],
        tags: ["Unity Engine", "Virtual Reality", "C#"]
    },
    {
        image: GPK,
        role: "Treasurer",
        company: "Graphic Programming Knights",
        date: "May 2026 - Present",
        location: "Orlando, Fl",
        summary: "Manage finances for GPK, a CS RSO serving 160+ UCF students, overseeing club budget, expense reports, and event reimbursements.",
        details: [
            "Led procurement of 100+ branded club t-shirts, negotiating vendor pricing and coordinating design selection, ordering, and member distribution",
            "Manage event budgets for 5+ workshops and socials per semester, coordinating with officers to fund food, prizes, and materials within budget.",
            "Developed the club's website from scratch with TypeScript, Next.js, and Three.js improving member access to schedules, workshops, and resources."
        ],
        tags: ["Finance & Budgeting", "Web Development", "Leadership"]
    },
    {
        image: KH,
        role: "Outreach Team",
        company: "KnightHacks",
        date: "January 2026 - Present",
        location: "Orlando, Fl",
        summary: "Create and edit promotional videos and skits to grow KnightHacks' presence, and represent the RSO at events through tabling and in-person outreach to engage students and build community.",
        details: [
            "Represent Knight Hacks at 3+ tabling events, pitching the RSO to students and incoming freshmen to grow campus engagement.",
            "Drove 25,000+ Instagram views through targeted event announcements and multi-channel marketing campaigns."
        ],
        tags: ["Public Speaking", "Content Creation", "Video Editing"]
    }
];
