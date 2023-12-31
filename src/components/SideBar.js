import React from 'react'
import { Link } from 'react-router-dom';
import LinkComponent from './LinkComponent';

function Sidebar(props) {
  return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

  
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>

   
      <hr className="sidebar-divider my-0" />

      <LinkComponent to="/"
        name="Dashboard"
      />
  
      <hr className="sidebar-divider" />

      <div className="sidebar-heading">
        Interface
      </div>

      <li className="nav-item">
        <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
          aria-expanded="true" aria-controls="collapseTwo">
          <i className="fa-solid fa-wrench"></i>
          <span>Components</span>
        </div>
      </li>
      <LinkComponent to="/add-user"
      name = "Add User"
      />
      <Link>
        <li className="nav-item">
          <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i class="fa-sharp fa-solid fa-address-card"></i>
            <span>Profile</span>
          </div>
        </li>
      </Link>
      <Link to='/task' >
        <li className="nav-item">
          <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i class="fa-sharp fa-solid fa-arrows-rotate"></i>
            <span>Task Pending</span>
          </div>
        </li>
      </Link>
    </ul>
  </>
}

export default Sidebar;