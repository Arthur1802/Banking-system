import { useState } from 'react'
import './Signin.css'
// import { Link } from 'react-router-dom'

const Signin = () => {
    const [showPasswd, setShowPasswd] = useState(false)
    const [showConfirmPasswd, setShowConfirmPasswd] = useState(false)

    return (
        <div className = "App">
            <div className = "auth-panel">
                <h1>LOGO</h1>
                <h1>Sign Up</h1>
                <form>
                    <div className = "form-floating">
                        <input
                            className = "form-control"
                            id = "floatingInput"
                            type = "text"
                            placeholder = "Example: John Doe"
                            name = "user_name"
                            required
                        />
                        <label htmlFor = "floatingInput">Name</label>
                    </div>

                    <div className = "form-floating">
                        <input
                            className = "form-control"
                            id = "floatingInput"
                            type = "email"
                            placeholder = "Example: john.doe@email.com"
                            name = "user_email"
                        />
                        <label htmlFor = "floatingInput">Email</label>
                    </div>

                    <div className = "form-floating">
                        <input
                            className = "form-control"
                            id = "floatingInput"
                            type = "password"
                            placeholder = "Example: password"
                            name = "user_password"
                        />
                        <label htmlFor = "floatingInput">Password</label>
                        <div className = "passwd-toggle"><i className = {`eye-icon fa-solid fa-eye-${showPasswd ? "" : "slash"}`} onClick = {() => setShowPasswd(!showPasswd)}></i></div>
                    </div>

                    <div className = "form-floating">
                        <input
                            className = "form-control"
                            id = "floatingInput"
                            type = "password"
                            placeholder = "Example: password"
                            name = "user_password"
                        />
                        <label htmlFor = "floatingInput">Confirm Password</label>
                        <div className = "passwd-toggle"><i className = {`eye-icon fa-solid fa-eye-${showConfirmPasswd ? "" : "slash"}`} onClick = {() => setShowConfirmPasswd(!showConfirmPasswd)}></i></div>
                    </div>

                    <div className = "terms">
                        <input
                            type = "checkbox"
                            name = "terms"
                        />
                        <p>I agree to the terms and conditions</p>
                    </div>

                    <button className = "btn btn-primary" type = "submit">Sign Up</button>

                    {/* <p>Already have an account? <Link to = "/login">Login</Link></p> */}
                    <span>Already have an account? <a href = "/login">Login</a></span>

                    <div className = "separator">
                        <span>or</span>
                    </div>

                    <button className = "btn btn-secondary" type = "button">
                        <span className = "btn-logo-wrapper">
                            <i className = "fa-brands fa-google"></i>
                            Sign Up with Google
                        </span>
                    </button>

                    <button className = "btn btn-secondary" type = "button">
                        <span className = "btn-logo-wrapper">
                            <i className = "fa-brands fa-microsoft"></i>
                            Sign Up with Microsoft
                        </span>
                    </button>
                    
                    <button className = "btn btn-secondary" type = "button">
                        <span className = "btn-logo-wrapper">
                            <i className = "fa-brands fa-apple"></i>
                            Sign Up with Apple
                        </span>
                    </button>
                </form>
            </div>
            {/* <div className = "wallpaper"></div> */}
        </div>
    )
}

export default Signin