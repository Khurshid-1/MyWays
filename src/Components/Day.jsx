import React from 'react'
import Card from 'react-bootstrap/Card';
import data from '../weather.json';


function day(props) {
  return (
    <Card className="cardsize">
        <Card.Title>{props.day}</Card.Title>
    <Card.Img className="imgsize"variant="top" src={props.img} />
    <Card.Body>
    {props.text}
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
   </Card>
  )
}

export default day;