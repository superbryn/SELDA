import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Textcard from "./elements/Textcard";
import './Homepage.css'
import TeamCard from "./elements/Team";
import PageFooter from "./elements/Footer";

function Homepage(){
    const navigate = useNavigate();
    const sectionTwoRef = useRef(null);
    const sectionThreeRef = useRef(null);

    const scrollToSectionTwo = () => {
        if (sectionTwoRef.current) {
          sectionTwoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
    const scrollToSectionThree = () => {
        if (sectionThreeRef.current) {
          sectionThreeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const navigateToSelda = () => {
        navigate('/selda');
    }

    return(
        <>

        <header>
            <div className="title">
              <p>selda<span className="kuth">.</span></p>
            </div>
            <nav className="navbar">
              <button onClick={() => window.scrollTo(0, 0)}>Home</button>
              <button onClick={scrollToSectionTwo}>About</button>
              <button onClick={scrollToSectionThree}>The Team</button>
            </nav>
        </header>

        <div className="line"></div>

        <div className="introduction">
            <p>Break Your Barriers</p>
            <h2>Have A Try</h2>
            <button className="thebutton" onClick={navigateToSelda}>Try Now</button>
        </div>

        <div className="sectionBlue" ref={sectionTwoRef}>
          <Textcard className="textcard"/>
        </div>

        <div className="aboutus" ref={sectionThreeRef}>
            <TeamCard/>
        </div>

        <div className="footer">
          <PageFooter/>
        </div>
    </>
    );
}

export default Homepage;