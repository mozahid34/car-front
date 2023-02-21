import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/icons/Group 2.png'
const Header = () => {
    return (
        <div>
            {/* Navbar */}
            <section>
            <div className="navbar  bg-base-100 mb-4">
  <div className="flex-1 ">
    <Link to="/">
    <span className="btn btn-ghost normal-case text-sm"> <img src= {icon} />  </span> </Link>
  </div>

  
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li> <Link to= "/" >Home</Link> </li>
      
      <li> <Link to="/logIn">LogIn</Link> </li>
    </ul>
  </div>
</div>
            </section>
    
        </div>
    );
};

export default Header;