//import logo from './logo.svg';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Header from './Header';
import  Checkout from './Checkout';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Donate from './components/Donate/Donate';
import SignIn from './SignIn';
import Slider from './slider';

function App() {
  return (
   
    <Router>
    
    <div className="App">
      
    <Header/>

        {/*HEADER*/}
        <Routes>
       
            <Route exact path='/' element={<Home />}  />
             
            <Route exact path='/Login' element={<Login/>} />

            <Route exact path='/SignIn' element={<SignIn/>} />

            <Route exact path='/Donate' element={<Donate/>} />
          
          </Routes>
   
    </div>
</Router>
  );
}

export default App;
