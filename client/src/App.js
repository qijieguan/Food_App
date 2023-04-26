import Header from './component/Header.js';
import Home from './component/Home.js';
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
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
