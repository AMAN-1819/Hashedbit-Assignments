// BookingForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Mobile:</label>
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
