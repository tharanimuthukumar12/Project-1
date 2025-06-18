import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <footer class="bg-dark text-white py-5 mt-5 border-top">
  <div class="container">
    <div class="row gy-4">
      <div class="col-md-4">
        <h4 class="fw-bold">Whispers And Whiskers Cafe</h4>
        <p>We are well known for the cosy atmosphere. The local’s favourite for events and parties.</p>
      </div>
      <div class="col-md-4">
        <h5>Quick Links</h5>
        <ul class="nav flex-column">
          <li class="nav-item"><Link class="nav-link p-0 text-white" to="/">Home</Link></li>
          <li class="nav-item"><Link class="nav-link p-0 text-white" to="/About">About</Link></li>
          <li class="nav-item"><Link class="nav-link p-0 text-white" to="/Menu">Menu</Link></li>
          <li class="nav-item"><Link class="nav-link p-0 text-white" to="/Gallery">Gallery</Link></li>
          <li class="nav-item"><Link class="nav-link p-0 text-white" to="/contact">Contact</Link></li>
          <li class="nav-item"><Link class="nav-link p-0 text-white" to="/Reservation">Reservation</Link></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Location</h5>
        <p>📍 Dr. N.G.P. Nagar, Kalapatti Road, Coimbatore – 641048, Tamil Nadu, India</p>
        <p>📞 44444 55555</p>
        <p>📧 info@whispersandwhiskers.in</p>
      </div>
    </div>
    <hr class="text-secondary my-4"/>
    <p class="text-center mb-0">© 2025 Whiskers And Whispers Cafe | Managed by Vamtech</p>
  </div>
</footer>
  )
}

export default footer