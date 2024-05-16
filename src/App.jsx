import { useState } from 'react'
import removebg from './assets/removebg.png'
import JIITlogo from './assets/images.png'
import './App.css'


function App() {
  return (
    <>
      <div class="container">
        <div class="left-section">
          <div class="set-left">
            <img src={removebg} alt="JIIT logo"/>
            <h1>Embark on Journey to Effective Data Management</h1>
            <p>Empowering JIIT with seamless data management: streamline processes, enhance decision-making, and unlock new efficiences.</p>
          </div>
        </div>
        <div class="right-section">
          <div class="sign-in-card">
            <img src={JIITlogo} alt="JIIT logo"/>
            <h2>sign in</h2>
            <input type="email" placeholder="Email address"/>
            <input type="password" placeholder="Password"/>
            <a href="#">Forgot Password</a>
            <p>New to JIIT? <a href="#">Sign Up</a></p>
            <div class="terms">
              <input type="checkbox" id = "terms-checkbox"/>
              <label for="terms-checkbox">By selecting Continue, you agree to our Terms of Service and acknowledge our Privacy Policy</label>
            </div>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
