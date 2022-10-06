import React from 'react'
import data from './../weather.json';
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
<h2>{data.query.results.channel.title}</h2>

    </div>
  )
}

export default Navbar;