import "./Main.css"
import profilePic from "../../assets/myphoto.jpg"

function Main() {

    return (
        <div className="Main">
            <div className="Main-inner">
            <div className="info">
                <div className="info-inner">
                    <div className="welcome">Hi, I am George</div>
                    <div className="welcome-header">Front-end Developer</div>
                    <div className="welcome-text">passionate developer who loves coding and the web platform. I like to create and contribute to open source projects. That helps me to learn ton of new stuff and grow as a developer.</div>
                    <div className="button">Download Resume</div>
                </div>
            </div>
            <div className="profile-pic">
                <img className="profile-pic-item" src={profilePic} alt="profilePic"  />
            </div>
            </div>
           
        </div>
    )
}

export default Main