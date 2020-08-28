import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  Jumbotron from 'react-bootstrap/Jumbotron'
import Cartas from './Card/Carta'
import Button from 'react-bootstrap/Button'
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
const [count ,setCount] = useState(1);
  return (
        <Container>
            <Row>
                <Col>
                <Jumbotron className="color">
                        <h1>Hello, world!</h1>
    <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
    </p>
                </Jumbotron>
                </Col>
            </Row>
            <Button variant = "primary" onClick = {() =>  setCount(1 - count)}>hola</Button>
            <Cartas color = {count}/>
        </Container>
  );
}

export default App;
