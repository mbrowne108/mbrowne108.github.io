import logo from './logo.svg';
import './App.css';
import 'react-router-dom'
import { Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar.js'
import Portfolio from './Pages/Portfolio.js'
import About from './Pages/About.js'
import Resume from './Pages/Resume.js'

function App() {
  return (
    <div className="App">
      <h1>Matt Browne</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
