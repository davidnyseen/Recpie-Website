import { Link } from "react-router-dom";
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


          </ul>
        </nav>

      </div>

    </header>
  );
}