import React from 'react'
import Typewriter from "typewriter-effect";

import { Container } from '../styles/pages/Login'

const Login: React.FC = () => {
  return(
    <Container>
      <div className="container">
        <div className="login-form">
          <div className="main-div col-sm-12 col-md-9 col-lg-6">
            <div className="panel">
              <h2>Log In</h2>
              <p className="typist">
                <Typewriter
                  options={{
                    delay: 75,
                    loop: false,
                  }}
                  onInit={(typewriter)=> {

                  typewriter

                  .pauseFor(500)
                  .typeString('What are the things you love the most?')
                  .pauseFor(300)
                  .deleteAll()
                  .typeString('come on, <strong>MakeYourList</strong>!')
                  .pauseFor(1000)
                  .start();
                  }}
                />
              </p>
            </div>
            <form id="Login" >
              <div className="form-group">
                <input type="email" className="form-control" id="inputEmail" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="inputPassword" placeholder="Your Password" />
              </div>
              <div className="forgot">
                <a href="/app/reset-password">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Login
