import React from "react"

import Container from "react-bootstrap/Container"
import Col  from "react-bootstrap/Col"
import siblings from "../assets/images/IMG5.png"
import img6 from "../assets/images/IMG6.png"
import Card2 from "../components/Card2"
import img7 from "../assets/images/IMG7.png"
import img8 from "../assets/images/IMG8.png"
import img9 from "../assets/images/IMG9.png"
import img11 from "../assets/images/IMG11.png"
import img12 from "../assets/images/IMG12.png"
import img13 from "../assets/images/IMG13.png"

//Gallery page content
class GalleryPage extends React.Component{

    render(){
        return (
            <Container fluid = {true}>
                <Col className = "">
                    <Card2 imgSrc = {siblings} alt = {siblings}/>
                    <Card2 imgSrc = {img6} alt = {img6}/>
                    <Card2 imgSrc = {img7} alt = {img7}/>
                    <Card2 imgSrc = {img8} alt = {img8}/>
                    <Card2 imgSrc = {img9} alt = {img9}/>
                    <Card2 imgSrc = {img11} alt = {img11}/>
                    <Card2 imgSrc = {img13} alt = {img13}/>
                    <Card2 imgSrc = {img12} alt = {img12}/>
                </Col>
            </Container>
        )
    }
}

export default GalleryPage