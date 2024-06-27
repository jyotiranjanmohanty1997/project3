
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Experiences from './Components/Experiences';
import Resources from './Components/Resources';
import Contactus from './Components/Contactus';
function App() {
  return (
    <HashRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Services' element={<Services/>}/>
        <Route exact path='/Experiences' element={<Experiences/>}/>
        <Route exact path='/Resources' element={<Resources/>}/>
        <Route exact path='/Contact' element={<Contactus/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
