//imports
import React from "react"

//Third card component
function Card3(props){
        return (
            <div className = "d-inline-block c-card">
                <img className = "contact-card-image" src = {props.imgSrc} alt = {props.imgSrc}/>
            </div>
                )
}


export default Card3