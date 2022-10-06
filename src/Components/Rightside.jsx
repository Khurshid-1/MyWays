import React from 'react';
import Week from './Week';
import './Rightside.css'
import Rightbottom from './Rightbottom';


function Rightside() {
  return (
   <div className='right'>
     <Week />
     <Rightbottom />
     </div>
  )
}

export default Rightside;
