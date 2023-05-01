import Header from './component/Header.js';
import Home from './component/Home.js';
import Menu from './component/Menu.js';
import Flavors from './component/Flavors.js';
import Footer from './component/Footer.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/Menu' element={<Menu/>} exact/>
          <Route path='/Flavors' element={<Flavors/>} exact/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
