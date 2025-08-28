import React, { useState } from "react";
import General from './General'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id= "contact">
       <div className="contact">
      <General heading="Contact Me" />
      </div>
      <div className='form'>
              <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>

      </div>

    </div>
   
  );
};

export default Contact;