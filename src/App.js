//Imports
import React from "react"
import "./App.css"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import me3 from "../src/assets/images/Me3.png"

//Component imports
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import GalleryPage from "./pages/GalleryPage"
import ProjectsPage from "./pages/ProjectsPage"

class App extends React.Component {

  //constructor and state with header links and pages info
  constructor (props){
    super(props)
    this.state = {
      title: "Derek Calamari",
      headerLinks : [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"},
        {title: "Gallery", path: "/gallery"},
        {title: "Projects", path: "./projects"}
      ],
      home: {
        title: 'Welcome!',
        subTitle: "I'm Derek Calamari:",
        text: "A Computer Science student at the University of Wisconsin-Madison.",
      },
      about: {
        title: "About me",
      },
      contact: {
        title: "Contact Me"
    },
      gallery: {
        title: "Gallery"
      },
      projects: {
        title: "Projects"
      }
  }
}

//Main header for the portfolio (react-bootstrap components)
  render(){
    return (
      <Router>
        <Container className = "p-0" fluid = {true}>
          <Navbar className="border-bottom" expand = "lg" >
            <Navbar.Brand>Derek Calamari</Navbar.Brand>
            <Navbar.Toggle className = "border-0" aria-controls= "navbar-toggle"/>
          <Navbar.Collapse id = "navbar-toggle">
            <Nav className = "ml-auto">
              <Link className = "nav-link link-text-style" to="/">Home</Link>
              <Link className = "nav-link link-text-style" to="/about">About</Link>
              <Link className = "nav-link link-text-style" to = "/gallery">Gallery</Link>
              <Link className = "nav-link link-text-style" to = "/projects">Projects</Link>
              <Link className = "nav-link link-text-style" to="/contact">Contact</Link>
              <img src = {me3} className = "me3-style"alt = "me3"/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <Route path = "/" exact render= {()=> <HomePage title = {this.state.home.title} subTitle = {this.state.home.subTitle} text = {this.state.home.text}/>}/>
          <Route path = "/about" exact render= {()=> <AboutPage title = {this.state.about.title} subTitle = {this.state.about.subTitle} text = {this.state.about.text}/>}/>
          <Route path = "/gallery" exact render= {()=> <GalleryPage title = {this.state.gallery.title} subTitle = {this.state.gallery.subTitle} text = {this.state.gallery.tex}/>}/>
          <Route path = "/projects" exact render = {()=> <ProjectsPage title = {this.state.projects.titel} subTitle = {this.state.projects.subTitle} text = {this.state.text}/>}/>
          <Route path = "/contact" exact render= {()=> <ContactPage title = {this.state.contact.title} subTitle = {this.state.contact.subTitle} text = {this.state.contact.text}/>}/>
          <Footer/>
        </Container>
      </Router>
    )
  }
}

export default App
