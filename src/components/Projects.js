import React,{Component} from "react";
import "./Styles/Projects.css";

const Projects=() =>{
    return(
        <div className="project">
            
            <br/>
            <div className="headline">Visit Some Of  <br/> My Projects  <br/> ⇩ </div>
            <ul className="list">

                
                
                <li className="list-item">
                    <div>Project
                        Wordle Game</div>
                    <a href="https://github.com/unkownshore/worldegame" className="navLinkp">Github Wordle Link!</a>
                </li>
                <li className="list-item">
                    <div>Web Development Project
                        JS Html CSS</div>
                    <a href="https://github.com/unkownshore/CMP-128-Web-Development-" className="navLinkp">Github Web Link!</a>
                </li>
               
                <li className="list-item">
                <div> FavLinks Form </div>
                    <a href="https://github.com/unkownshore/favoritelinks" className="navLinkp">Github FavLinks Link! </a>
                </li>

                

            </ul>
        </div>
    );
}
export default Projects;