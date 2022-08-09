import 'react-router-dom'
import { Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar.js'
import Portfolio from './Pages/Portfolio.js'
import About from './Pages/About.js'

import linkedin from './Images/linkedin.png'
import github from './Images/GitHub_Logo.png'

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <nav className='navbar bg-primary p-4 navbar-dark fixed-bottom'>
        <h5 className='text-white'>Connect with me!</h5>
        <a href="https://www.linkedin.com/in/matt-browne108/" className="mx-auto d-block nav" target="_blank">
          <img src={linkedin}  height="50" className='nav-item'/>
        </a>
        <a href="https://github.com/mbrowne108/" className="mx-auto d-block nav" target="_blank">
          <img src={github} height="50" className='nav-item'/>
        </a> 
      </nav>
    </div>
  );
}

export default App;
