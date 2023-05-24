import Header from './component/Header.js';
import Home from './component/Home.js';
import Menu from './component/Menu.js';
import Flavors from './component/Flavors.js';
import About from './component/About.js';
import ItemPage from './component/ItemPage.js';
import Locations from './component/Locations.js';
import Footer from './component/Footer.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import { legacy_createStore as createStore } from 'redux';
import allReducers from './component/reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/Menu' element={<Menu/>} exact/>
            <Route path='/Flavors' element={<Flavors/>} exact/>
            <Route path='/Menu/:Item' element={<ItemPage/>} exact/>
            <Route path="/About" element={<About/>} exact/>
            <Route path='/Locations' element={<Locations/>} exact/>
          </Routes>
          <Footer/>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
