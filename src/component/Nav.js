import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
  
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <div className="container-fluid">
    
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <Link className="navbar-brand mt-2 mt-lg-0" t0="/home">
        <h2>Student Help-Desk</h2>
      </Link>
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link" to="/home">Dashboard</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/event">Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/placements">Placements</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/scholorship">Scholorship</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
      </ul>
    
    </div>
    

    
    

      
      
      
      
    

  </div>

</nav>

    </>
  );
}

export default Nav;
