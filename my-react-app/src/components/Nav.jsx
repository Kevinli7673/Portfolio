import Linkedin from "../assets/Linkedin logo.svg"
import Github from "../assets/Github logo.svg"
import Resume from "../assets/resume logo.svg"
import myResume from "../assets/resume 2029.pdf"
import "./Nav.css"

function Nav() {
    return (
        <>
            <div className="Navbar">
                <nav className="Nav">
                    <p className="name">Kevin Li</p>
                    <ul className="mainNav">
                        <li><a href="#">Home</a></li>
                        <li><a>Experience</a></li>
                        <li><a href="#Projects">Projects</a></li>
                    </ul>
                    <ul className="Links">
                        <li><a href="https://www.linkedin.com/in/kevin-li7673/" target="_blank"><img className="linkedin" src={Linkedin} alt="Linkedin logo"/></a></li>
                        <li><a href="https://github.com/Kevinli7673" target="_blank"><img className="Github" src={Github} alt="Github logo"/></a></li>
                        <li><a href={myResume} target="_blank"><img className="Resume" src={Resume} alt="Resume logo"/></a></li>
                    </ul>
                </nav>
                <hr/>
            </div>
        </>
    );
}

export default Nav