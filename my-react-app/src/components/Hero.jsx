import Campfire from "../assets/campfire.gif"
import "./Hero.css"

function  Hero() {
    return(
        <>
            <div className="Hero" id="HeroPage">
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
                    <p>Rotating text...</p>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Hero