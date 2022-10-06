import React from 'react'
import data from './../weather.json';
import Card from 'react-bootstrap/Card';
import './Rightbottom.css'

function Rightbottom() {
  return (<div className='rightbottom'>
    <p>More info</p>
    <div >
        <div className='outerdiv'>
            <div className='innerdiv'><p>Humidity - </p>{data.query.results.channel.atmosphere.humidity}</div>
            <div className='innerdiv'><p>Pressure - </p>{data.query.results.channel.atmosphere.pressure}{data.query.results.channel.units.pressure}</div>
            <div className='innerdiv'><p>Rising - </p>{data.query.results.channel.atmosphere.rising}</div>

        </div>
        <div className='outerdiv'>
            <div className='innerdiv'><p>Chill - </p>{data.query.results.channel.wind.chill}</div>
            <div className='innerdiv'><p>Direction - </p>{data.query.results.channel.wind.direction}</div>
            <div className='innerdiv'><p>Speed - </p>{data.query.results.channel.wind.speed}{data.query.results.channel.units.speed}</div> 
        </div>
        <div className='outerdiv'>
            <div className='innerdiv'><p>Sunrise - </p>{data.query.results.channel.astronomy.sunrise}</div>
            <div className='innerdiv'><p>Sunset - </p>{data.query.results.channel.astronomy.sunset}</div>
            
        </div>

    </div>
    </div>
  )
}

export default Rightbottom