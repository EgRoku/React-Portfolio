import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './containers/home';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Resume from './containers/resume';
import About from './containers/about';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
      {/* { particles js} */}

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
