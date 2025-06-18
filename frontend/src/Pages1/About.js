import React from 'react'

const About = () => {
  return (
    <>
    <div className="container">
    <div className="breadcrumb-bg py-4">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center flex-wrap">
      <h2 className="text-white mb-0">About</h2>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 bg-transparent p-0">
          <li className="breadcrumb-item"><a href="index.html" className="text-white text-decoration-none">Home</a></li>
          <li className="breadcrumb-item active text-white" aria-current="page">About</li>
        </ol>
      </nav>
    </div>
  </div>
</div >
 <div className="container py-5" id="about">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <h5>ABOUT US</h5>
           <p/>
        Whiskers And Whispers cafe was established in 2019 with a mission to create an environment where our patrons can hang out with their loved ones and celebrate life's special moments. We've got the best ambience in Coimbatore with hearty food, a convivial place to gather and WOW everyday!
        <br/>
        Our vision is to be our patrons' beloved place of all time where they feel as comfortable as they are at their home.
      <p/>
          </div>
          <div className="col-md-6 text-center">
            <img src="/images/au.jpg" className="img-fluid" alt="About Us" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About