import React,{useState} from 'react';
import data from './../weather.json';
import Day from './Day'
import './Week.css';
import img12 from './images/12.png';
import img23 from './images/23.png';
import img30 from './images/30.png';
import img26 from './images/26.png';



function Week() {
  let no = data.query.results.channel.item;
  return (
    <div className='weekday'>
    <Day className="card" day={no.forecast[0].day} text={no.forecast[0].text} img={img23}/>
    <Day className="card" day={no.forecast[1].day} text={no.forecast[1].text} img={img30}/>
    <Day className="card" day={no.forecast[2].day} text={no.forecast[2].text} img={img26}/>
    <Day className="card" day={no.forecast[3].day} text={no.forecast[3].text} img={img26}/>
    <Day className="card" day={no.forecast[4].day} text={no.forecast[4].text} img={img30}/>
    <Day className="card" day={no.forecast[5].day} text={no.forecast[5].text} img={img30}/>
    <Day className="card" day={no.forecast[6].day} text={no.forecast[6].text} img={img12}/>
    </div>
  )
}

export default Week