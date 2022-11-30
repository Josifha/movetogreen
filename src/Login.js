import React, { useState } from 'react'
import './Login.css'
import {Link} from "react-router-dom";
//import Request from './Sqltest'
import LOGOS from './LOGOS.png';

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn= e=>
            {
                e.preventDefault()
            /*    const request = new Request(
                    "INSERT INTO logincredential (id,USER_NAMES, Passwords) VALUES (?, ?);', [1,email,password]",
                  function (err,rowCount,rows) {
                      if (err) throw err;
                else 
                console.log(rowCount);
                //res.send(rows);
                console.log('Inserted');
                }) */
            }

    const register =e =>{
        e.preventDefault()
      
    }
    return (
       
        <div className='login'>
             <Link to='/'>
          <img className="login__logo" src={LOGOS} />
          
          </Link>
          <div className='login__container'>
              <h1 className='change_font'>Sign-In</h1>
              <form>
                  <h5 className='change_font'>E-mail</h5>
                  <input type='text' value={email} onChange={e=>setEmail(e.target.value)}></input>
                  <h5 className='change_font'>Password</h5>
                  <input type='password' value={password} onChange={e=>setPassword(e.target.value)}></input>
                  <Link to ='/'>
                  <button  type='submit'onClick={signIn}  className='login__signInButton'>Sign In</button>
                  </Link>
              </form>
              <p className='change_font'>
                    By signing-in you agree to the BIAL FAKE CLONE Conditions of Use
                </p>
                <Link to ='/SignIn'>
                <button Onclick={register} className='login__registerButton'>Create your BIAL Account</button>
                </Link>
          </div>
        </div>
    )
}

export default Login
