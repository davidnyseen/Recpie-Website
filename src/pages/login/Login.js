import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import "./login.css";
import { getLogin } from "../../store/loginReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.login);
  let navigate = useNavigate(); // like href

  const [emailRes, setEmailRes] = useState("");
  const [passwordRes, setPasswordRes] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [passwordErr, setpasswordErr] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getLogin({emailRes, passwordRes}))
}
useEffect(() => {
  if(login.user){
    navigate('/');
  }
  if (login.errors) {
    setemailErr(login.errors.email);
    setpasswordErr(login.errors.password);
  }
  }, [login])

  return (
    <div>
      <form className="form1" onSubmit={handleClick}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="text" name="email"
          value={emailRes}
          onChange={(e) => setEmailRes(e.target.value)} />
        <div className="email error">{emailErr}</div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password"
          value={passwordRes}
          onChange={(e) => setPasswordRes(e.target.value)} />
        <div className="password error">{passwordErr}</div>
        <button>login</button>
      </form>
    </div>);
}

export default Login;