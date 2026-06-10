import Linkedin from "../assets/Linkedin logo.svg"
import Github from "../assets/Github logo.svg"
import Resume from "../assets/resume logo.svg"
import myResume from "../assets/resume 2029.pdf"
import "./Nav.css"
import { Link, useNavigate, useLocation } from 'react-router'

function Nav() {
    const navigate = useNavigate()
    const location = useLocation()

    const handleHome = (e) => {
        e.preventDefault()
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            navigate('/')
        }
    }

    const handleProject = (e) => {
        e.preventDefault()
        if (location.pathname === '/') {
            document.getElementById("Projects").scrollIntoView({behavior: 'smooth'});
        } else {
            navigate('/', { state: { scrollTo: 'Projects' }})
        }
    }

    return (
        <>
            <div className="Navbar">
                <nav className="Nav">
                    <a className="name" href="/" onClick={handleHome}>Kevin Li</a>
                    <ul className="mainNav">
                        <li><a href="/" onClick={handleHome}>Home</a></li>
                        <li><Link to="/experience">Experience</Link></li>
                        <li><a href="#Projects" onClick={handleProject}>Projects</a></li>
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