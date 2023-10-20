import logo from './logo.png';
import "./Navbar.css";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navBar">
          <div className="container-fluid">
          <Link to="/">
              <img src={logo} alt="logo navbar" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navBar-titles">
                <li className="nav-item">
                  <Link to="/category/category2"><a className="nav-link" >PS2</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/category/category3"><a className="nav-link">PS3</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/category/category4"><a className="nav-link">PS4</a></Link>
                </li>
              </ul>
            </div>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;