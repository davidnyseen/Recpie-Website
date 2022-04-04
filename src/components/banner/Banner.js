import { Link } from "react-router-dom";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import './banner.css'
import { useDispatch, useSelector } from "react-redux";
import { loginValue } from "../../store/loginReducer";

export default function App() {
  const { login } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  async function  handlelogout(e){
    try {
      const res = await fetch('http://localhost:5000/logout')
      const data = await res.json();
      if (data) {
        dispatch(loginValue({}))
      }
    }
    catch {
      console.log('cannt logout')
    }
  }

  return (
    <header>
      <div className="container">

        <nav className="main-nav">
          <ul>

            <li><Link to="categories">Categories</Link></li>
            <li><Link to="/">Home</Link></li>
            {login.user && <li><Link to="create">Create recipe</Link></li>}
            <li><Link to="myaccount">My account</Link></li>
            <li><Link to="about">About</Link></li>
            {!login.user && <li><Link to="Login">login</Link></li>}
            {login.user && <li onClick={handlelogout}><Link to="/" >logout</Link></li>}

          </ul>
        </nav>
        <div className="usernamebanner">{login.user && <h2>welcome {login.user}</h2>}</div>

      </div>
      
    </header>
  );
}