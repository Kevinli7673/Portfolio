import './Experience.css'
import IST from '../assets/IST.jpg'
import KH from '../assets/KH-logo.png'
import GPK from '../assets/gpk-logo.png'

function ExperienceCard({Image, Role, Company, Date, Location, Summary, Details, Tags}) {
    return (
        <>
            <div className='Experience-card'>
                <div className='Left'>
                    <div className='Image'>
                        <img src={Image} alt='Company Logo' />
                    </div>
                </div>
                <div className='Middle'>
                        <div className='Role'>
                            <span>{Role}</span>
                        </div>
                    <div className='Company'>
                        <span>{Company}</span>
                    </div>
                    <div className='Location'>
                        <span>{Location}</span>
                    </div>
                    <div className='Summary'>
                        <p>{Summary}</p>
                    </div>
                    <div className='Detail'>
                        {Details.map(detail => <p key={detail} className='details'><span className='Arrow'>→ </span>{detail}</p>)}
                    </div>
                    <div className='Tags'>
                        {Tags.map(tag => (<span key={tag} className='tags'>{tag}</span>))}
                    </div>
                    <div className='Date'>
                        <span>{Date}</span>
                    </div>
                </div>
            </div>
                <hr className='Bottom_hr' />
        </>
    )
}

function Experience() {
    const experiences = [
        {
            Image: IST,
            Role: "Software Engineer Intern",
            Company: "UCF - Institute For Simulation & Training",
            Date: "May 2026 - Present",
            Location: "Orlando, Fl",
            Summary: "Developing a real-time Unity VR simulator that visualizes ionizing radiation through cloud-chamber particle tracks.",
            Details: [
                "Built a real-time VR radiation simulator in Unity for Meta Quest 3, rendering accurate alpha, beta, and gamma particle trails at 90 FPS.",
                "Engineered a dual-perspective system (macro table view and first-person chamber view) with seamless scaling and real-time switching across 4+ radiation sources.",
                "Delivered an open-source AR/VR educational prototype with a [4]-person team for ORAU to demonstrate radiation physics interactively."
                ],
            Tags: ["Unity Engine", "Virtual Reality", "C#"]
        },
        {
            Image: GPK,
            Role: "Treasurer",
            Company: "Graphic Programming Knights",
            Date: "May 2026 - Present",
            Location: "Orlando, Fl",
            Summary: "Manage finances for GPK, a CS RSO serving 160+ UCF students, overseeing club budget, expense reports, and event reimbursements.",
            Details: [
                "Led procurement of 100+ branded club t-shirts, negotiating vendor pricing and coordinating design selection, ordering, and member distribution",
                "Manage event budgets for 5+ workshops and socials per semester, coordinating with officers to fund food, prizes, and materials within budget.",
                "Developed the club's website from scratch with TypeScript, Next.js, and Three.js improving member access to schedules, workshops, and resources."
                ],
            Tags: ["Finance & Budgeting", "Web Development", "Leadership"]
        },
        {
            Image: KH,
            Role: "Outreach Team",
            Company: "KnightHacks",
            Date: "January 2026 - Present",
            Location: "Orlando, Fl",
            Summary: "Create and edit promotional videos and skits to grow KnightHacks' presence, and represent the RSO at events through tabling and in-person outreach to engage students and build community.",
            Details: [
                "Represent Knight Hacks at 3+ tabling events, pitching the RSO to students and incoming freshmen to grow campus engagement.",
                "Drove 25,000+ Instagram views through targeted event announcements and multi-channel marketing campaigns."
                ],
            Tags: ["Public Speaking", "Content Creation", "Video Editing"]
        },
    ]

    return(
        <div className='experience'>
            <div className='Title'>
                <span>Experience</span>
            </div>
            <div className='caption'>
                <p>My Professional Journey: Growth Through Internships and Leadership</p>
            </div>
            <hr/>
            {experiences.map(experience => (<ExperienceCard key={experience.Image} {...experience} />))}
        </div>
    )
}

export default Experience