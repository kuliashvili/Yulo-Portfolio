import "./Header.css"
import logo from '../../assets/aboutme.png'

function Header() {

    return (
        <div className="Header">
            <div className="Header-inner">
            <div className="logo">
                <img className="logo-item"  src={logo} alt="logo" />
            </div>
            <div className="navigation">
                <p alt="home" className="navigation-item">home</p>
                <p alt="about" className="navigation-item">about</p>
                <p alt="service" className="navigation-item">service</p>
                <p alt="portfolio" className="navigation-item">portfolio</p>
                <p alt="resume" className="navigation-item">resume</p>
                <p alt="contact" className="navigation-item">contact</p>
            </div>
            </div>
           
        </div>
    )
}


export default Header