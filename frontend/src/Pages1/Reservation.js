import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

const Reservation = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const gno = form.gno.value;
    const date = form.date.value;
    const phno = form.phno.value;
    const request = form.request.value;
    const planfor = form.planfor.value;
    const occasion = form.occasion.value;

    if (
      name === "" ||
      email === "" ||
      gno === "" ||
      date === "" ||
      phno === "" ||
      request === "" ||
      planfor === "" ||
      occasion === ""
    ) {
      toast.warn('Please fill all required fields');
    } else {
      const foods = { name, email, gno, date, phno, request, planfor, occasion };

      fetch('http://localhost:6065/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(foods),
      })
        .then((data) => {
          toast.success('Reservation added successfully');
          form.reset();
          window.location.href = "/";
        });
    }
  };

  return (
    <div>
      <ToastContainer />

      {/* Breadcrumb Section */}
      <div className="breadcrumb-bg py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <h2 className="text-white mb-0">Reservation</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 bg-transparent p-0">
                <li className="breadcrumb-item">
                  <a href="/" className="text-white text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item active text-white" aria-current="page">
                  Reservation
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Reservation Form */}
      <div className="card upload6">
        <div className="card-body upload5">
          <center>
            <form onSubmit={handleSubmit}>
              <h1>RESERVATION</h1>

              <label>Name</label>
              <input name="name" type="text" /><br /><br />
              <label>Email</label>
              <input name="email" type="email" /><br /><br />
              <label>Number Of Guests</label>
              <input name="gno" type="number" /><br /><br />
              <label>Date</label>
              <input name="date" type="date" /><br /><br />
              <label>Time</label>
              <input name="time" type="time" /><br /><br />
              <label>Phone Number</label>
              <input name="phno" type="tel" /><br /><br />
              <label>Any Special Request</label><br />
              <textarea name="request" rows="4" cols="30" /><br />
              <label>Plan for:</label>
              <select name="planfor">
                <option value="">--Select--</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="IPL Screening">IPL Screening</option>
              </select><br /><br />
              <label>Occasion:</label>
              <select name="occasion">
                <option value="">--Select--</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Get Together">Get Together</option>
                <option value="Other">Other</option>
              </select><br /><br />
              <button type="submit">Submit</button><br/><br/>
             <Link to="/Update">
  <button type="button">Delete</button>
</Link><br/><br/>

 <Link to="/Edit">
  <button type="button">Edit</button>
</Link><br/><br/>



            </form>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
