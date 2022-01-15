import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import "./register.css";
import { getSignup } from "../../store/signupReducer";

const Register = () => {
  const dispatch = useDispatch();
  const { signup } = useSelector((state) => state.signup);

  const [emailRes, setEmailRes] = useState("");
  const [passwordRes, setPasswordRes] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getSignup({emailRes, passwordRes}))
}
useEffect(() => {
  console.log(signup)
}, [signup])

  return (
    <div>
      <form onSubmit={handleClick}>
        <h2>sign up</h2>
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
        <button>sign up</button>
      </form>
    </div>);
}

export default Register;