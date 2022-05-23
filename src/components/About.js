import "./Styles/About.css";
import logo from './Sea.png';
import Pdf from './Resume-2.pdf';



function About () {
    return (

    <div className="about">
            

            <img src={logo} className="logo" alt="logo"/>

            <p className='about-text'> I am a Senior student at CUNY Lehman College pursuing 
            Bachelor's Degree in Computer Science and seeking 
            career using my skills as a Computer Programming with an 
            innovative organization that seeks to better reach and 
            communicate with their audience. Extremely sports minded, 
            ambitious and dedicated to getting the challenges accomplished 
            in quick and efficient manner.“Who are the learned? 
            Those who practice what they know.” Prophet Muhammad (PBUH)
             <br/>
             <br/>

             Want to know more? Download my Resume <a href="./Resume-2.pdf" className="navLinkr" download>Here! </a> </p>
            
        </div>

    );
}

export default About;