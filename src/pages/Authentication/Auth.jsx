import Helmet from "../../components/helmet/Helmet"
import { Link } from "react-router-dom"
import './auth.css'
import { useState } from "react"

function Auth() {
  const [rPanel, setRPanel] = useState(false)

  const handlerClick = () => {
    rPanel ? setRPanel(false) : setRPanel(true)
  }
  return (
    <>
      <Helmet title={rPanel ? 'Singn up' : 'Login'}>
        <div className="auth">
          <div className={rPanel ? 'container right-panel-active' : 'container'} id="container">
            <div className="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
                <button className="btn-home"><Link to={'/'}>Back home</Link> </button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
                <button className="btn-home"><Link to={'/'}>Back home</Link> </button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us please login with your personal info</p>
                  <button className="ghost" id="signIn" onClick={handlerClick}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button className="ghost" id="signUp" onClick={handlerClick}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Helmet >
    </>
  )
}

export default Auth