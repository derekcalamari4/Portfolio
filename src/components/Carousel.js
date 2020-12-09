//imports
import React from "react"
import me2 from "../assets/images/Me2.png"
import Container from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import img2 from "../assets/images/IMG2.png"
import img3 from "../assets/images/IMG3.png"
import Card from "../components/Card"

//Carousel to render Card Components
class Carousel extends React.Component{
    //carousel constructor
    constructor(props){
        super(props)
        //state with item array
        this.state = {
                items: [
                    {
                        id: 0,
                        title: "First day of college",
                        subTitle: "Me and Bucky!",
                        imgSrc: me2,
                        link: "https://www.wisc.edu",
                        selected: false
                    },
                    {
                        id: 1,
                        title: "Family",
                        subTitle: "Thanksgiving Day!",
                        imgSrc: img2,
                        link: "https://www.history.com/topics/thanksgiving/history-of-thanksgiving",
                        selected: false
                    },
                    {
                        id:2,
                        title: "My brothers and I",
                        subTitle: "Chicago Bears game!",
                        imgSrc: img3,
                        link: "https://www.chicagobears.com/"
                    }
                        ]
        }
    }


//handleCardClick function--creates Card components for Carousel component
    handleCardClick = (id, card)=>{
        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) =>{
        return items.map(item =>{
            return <Card item = {item} click = {(e=>this.handleCardClick(item.id, e))} key = {item.id}/>
        })
    }


//render Card components in a Carousel
    render(){
        return (
            <Container fluid = {true}>
                <Row className = "justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel