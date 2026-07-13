import type { Metadata } from "next";
import { Geist, Inika, JetBrains_Mono, Lora, Source_Serif_4 } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
});

const inika = Inika({
    variable: "--font-inika",
    weight: ["400", "700"],
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

const lora = Lora({
    variable: "--font-lora",
    subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
    variable: "--font-source-serif-4",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "kevli.dev",
    description: "Kevin Li's portfolio — projects, experience, and other exciting stuff.",
    icons: { icon: "/campfire.gif" },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geist.variable} ${inika.variable} ${jetbrainsMono.variable} ${lora.variable} ${sourceSerif4.variable}`}
        >
            <body>
                <Nav />
                {children}
            </body>
        </html>
    );
}
