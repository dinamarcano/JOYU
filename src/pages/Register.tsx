import { Input } from '../components/Input'
import '../styles/global.css'
import '../styles/auth.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { BackgroundHills } from '../components/BackgroundHills'

export const Register = () => {
  return (
    <div className="container">
      <img src={logo} className="auth-logo" />
      <BackgroundHills />
      <div className="content">
        <h2 className="title">
          Sign up with your
          <br />
          institutional account
        </h2>

        <Input placeholder="Email Address" />
        <Input placeholder="Name" />
        <Input placeholder="Password" type="password" />

        <div className="remember">
          <input type="checkbox" />
          <label>Remember me</label>
        </div>

        <button className="button">Signup</button>

        <Link to="/login" className="link">
          Or Log in
        </Link>
      </div>
    </div>
  )
}
