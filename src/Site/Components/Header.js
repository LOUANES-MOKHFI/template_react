import React from 'react'

import {  Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
const Header = () => {
  return (
    <div className="container-fluid bg-light position-relative shadow">
      <Nav
        className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <Link href="" className="navbar-brand font-weight-bold text-secondary" style={{fontSize: "50px"}}>
          <i className="flaticon-043-teddy-bear"></i>
          <span className="text-primary"> KidKinder</span>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
            <NavLink to="Classes.html" className="nav-item nav-link">Classes</NavLink>
            <NavLink to="team.html" className="nav-item nav-link">Teachers</NavLink>
            <NavLink to="gallery.html" className="nav-item nav-link">Gallery</NavLink>
            <div className="nav-item dropdown">
              <NavLink
                to="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                >Pages</NavLink>
              <div className="dropdown-menu rounded-0 m-0">
                <NavLink to="blog.html" className="dropdown-item">Blog Grid</NavLink>
                <NavLink to="single.html" className="dropdown-item">Blog Detail</NavLink>
              </div>
            </div>
            <NavLink to="contact.html" className="nav-item nav-link">Contact</NavLink>
          </div>
          <NavLink to="" className="btn btn-primary px-4">Join Class</NavLink>
        </div>
      </Nav>
    </div>
  )
}

export default Header
