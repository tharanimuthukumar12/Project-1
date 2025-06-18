import React from 'react'

const Gallery = () => {
  return (
    <>
    <div className="breadcrumb-bg py-4">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center flex-wrap">
      <h2 className="text-white mb-0">Gallery</h2>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 bg-transparent p-0">
          <li className="breadcrumb-item"><a href="index.html" className="text-white text-decoration-none">Home</a></li>
          <li className="breadcrumb-item active text-white" aria-current="page">Gallery</li>
        </ol>
      </nav>
    </div>
  </div>
</div >
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
    </>
  )
}


export default Gallery;