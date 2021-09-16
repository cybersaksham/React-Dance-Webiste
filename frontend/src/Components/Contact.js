import React, { useState, useContext } from "react";
import "../Style/Contact.css";
import ContactContext from "../Context/Contact/ContactContext";

const Contact = () => {
  const { sendRequest } = useContext(ContactContext);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const submitForm = (e) => {
    e.preventDefault();
    sendRequest(contact);
    setContact({ name: "", email: "", message: "" });
  };

  const changeHandle = () => {
    setContact({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    });
  };

  return (
    <div>
      <form id="contactForm" action="" method="POST" onSubmit={submitForm}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={contact.name}
          onChange={changeHandle}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={contact.email}
          onChange={changeHandle}
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Enter your message"
          value={contact.message}
          onChange={changeHandle}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
