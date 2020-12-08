import React from "react"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"

function HomePage(props) {

//Home Page, 3 Hero Components
return (
    <div>
    <Hero title = {props.title} subTitle = {props.subTitle} text = {props.text}/>
    <Carousel/>
    </div>
)

}


export default HomePage