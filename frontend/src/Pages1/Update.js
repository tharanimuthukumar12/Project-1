// src/Pages1/Update.js
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";

const Update = () => {
  const [ProductItems, setProductsItems] = useState([]);

  // Fetch all reservation/snack items on mount
  useEffect(() => {
    fetch(`http://localhost:6065/sns`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => setProductsItems(data))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load data");
      });
  }, []);

  // Delete item by id and update UI
  const DeleteItems = (id) => {
    fetch(`http://localhost:6065/deletesnack/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete");
        return res.json();
      })
      .then(() => {
        toast.success('Deleted successfully');
        setProductsItems((prev) =>
          prev.filter((item) => item._id !== id)
        );
      })
      .catch((err) => {
        console.error(err);
        toast.error("Delete failed");
      });
  };

  return (
    <div className="container mt-4">
      <h2>Reservations List</h2>
      <div className='card table2'>
        <div className='card-body'>
          <table className="table table-bordered table-striped w-100 text-center">
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>GUESTS</th>
                <th>DATE</th>
                <th>PHONE</th>
                <th>REQUEST</th>
                <th>PLAN FOR</th>
                <th>OCCASION</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {ProductItems.length === 0 ? (
                <tr>
                  <td colSpan="9">No reservations found.</td>
                </tr>
              ) : (
                ProductItems.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.gno}</td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td>{item.phno}</td>
                    <td>{item.request || '-'}</td>
                    <td>{item.planfor}</td>
                    <td>{item.occasion}</td>
                    <td>
                      <button
                        className='table3 me-2'
                        onClick={() => DeleteItems(item._id)}
                      >
                        Delete
                      </button>
                      <Link to={`/edit/${item._id}`}>
                        <button><FiEdit /></button>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Update;
