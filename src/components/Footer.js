import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//Footer component
function Footer(){

return(
<footer className = "mt-5">
    <Container fluid = {true}>
        <Row className = "border-top justify-content-between p-3">
            <Col className = "p-0 footer-font-style" md = {3} sm = {12}>
                Derek Calamari
            </Col>
            <Col className = "p-0 d-flex justify-content-end footer-font-style" md = {3}>
                Copyright Ⓒ Derek Calamari. All rights reserved.
            </Col>
        </Row>
    </Container>
</footer>
)

}



export default Footer