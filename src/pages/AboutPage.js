//imports
import React from "react"
import wiscoLogo from "../assets/images/wiscoLogo.svg"
import { Nav } from "react-bootstrap"

//About page content
function AboutPage(props) {
                return (
                    <div>
                        <Nav>
                            <h1 className = "about-me-title">About Me</h1>
                                <img src = {wiscoLogo} alt = "wiscoLogo" className = "aboutMe-IMG-style1"/>
                        </Nav>
                         <br/>
                         <br/>
                             <h1 className = "about-me-content">
                                I am a student at the University of Wiconsin-Madison. This is one of my first web development programs, and I have so much to learn! 
                                I enjoy tackling new challenges and developing solutions to real problems. If you'd like to contact me, just click Contact!
                            </h1>
                     </div>
                        )

}


export default AboutPage