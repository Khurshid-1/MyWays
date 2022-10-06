import './App.css';
import night from './Components/images/night.jpg';
import day from './Components/images/day.jpg';
import Navbar from './Components/Navbar';
import Rightside from './Components/Rightside';
import Leftside from './Components/Leftside';

function App() {
  return (
    <div 
    className="App" 
    style={{ backgroundImage: `${(true)? `url(${day})`  :  `url(${night})`}`
      ,backgroundRepeat:'no-repeat',height:'100vh',width:'100vw'}}>
      <Navbar />
      <div className='content'>
      <div className='left'><Leftside /></div>
      <div className='right'><Rightside /></div>
      </div>
    </div>
  );
}

export default App;
