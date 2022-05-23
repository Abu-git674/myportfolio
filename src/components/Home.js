import React from "react";
import logo from './Sea.png';
import "./Styles/Home.css";




function Home() {

    return (
        <div className="Home-Site">
          <header >
            <h1 class="header">
              Bonjour 
            </h1 >
            <img src={logo} className="My-logo" alt="logo"/>
            <h3 class="header">
              Abu
              <br/>
              I am a Web Developer
            </h3>
            <p class ="footer">
              Click <a href="http://localhost:3000/about" className="navLinkh">
              About Me
            </a> for more info!
            </p>

            
          
          </header>
        </div>
      );
  }
  
  
export default Home;
