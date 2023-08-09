import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='project' element={<Project/>} />
      </Routes>

    </div>
  );
}

export default App;
