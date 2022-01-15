import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import "./register.css";
import { useNavigate } from "react-router-dom";

import { getSignup } from "../../store/signupReducer";

const Register = () => {
  const dispatch = useDispatch();
  const { signup } = useSelector((state) => state.signup);
  let navigate = useNavigate(); // like href

  const [emailRes, setEmailRes] = useState("");
  const [passwordRes, setPasswordRes] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [passwordErr, setpasswordErr] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getSignup({emailRes, passwordRes}))
}
useEffect(() => {
if(signup.user){
  navigate('/');
}
if (signup.errors) {
  setemailErr(signup.errors.email);
  setpasswordErr(signup.errors.password);
}
}, [signup])

  return (
    <div>
      <form onSubmit={handleClick} className="form2">
        <h2>sign up</h2>
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
        <button>sign up</button>
      </form>
    </div>);
}

export default Register;