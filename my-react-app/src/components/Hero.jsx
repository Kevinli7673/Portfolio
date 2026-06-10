import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Campfire from "../assets/campfire.gif"
import "./Hero.css"

function  Hero() {
    const location = useLocation()

    const words =["Hi, I'm Kevin", "Fav games: Souls likes", "CS Major", "Rising Sophmore at UCF"];
    const [index, setIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
            setIndex( c => (c+1) % words.length);
            setIsFading(false);
            }, 800)
        }, 2800);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (location.state?.scrollTo) {
            document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.state]);

    return(
        <>
            <div className="Hero">
                <div className="leftSide">
                    <div className="heroQuote">
                        <p>
                            Welcome to <br/>
                            <span>my place</span>, <br/>
                            Pull up a chair.
                        </p>
                    </div>
                    <div className="Caption">
                        <p>
                            Hi, I'm Kevin. This is the corner of the internet where I <br/>
                            share my projects, experience, and other exciting stuff. <br/>
                            Stay here as long as you like.
                        </p>
                    </div>
                </div>
                <div className="rightSide">
                    <img src={Campfire} alt="Campfire"/>
                    <p className={`alt-Text ${isFading ? "fade-out" : "fade-in"}`}>{words[index]}</p>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Hero