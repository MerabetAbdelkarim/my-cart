import { useState } from "react"
import Helmet from "../../components/helmet/Helmet"
import { Link, useNavigate } from "react-router-dom"
import './auth.css'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

import { auth, storage, db } from "../../firebase.config";
import { setDoc, doc } from "firebase/firestore";

import { toast } from "react-toastify"
import AnimationLoanding from "../../components/UI/AnimationLoanding";


function Auth() {
  const [rPanel, setRPanel] = useState(false)

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [emaiSignup, setEmailSignup] = useState('')
  const [passwordSignup, setPasswordSignup] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const [emailSiginin, setEmailSiginin] = useState('')
  const [passwordSiginin, setPasswordSiginin] = useState('')

  const signUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emaiSignup,
        passwordSignup
      )

      const storageRef = ref(storage, `images/${Date.now() + name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on((error) => {
        toast.error(error.message)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          //update user profile
          await updateProfile(user, {
            displayName: name,
            photoURL: downloadURL,
          });
          //stor user data in firestor database
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            displayName: name,
            emaiSignup,
            photoURL: downloadURL,
          })
        })
      })
      const user = userCredential.user;
      setLoading(false)
      toast.success('Acount creacted')
      setRPanel(false)

    } catch (error) {
      setLoading(false)
      toast.error('something went wrong')
    }
  }

  const signIn = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailSiginin,
        passwordSiginin
      )
      const user = userCredential.user;
      setLoading(false)
      toast.success('Successfully logged in')
      navigate('/checkout')
    } catch (error) {
      setLoading(false)
      toast.error('something went wrong')
    }
  }

  const handlerClick = () => {
    rPanel ? setRPanel(false) : setRPanel(true)
  }

  const handlerClickx = (e) => {
    e.preventDefault()
    rPanel ? setRPanel(false) : setRPanel(true)
  }
  return (
    <>
      <Helmet title={rPanel ? 'Singn up' : 'Login'}>
        <div className="auth">
          <div className={rPanel ? 'container right-panel-active' : 'container'} id="container">
            {
              loading ? <AnimationLoanding /> : <>
                <div className="form-container sign-up-container">
                  <form onSubmit={signUp}>
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" onChange={(e) => setEmailSignup(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPasswordSignup(e.target.value)} />
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <button className="btn-sing" type="submit">Sign Up</button>
                    <div className="mt-2 d-sm-none">
                      You have an account?
                    </div>
                    <div className="btns d-flex align-items-center gap-3  d-sm-none">
                      <button className="btn-home" onClick={handlerClickx}><Link >SIGN IN</Link> </button>
                      <span>Or</span>
                      <button className="btn-home" ><Link to={'/'}>Back home</Link> </button>
                    </div>
                    <button className="btn-home d-none d-sm-block "><Link to={'/'}>Back home</Link> </button>
                  </form>
                </div>
                <div className="form-container sign-in-container">
                  <form onSubmit={signIn}>
                    <h1>Sign in</h1>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" onChange={(e) => setEmailSiginin(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPasswordSiginin(e.target.value)} />
                    <a href="#">Forgot your password?</a>
                    <button className="btn-sing">Sign In</button>
                    <div className="mt-2 d-sm-none">
                      You don't have an account?
                    </div>
                    <div className="btns d-flex align-items-center gap-3 mt-2 d-sm-none">
                      <button className="btn-home" onClick={handlerClickx}><Link >SIGN UP</Link> </button>
                      <span>Or</span>
                      <button className="btn-home" ><Link to={'/'}>Back home</Link> </button>
                    </div>
                    <button className="btn-home d-none d-sm-block "><Link to={'/'}>Back home</Link> </button>
                  </form>
                </div>
                <div className="overlay-container">
                  <div className="overlay">
                    <div className="overlay-panel overlay-left">
                      <h1>Welcome Back!</h1>
                      <p>To keep connected with us please login with your personal info</p>
                      <button className="ghost" onClick={handlerClick}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                      <h1>Hello, Friend!</h1>
                      <p>Enter your personal details and start journey with us</p>
                      <button className="ghost" onClick={handlerClick}>Sign Up</button>
                    </div>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </Helmet >
    </>
  )
}

export default Auth