import { Link } from "react-router-dom";
import './banner.css'
import Search from './../search/Search';

export default function App() {
  return (
    <div className="banner">
      <h1>welcome</h1>
      <Search></Search>
      <nav

      >
        {/* <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> */}
      </nav>
    </div>
  );
}