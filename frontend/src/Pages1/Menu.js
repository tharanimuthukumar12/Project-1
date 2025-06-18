import React from 'react';
import Header from '../Component/Header';
const Menu = () => {
        const demo=[
        {
            id:1,
            img:"/images/cheese.jpg" ,
            title:"Cheesy Nachos",
            des:"Crispy nachos topped with melted cheese and salsa.",
            price:"₹190"

        },
                {
            id:2,
            img:"/images/fry.jpg" ,
            title:"Fries",
            des:"Golden fries with spicy peri peri seasoning.",
            price:"₹100"
        },
                {
            id:3,
            img:"/images/wing.jpg",
            title:"Buffalo Wings",
            des:"Juicy chicken wings deep-fried and tossed in spicy Buffalo sauce",
            price:"₹300"
        },
                {
            id:4,
            img:"/images/st1.jpeg" ,
            title:"Chicken Tikka ",
            des:"Tender chicken chunks marinated in spiced yogurt, grilled to smoky perfection.",
            price:"₹190"

        },
                {
            id:5,
            img:"/images/st2.jpeg" ,
            title:"Fish Finger ",
            des:"Crispy golden fish strips, seasoned and deep-fried, served with tangy dip.",
            price:"₹190"

        },
                {
            id:6,
            img:"/images/st3.jpeg" ,
            title:"Cigar Rolls",
            des:"Thin, crispy rolls stuffed with spiced veggies or meat, shaped like cigars.",
            price:"₹230"

        },
                {
            id:7,
            img:"/images/st4.jpeg" ,
            title:"Prawn Samosa ",
            des:"Crunchy triangular pastry filled with flavorful prawn masala.",
            price:"₹270"

        },
                {
            id:8,
            img:"/images/st5.jpeg" ,
            title:"Masala Papad –",
            des:"Crispy papad topped with spicy chopped onions, tomatoes, and chaat masala.",
            price:"₹130"

        },
                {
            id:9,
            img:"/images/st6.jpeg" ,
            title:"Arancini Balls –",
            des:"Italian rice balls stuffed with cheese or sauce, breaded and deep-fried.",
            price:"₹220"

        },
    ]
    const starter=[
        {
            id:1,
            img:"/images/mc1.jpg" ,
            title:"Paneer Butter Masala with Naan",
            des:"Soft cubes of paneer cooked in a buttery tomato-based gravy, mildly spiced and full of flavor. Served with hot butter naan or steamed rice.",
            price:"₹390"

        },
                {
            id:2,
            img:"/images/mc2.jpg" ,
            title:"Fries",
            des:"Tender chicken breast grilled to perfection, served on a sizzling platter with sautéed vegetables, herbed rice, and pepper sauce for a hearty and flavorful experience",
            price:"₹470"
        },
                {
            id:3,
            img:"/images/mc3.jpg" ,
            title:"Thai Green Curry with Jasmine Rice",
            des:"A fragrant and creamy coconut-based curry made with fresh herbs, vegetables, and your choice of protein. Served with fluffy jasmine rice for a wholesome and exotic meal.",
            price:"₹410"
        },
    ]
        const dessert=[
        {
            id:1,
            img:"/images/d1.jpg" ,
            title:"Caramel Custard",
            des:"Silky smooth egg custard topped with a layer of golden caramel, chilled to perfection for a light and elegant finish to your meal.",
            price:"₹190"

        },
                {
            id:2,
            img:"/images/d2.jpg" ,
            title:"Nutella Cheesecake",
            des:"Creamy and smooth cheesecake on a buttery graham cracker crust, served plain or topped with your choice of strawberry, blueberry, or caramel sauce.",
            price:"₹270"
        },
                {
            id:3,
            img:"/images/d3.jpg" ,
            title:"Chocolate Brownie Sundae",
            des:"A warm, fudgy brownie served with a scoop of vanilla ice cream, drizzled with rich chocolate sauce and topped with crushed nuts.",
            price:"₹380"
        },
    ]
  return ( 
      <div className="container">
        <div className="breadcrumb-bg py-4">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <h2 className="text-white mb-0">Menu</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 bg-transparent p-0">
                  <li className="breadcrumb-item">
                    <a href="index.html" className="text-white text-decoration-none">Home</a>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Menu</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <h1>MENU</h1>
        <div className="text-center py-4">
          <h2 style={{ color: "#6c4f3d" }}>Our Menu</h2>
          <p className="lead">Taste the magic from every bite!</p>
        </div>

        {/* Starters */}
        <div className="container py-3">
          <h4 className="mb-3" style={{ color: "#6c4f3d" }}>Starters</h4>
          <div className="row g-4 mb-4">
            {
                demo.map(
                    (item)=>(
                <div className="col-md-4">
              <div className="card h-100">
                <img src={item.img} className="card-img-top" alt="Nachos" style={{ height: "200px", objectFit: "cover" }}/>
                  <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.des}</p>
                  <p className="fw-bold">{item.price}</p>
                </div>
              </div>
            </div>
                    )
                )
                
            }


            
            {/* <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/fry.jpg" className="card-img-top" alt="Fries" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Peri Peri Fries</h5>
                  <p className="card-text">Golden fries with spicy peri peri seasoning.</p>
                  <p className="fw-bold">₹100</p>
                </div>
              </div>
            </div> */}

            {/* Card 3 */}
            {/* <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/wing.jpg" className="card-img-top" alt="Wings" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Buffalo Wings</h5>
                  <p className="card-text">Juicy chicken wings deep-fried and tossed in spicy Buffalo sauce.</p>
                  <p className="fw-bold">₹300</p>
                </div>
              </div>
            </div>
          </div>}

          {/* Main Course */}
           <div className="container py-3">
           <h4 className="mb-3" style={{ color: "#6c4f3d" }}>Main Course</h4>
          <div className="row g-4 mb-4">
            {
                starter.map(
                    (st)=>(
                <div className="col-md-4">
              <div className="card h-100">
                <img src={st.img} className="card-img-top" alt="Nachos" style={{ height: "200px", objectFit: "cover" }}/>
                  <div className="card-body">
                  <h5 className="card-title">{st.title}</h5>
                  <p className="card-text">{st.des}</p>
                  <p className="fw-bold">{st.price}</p>
                </div>
              </div>
            </div>
                    )
                )
                
            }
            {/* <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/mc1.jpg" className="card-img-top" alt="Paneer" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Paneer Butter Masala with Naan</h5>
                  <p className="card-text">Soft paneer cubes in buttery tomato gravy, served with naan.</p>
                  <p className="fw-bold">₹420</p>
                </div>
              </div>
            </div> */}
              </div>
               </div>
            {/* <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/mc2.jpg" className="card-img-top" alt="Sizzler" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Grilled Chicken Sizzler</h5>
                  <p className="card-text">Grilled chicken with veggies, rice & pepper sauce on sizzler.</p>
                  <p className="fw-bold">₹470</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/mc3.jpg" className="card-img-top" alt="Curry" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Thai Green Curry with Jasmine Rice</h5>
                  <p className="card-text">Coconut-based Thai curry with veggies and jasmine rice.</p>
                  <p className="fw-bold">₹380</p>
                </div>
              </div>
            </div> */}
         

          {/* Desserts */}
          <h4 className="mb-3" style={{ color: "#6c4f3d" }}>Desserts</h4>
                     <div className="container py-3">

          <div className="row g-4 mb-4">
                        {
                dessert.map(
                    (ds)=>(
                <div className="col-md-4">
              <div className="card h-100">
                <img src={ds.img} className="card-img-top" alt="Nachos" style={{ height: "200px", objectFit: "cover" }}/>
                  <div className="card-body">
                  <h5 className="card-title">{ds.title}</h5>
                  <p className="card-text">{ds.des}</p>
                  <p className="fw-bold">{ds.price}</p>
                </div>
              </div>
            </div>
                    )
                )
                
            }
            {/* <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/d1.jpg" className="card-img-top" alt="Custard" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Caramel Custard</h5>
                  <p className="card-text">Silky egg custard with a golden caramel layer.</p>
                  <p className="fw-bold">₹280</p>
                </div>
              </div>
            </div> */}
</div>
            {/* <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/d2.jpg" className="card-img-top" alt="Cheesecake" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Nutella Cheesecake</h5>
                  <p className="card-text">Creamy cheesecake on buttery crust, Nutella-infused.</p>
                  <p className="fw-bold">₹470</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/d3.jpg" className="card-img-top" alt="Brownie" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">Chocolate Brownie Sundae</h5>
                  <p className="card-text">Warm brownie with vanilla ice cream & chocolate drizzle.</p>
                  <p className="fw-bold">₹380</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      </div>
  );
};

export default Menu; 
