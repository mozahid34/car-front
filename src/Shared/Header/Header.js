import React from 'react';
import icon from '../../assets/icons/Group 2.png'
const Header = () => {
    return (
        <div>
            {/* Navbar */}
            <section>
            <div className="navbar  bg-base-100">
  <div className="flex-1">
    <a href='#' className="btn btn-ghost normal-case max-w-sm text-sm"> <img src= {icon} />  </a>
  </div>

  
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
</div>
            </section>
    
        </div>
    );
};

export default Header;