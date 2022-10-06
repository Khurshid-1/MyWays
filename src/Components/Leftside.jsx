import React from 'react'
import data from './../weather.json';
import Card from 'react-bootstrap/Card';
import img23 from './images/23.png';
import './Leftside.css'


function Leftside() {
  return (
    <div className='leftt'>
      <Card className="leftside">
      <Card.Img className="imgsize1"variant="top" src={img23} />
        <Card.Title className='lefttitle'>{`${data.query.results.channel.item.condition.temp}°C`}</Card.Title>
    
    <Card.Body>
    {data.query.results.channel.item.condition.date}
      <Card.Text>
        {data.query.results.channel.item.condition.text}
      </Card.Text>
    </Card.Body>
   </Card>
    </div>
  )
}

export default Leftside;