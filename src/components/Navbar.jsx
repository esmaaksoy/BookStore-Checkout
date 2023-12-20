import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   <div>
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Bookstore 
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page" href="#">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/newproduct" className="nav-link" href="#">
           Add New Book
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/productlist" className="nav-link" href="#">
            Book List
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" href="#">
          About
          </NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
   </div>
  );
}

export default Navbar