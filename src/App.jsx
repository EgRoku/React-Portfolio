import './App.css';
import {Routes, Route} from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Resume from './containers/resume';
import About from './containers/about';
import Navbar from './components/navBar';
import particles from './utils/particles';

function App() {

  const handleInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className="App">
      {/* { particles js} */}

      <Particles id='particles' options={particles} init={handleInit}/>

      {/* { navbar } */}
      <Navbar/>

      {/* { main page content } */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
    </div>
  );
}

export default App;
