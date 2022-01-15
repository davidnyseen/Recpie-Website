import { Link } from "react-router-dom";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import './banner.css'

export default function App() {
  return (
    <header>
      <div className="container">

        <nav className="main-nav">
          <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="categories">Categories</Link></li>
          <li><Link to="create">Create recipe</Link></li>
          <li><Link to="myaccount">My account</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="register">register</Link></li>
          <li><Link to="Login">login</Link></li>


          </ul>
        </nav>

      </div>

    </header>
  );
}