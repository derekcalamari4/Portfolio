//Imports
import React from "react"
import Card3 from "../components/Card3"
import linkedin from "../assets/images/linkedin.svg"
import gmail from "../assets/images/gmail.png"
import github from "../assets/images/github.png"

//Contact page 
class ContactPage extends React.Component {
            render(){
                return(
                    <div className = "container-fluid">
                         <div className = "centered">
                             <h1 className = "contact-page-text">here's how you can contact me:</h1>
                        </div>     
                         <div style = {{ flexDirection: 'row', display: 'flex', justifyContent: "center", textAlign: 'center', margin: 30, position:"relative",right: "190px"}}>
                             <a href = "https://www.linkedin.com/in/derek-calamari-50349b178/" target="_blank">
                                <Card3 imgSrc = {linkedin} alt = {linkedin}/>
                             </a>
                            <p className = "contact-page-small">LinkedIn</p>
                        </div>
                         <div style={{ flexDirection: 'row', display: 'flex', justifyContent: "center", textAlign: 'center', margin: 30, position:"relative", right: "215px"}}>
                            <a href  = "https://github.com/derekcalamari4" target = "_blank">
                                <Card3 imgSrc = {github} alt = {github}/>
                             </a>
                            <p className = "contact-page-small">GitHub</p>
                        </div>
                        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: "center", textAlign: 'center', margin: 30 }}>
                            <Card3 imgSrc = {gmail} alt =  {gmail}/>
                        <p className = "contact-page-small">derek.calamari@gmail.com</p>
                         </div>

                     </div>
                     )
                    }
}

export default ContactPage