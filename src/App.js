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
import Payment from './components/Payment/Payment';
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

            <Route exact path='/Slider' element={<Slider/>} />

            <Route exact path='/Donate' element={<Donate/>} />

            <Route exact path='/Payment' element={<Payment/>} />
          
          </Routes>
    <Slider/>
        
    </div>
</Router>
  );
}

export default App;
