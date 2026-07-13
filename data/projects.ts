import type { StaticImageData } from "next/image";
import CrisisNetImg from "@/assets/Crisis-net.png";
import PortIMG from "@/assets/Port.png";
import VigilIMG from "@/assets/Vigil.png";
import FlashquestIMG from "@/assets/Flashquest.png";

export interface Project {
    name: string;
    image: StaticImageData;
    role: string;
    year: number;
    description: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        name: "CrisisNet",
        image: CrisisNetImg,
        role: "FRONTEND DEVELOPER",
        year: 2026,
        description: "Won Hack-USF 2025: AI-powered multi-agent disaster response platform for Tampa Bay flood resilience, built in a 4-person team with bilingual (English/Spanish) alerts",
        tags: ["TypeScript", "Google-ADK", "Next.js"]
    },
    {
        name: "Vigil",
        image: VigilIMG,
        role: "FULLSTACK DEVELOPER",
        year: 2026,
        description: "An open-source, self-hosted SIEM for website owners. Point it at your existing log files to get real-time threat detection, structured event storage, and a live security dashboard.",
        tags: ["TypeScript", "FastAPI", "Next.js"]
    },
    {
        name: "FlashQuest",
        image: FlashquestIMG,
        role: "Game/UI Developer",
        year: 2026,
        description: "A study app that turns flashcards into an RPG battle. Upload a PDF or DOCX and Gemini auto-generates Q&A cards; answer correctly to fight through turn-based combat, with text-to-speech for accessibility.",
        tags: ["Python", "PyQt6", "GeminiAPI"]
    },
    {
        name: "Portfolio",
        image: PortIMG,
        role: "Designer & Developer",
        year: 2026,
        description: "You're looking at it — designed and built from scratch, from the type system and color palette down to the layout you're reading now. A small exercise in creativity and detail.",
        tags: ["TypeScript", "Next.js", "Vercel"]
    }
];
