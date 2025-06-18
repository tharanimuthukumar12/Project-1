import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="index.html">WhiskersAndWhispersCafe</a>
    <a class="navbar-brand" href="index.html"><img src="/images/proj.jpg" width="150px" height="100px" alt="Logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto align-items-lg-center">
        <li class="nav-item me-4"><Link class="nav-link" to="/">Home</Link></li>
        <li class="nav-item me-4"><Link class="nav-link" to="/About">About</Link></li>
        <li class="nav-item me-4"><Link class="nav-link"  to="/Menu">Menu</Link></li>
        <li class="nav-item me-4"><Link class="nav-link" to="/Gallery">Gallery</Link></li>
        <li class="nav-item me-4"><Link class="nav-link" to="/contact">Contact</Link></li>
   
        <li class="nav-item me-3"><Link class="btn btn-outline-dark" to="/Reservation">Reservation</Link></li>
         
        <li class="nav-item">
          <a href="#"><i class="bi bi-cart-fill fs-4"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header