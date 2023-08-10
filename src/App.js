import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
// import Contact from './components/Contact';
import Project from './components/Project';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='skills' element={<Skills/>}/>
        {/* <Route path='contact' element={<Contact/>}/> */}
        <Route path='project' element={<Project/>} />
        <Route path='card' element={<Card src='/img/c++.png' statement='1 year of experience'/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
