import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChanges = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //submit all to my email by default
  };

  return (
    <footer>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChanges}
            placeholder="John Doe"
          />
        </label>

        <label>
          Email:
          <input
            name="email"
            value={formData.email}
            onChange={handleChanges}
            placeholder="johndoe@email.com"
          />
        </label>

        <label>
          Message:
          <input
            name="message"
            value={formData.message}
            onChange={handleChanges}
            placeholder="Let's work together!"
          />
          <button type="submit">Send</button>
        </label>
      </form>
    </footer>
  );
};

export default Footer;
