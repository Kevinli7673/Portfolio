import { projects, type Project } from "@/data/projects";
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
    return (
        <div className="Project-Section" id="Projects">
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
