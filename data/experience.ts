import type { StaticImageData } from "next/image";
import IST from "@/assets/IST.jpg";
import KH from "@/assets/KH-logo.png";
import KDI from "@/assets/KDI-logo.png";
import SASE from "@/assets/SASE-logo.png";
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
        image: KDI,
        role: "Software Engineer Lead",
        roleClass: "long-title",
        company: "Knights Design Interactive",
        date: "Jul. 2026 - Present",
        location: "Orlando, FL",
        summary: "Spearheading member portal planning and engineering workflow for a 4-person team.",
        details: [
            "Spearheaded member portal planning, defining sprints, PR rotation, and workflow for a 4-person engineering team.",
            "Established PR review workflow and template to improve code quality and team collaboration before development kickoff."
        ],
        tags: ["Leadership", "Project Management", "Software Engineering"]
    },
    {
        image: SASE,
        role: "Software Engineer",
        roleClass: "long-title",
        company: "UCF SASE",
        date: "Mar. 2026 - Present",
        location: "Orlando, FL",
        summary: "Building tools and automations for 700+ chapter members including OAuth SSO, QR check-in, and Discord bots.",
        details: [
            "Implemented unified OAuth2 single sign-on for GitHub, Discord, and Google, backed by Supabase, standardizing authentication for 700+ chapter members.",
            "Cut member check-in time 75% by replacing a Google Form with a QR-code sign-in on a connected database, and built in-house forms and event-scheduling systems.",
            "Built Discord bots that auto-posted event reminders from the live calendar, increasing member attendance visibility, and restructured the team monorepo cutting new contributor setup times."
        ],
        tags: ["OAuth2", "Supabase", "Discord Bots", "TypeScript"]
    },
    {
        image: IST,
        role: "Software Engineer Intern",
        roleClass: "long-title",
        company: "UCF - Institute For Simulation & Training",
        date: "June 2026 - Jul. 2026",
        location: "Orlando, FL",
        summary: "Built a real-time Unity VR radiation simulator shipped as an open-source prototype for ORAU.",
        details: [
            "Built a dual-perspective (macro + first-person) rendering system with real-time switching across 10+ radiation sources, shipped as an open-source prototype for ORAU that saves $2,500 per setup over physical lab equipment.",
            "Engineered a real-time VR radiation simulator in Unity (C#) accurately rendering alpha, beta, and gamma particle trail physics, achieving stable 90 FPS on Meta Quest 3."
        ],
        tags: ["Unity Engine", "Virtual Reality", "C#"]
    },
    {
        image: GPK,
        role: "Treasurer",
        company: "Graphic Programming Knights",
        date: "May 2026 - Present",
        location: "Orlando, FL",
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
        company: "Knight Hacks",
        date: "Jan. 2026 - Present",
        location: "Orlando, FL",
        summary: "Led tabling initiatives and drove social media growth through targeted event announcements and multi-channel marketing campaigns.",
        details: [
            "Led tabling initiatives welcoming 100+ new students and drove a 40% increase in event turnout via promotional media.",
            "Drove 50,000+ Instagram views by executing targeted event announcements and multi-channel marketing campaigns."
        ],
        tags: ["Public Speaking", "Content Creation", "Marketing"]
    }
];
