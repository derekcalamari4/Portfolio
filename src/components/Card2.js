//imports
import React from "react"

//Second card component
function Card2(props){
        return (
            <div className = "d-inline-block g-card">
                 <img className = "g-card-image" src = {props.imgSrc} alt = {props.imgSrc}/>
            </div>
                )
}


export default Card2