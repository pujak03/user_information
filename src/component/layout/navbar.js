import React  from "react";
import {NavLink,Link} from "react-router-dom";
const Navbar=() => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link " exact to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" exact to="/about">About</NavLink>
            <NavLink className="nav-item nav-link" exact to="/contact">Contact</NavLink>
            
          </div>
          <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
        </div>
      </nav>
    );
};

export default Navbar;