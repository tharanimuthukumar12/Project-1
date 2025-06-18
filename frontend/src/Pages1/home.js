import React from 'react';

const Home = () => {
  return (
    <>
    
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          backgroundImage: "url('/images/bg3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px"
        }}
      >
        <h2 className="pt-5 text-white fw-bold">WHISKERS AND WHISPERS CAFE</h2>
        <a href="reservation.html" className="btn btn-light mt-3 fs-5">Book a Table</a>
      </div>

      {/* ABOUT US SECTION */}
      <div className="container py-5" id="about">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <h5>ABOUT US</h5>
            <p>
                      Whiskers And Whispers cafe was established in 2019 with a mission to create an environment where our patrons can hang out with their loved ones and celebrate life's special moments. We've got the best ambience in Coimbatore with hearty food, a convivial place to gather and WOW everyday!
<br /><br />
              Our vision is to be our patrons' beloved place of all time where they feel as comfortable as they are at their home.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src="/images/au.jpg" className="img-fluid" alt="About Us" />
          </div>
        </div>
      </div>

      {/* WHY US SECTION */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src="/images/wu.jpg" className="img-fluid" alt="Why Us" />
          </div>
          <div className="col-md-6 text-start">
            <h5>WHY US</h5>
            <p>
              Whether you're catching up with friends or seeking a peaceful solo moment, our cozy interiors, ambient music, and Instagram-worthy corners create the perfect escape.

<br /><br />
              <strong>Location Theme:</strong><br />
              • Dark and cosy<br />
              • Illuminated Floor lights<br /><br />
              <strong>Safety Measures:</strong><br />
              <br />
              •Clean, sanitized tables after every use<br />
• Spacious, socially distanced seating


            </p>
          </div>
        </div>
      </div>

      {/* SPECIAL DISHES SECTION */}
      <div className="container py-5" id="menu">
        <h3 className="text-center mb-4">Our Special Dishes</h3>
        <div className="row">
          {/* Cards */}
          {[{
            img: '/images/alf.jpg', title: 'Spaghetti Alfredo', desc: 'Creamy pasta served with herbs and cheese.'
          }, {
            img: '/images/nacho.jpg', title: 'Cheesy Nachos', desc: 'Crispy nachos topped with cheese and salsa.'
          }, {
            img: '/images/bro.jpg', title: 'Chocolate Brownie', desc: 'Delicious warm brownie served with ice cream.'
          }].map((dish, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card h-100">
                <img src={dish.img} className="card-img-top" alt={dish.title} height="400px" />
                <div className="card-body">
                  <h5 className="card-title">{dish.title}</h5>
                  <p className="card-text">{dish.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="menu.html" className="btn btn-dark mt-3">Explore Menu</a>
        </div>
      </div>

      {/* GALLERY */}
      <div className="container py-5" id="gallery">
        <h3 className="mb-4 text-center">Gallery</h3>
        <div className="row g-3">
          {['/images/g1.jpg', '/images/g2.jpg', '/images/g3.jpg', '/images/g4.jpg', '/images/g5.jpg', '/images/g8.jpg'].map((src, i) => (
            <div className="col-md-4" key={i}>
              <img src={src} className="img-fluid rounded" style={{ height: '250px', width: '100%' }} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="container py-5">
        <h3 className="mb-4 text-center">What Our Customers Say</h3>
        <div className="row g-4">
          {[
            { name: "Vanitha", review: "Amazing ambience and great food!", stars: 5 },
            { name: "Muthukumar", review: "Absolutely loved the brownie!", stars: 4 },
            { name: "Harini", review: "The staff were super friendly!", stars: 5 }
          ].map((t, i) => (
            <div className="col-md-4" key={i}>
              <div className="card shadow h-100">
                <div className="card-body">
                  <p>"{t.review}"</p>
                  <h5>- {t.name}</h5>
                  <div className="text-warning">
                    {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LOCATION SECTION */}
      <div className="container py-5">
        <h3 className="text-center mb-4">Location</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="ratio ratio-4x3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0918769217297!2d77.00384248468188!3d11.01828097975879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857e9f3c4e5a5%3A0x5a6e1e2e1f1b6b6b!2sDr.%20N.G.P.%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1623051234567!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h5>Whiskers and Whispers Cafe</h5>
            <p>Dr. N.G.P. Nagar, Kalapatti Road, Coimbatore – 641048, Tamil Nadu, India</p>
            <a href="https://www.google.com/maps/place/NGP+Hub,+Kalapatti" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-3">Get Directions</a>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-5 bg-light" id="contact">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row">
            <div className="col-md-6">
              <h5>Get in Touch</h5>
              <p><strong>Instagram:</strong> whiskersandwhisperscafe</p>
              <p><strong>Phone:</strong> <a href="tel:4444455555">44444 55555</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@whispersandwhiskerscafe.com">info@whispersandwhiskerscafe.com</a></p>
              <p><strong>Opening Hours:</strong><br />Mon–Sun: 11:00 AM – 11:00 PM</p>
            </div>
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
