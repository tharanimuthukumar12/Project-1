// import React from 'react'
// import { ToastContainer ,toast } from 'react-toastify';
// // import { useEffect } from 'react';

// const Upload = () => {

    
//     const handleSubmit=(event)=>{

//         event.preventDefault();
        
//         const form=event.target;
//         const name=event.target.name.value;
//         const email=event.target.email.value;
//         const gno=event.target.gno.value;
//         const date=event.target.date.value;
//         const phno=event.target.phno.value;
//         const request=event.target.request.value;
//         const planfor=event.target.planfor.value;
//         const occasion=event.target.occasion.value;
        

//         if(name==="" || email==="" ||gno==="" || date==="" || phno===""|| request===""|| planfor===""|| occasion==="")
//         {
//             toast.warn('fill Required ');
//         }else{
//             const foods={name,email,gno,date,phno,request,planfor,occasion};
//             // console.log(foods,"foods in object ");
            
//             fetch('http://localhost:6065/upload',{
//                 method:"POST",
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 body:JSON.stringify(foods),
//             })
//             // .then((res)=>res.json())
//             .then((data)=>{
//                 toast.success('added successfully');
//                 form.reset();
//                 window.location.href="/update"
//             }
//             )

//         }

//         }

//         return (
//             <div>
//                 <ToastContainer/>
//               <div class="card upload6">
//          <div class="card-body upload5">
//         <form onSubmit={handleSubmit} >
//              <h1>RESERVATION</h1>
       
//           <label>Name</label>
//           <input name="name" type="text" /><br />
//           <label>Email</label>
//           <input name="email" type="email" /><br /><br />
//           <label>Number Of Guests</label>
//           <input name="gno" type="number" /><br /><br />
//           <label>Date</label>
//           <input name="date" type="date" /><br /><br />
//           <label>Time</label>
//           <input name="time" type="time" /><br /><br />
//           <label>Phone Number</label>
//           <input name="phno" type="tel" /><br /><br />
//           <label>Any Special Request</label><br />
//           <textarea name="request" rows="4" cols="30" /><br />
//           <label>Plan for:</label>
//           <select name="planfor">
//             <option value="Breakfast">Breakfast</option>
//             <option value="Lunch">Lunch</option>
//             <option value="Dinner">Dinner</option>
//             <option value="IPL Screening">IPL Screening</option>
//           </select><br /><br />
//           <label>Occasion:</label>
//           <select name="occasion">
//             <option value="Birthday Party">Birthday Party</option>
//             <option value="Anniversary">Anniversary</option>
//             <option value="Get Together">Get Together</option>
//             <option value="Other">Other</option>
//           </select><br /><br />
//           <button type="submit">Submit</button>
//         </form>
//         </div>
//         </div>
//     </div>
    
//        )

// }


// export default Upload
