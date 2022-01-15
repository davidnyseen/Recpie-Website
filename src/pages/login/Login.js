import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import "./login.css";
import { getLogin } from "../../store/loginReducer";

const Login = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.login);

  const [emailRes, setEmailRes] = useState("");
  const [passwordRes, setPasswordRes] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getLogin({emailRes, passwordRes}))
}
useEffect(() => {
  console.log(login)
}, [login])
  return (
    <div>
      <form onSubmit={handleClick}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="text" name="email"
          value={emailRes}
          onChange={(e) => setEmailRes(e.target.value)} />
        <div className="email error"></div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password"
          value={passwordRes}
          onChange={(e) => setPasswordRes(e.target.value)} />
        <div className="password error"></div>
        <button>login</button>
      </form>
    </div>);
}

export default Login;