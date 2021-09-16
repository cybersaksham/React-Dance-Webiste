import React from "react";
import "../Style/Contact.css";

const Contact = () => {
  return (
    <div>
      <form id="contactForm" action="" method="POST">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Enter your message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
