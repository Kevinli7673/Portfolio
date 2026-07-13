import Image from "next/image";
import { experiences, type ExperienceEntry } from "@/data/experience";
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
    return (
        <div className="experience">
            <div className="Title">
                <span>Experience</span>
            </div>
            <div className="caption">
                <p>My Professional Journey: Growth Through Internships and Leadership</p>
            </div>
            <hr/>
            {experiences.map(experience => (<ExperienceCard key={experience.company} {...experience} />))}
        </div>
    );
}

export default Experience;
