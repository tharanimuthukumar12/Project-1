import React from 'react'

const Contact = () => {
  return (
    <div className="container">
    <div className="breadcrumb-bg py-4">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center flex-wrap">
      <h2 className="text-white mb-0">CONTACT</h2>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 bg-transparent p-0">
          <li className="breadcrumb-item"><a href="index.html" className="text-white text-decoration-none">Home</a></li>
          <li className="breadcrumb-item active text-white" aria-current="page">Contact</li>
        </ol>
      </nav>
    </div>
  </div>
</div >
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
      </div>
  )
}

export default Contact