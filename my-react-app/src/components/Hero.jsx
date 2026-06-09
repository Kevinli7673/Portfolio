import { useState, useEffect } from "react";
import Campfire from "../assets/campfire.gif"
import "./Hero.css"

function  Hero() {

    const words =["Hello!", "Fav games: Souls likes", "CS Major", "Book Reader"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex( c => (c+1) % words.length);
        }, 2800);
    
        return () => clearInterval(interval);
    }, []);

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
                    <p className="alt-Text">{words[index]}</p>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Hero