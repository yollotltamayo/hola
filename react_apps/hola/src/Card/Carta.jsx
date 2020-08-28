import Card from 'react-bootstrap/Card'
import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns'
import Data from '../Data/Data'
const col1 = {
    backgroundColor : "red"
}
const col2 = {
    backgroundColor: "blue"
}
const Carta =   (props) => { 
    const Cons =  (cards,index)=>{
        return(
            <Card style = {props.color === 1? col1 : col2}>
                <Card.Title>{cards.titulo}</Card.Title>
                <Card.Body>
            <Card.Text>{cards.texto}</Card.Text>
    <Card.Link href= {cards.link}>Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    return Data[props.color].map(Cons)
}
function Cartas (props) { 
        return (
            <CardColumns>
                <Carta color = {props.color}/>
            </CardColumns>
        )
}
export default Cartas;


