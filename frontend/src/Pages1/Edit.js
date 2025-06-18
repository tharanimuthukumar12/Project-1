// src/Pages1/Edit.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    gno: '',
    date: '',
    phno: '',
    request: '',
    planfor: '',
    occasion: ''
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:6065/snsbyid/${id}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setForm(data);
      } catch (err) {
        toast.error("Failed to load reservation data");
        console.error("Failed to fetch reservation:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch(`http://localhost:6065/allproductsnacks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Failed to update');
      toast.success('Reservation updated successfully!');
      navigate('/Update');
    } catch (err) {
      toast.error('Failed to update reservation.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading reservation data...</div>;

  return (
    <div className="container mt-4">
      <h2>Edit Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name || ''}
          onChange={handleChange}
          placeholder="Name"
          required
          disabled={submitting}
        /><br />
        <input
          name="email"
          type="email"
          value={form.email || ''}
          onChange={handleChange}
          placeholder="Email"
          required
          disabled={submitting}
        /><br />
        <input
          name="gno"
          type="number"
          value={form.gno || ''}
          onChange={handleChange}
          placeholder="Number of Guests"
          required
          disabled={submitting}
        /><br />
        <input
          name="date"
          type="date"
          value={form.date ? form.date.split('T')[0] : ''}
          onChange={handleChange}
          required
          disabled={submitting}
        /><br />
        <input
          name="phno"
          type="tel"
          value={form.phno || ''}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          disabled={submitting}
        /><br />
        <textarea
          name="request"
          value={form.request || ''}
          onChange={handleChange}
          placeholder="Any Special Request"
          disabled={submitting}
        /><br />
        <select
          name="planfor"
          value={form.planfor || ''}
          onChange={handleChange}
          required
          disabled={submitting}
        >
          <option value="">Select Plan For</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="IPL Screening">IPL Screening</option>
        </select><br />
        <select
          name="occasion"
          value={form.occasion || ''}
          onChange={handleChange}
          required
          disabled={submitting}
        >
          <option value="">Select Occasion</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Get Together">Get Together</option>
          <option value="Other">Other</option>
        </select><br /><br />

        <button type="submit" disabled={submitting}>
          {submitting ? 'Updating...' : 'Update Reservation'}
        </button>

        

      </form>
    </div>
  );
};

export default Edit;
