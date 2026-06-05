import './Experience.css'

function ExperienceCard({Role, Company, Date, Location, Summary, Details, Tags}) {
    return (
        <div className={Company}>
            <div className='Role'>
                <span>{Role}</span>
            </div>
            <div>
                <span>{Company}</span>
            </div>
            <div className='Date'>
                <span>{Date}</span>
            </div>
            <div>
                <span>{Location}</span>
            </div>
            <div className='Sumary'>
                <p>{Summary}</p>
            </div>
            <div className='Detail'>
                {Details.map(detail => <p key={detail}>{detail}</p>)}
            </div>
            <div className='Tags'>
                {Tags.map(tag => (<span key={tag}>{tag}</span>))}
            </div>
            <br/>
        </div>
    )
}

function Experience() {
    const experiences = [
        {
            Role: "Software Engineer Intern",
            Company: "UCF - Insitute For Simulation & Training",
            Date: "June - July 2026",
            Location: "Orlando, Fl",
            Summary: "Developing a real-time Unity VR simulator that visualizes ionizing radiation through cloud-chamber particle tracks.",
            Details: [
                "→ Blah blah blah blah blah blah blah blah blah blah blah blah",
                "→ sdfsdkljsdf sdflksdjfsdlfkjsdf sdflkjsdfljsdf sdflkjsdfljsdf",
                "→ sdf sdflkjsdflkjsdf sdflkjsdfljk sdflkjsdfl sdflkjsdfl sdflkj"
                ],
            Tags: ["Unity", "Virtual Reality", "C#"]
        }
    ]
    return(
        <div className='Experience'>
            {experiences.map(experience => (<ExperienceCard key={experience.Role} {...experience} />))}
        </div>
    )
}

export default Experience