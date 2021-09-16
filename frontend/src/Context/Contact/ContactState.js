import React from "react";
import ContactContext from "./ContactContext";

const ContactState = (props) => {
  const HOST = "http://localhost:5000/contact";

  const sendRequest = async ({ name, email, message }) => {
    await fetch(HOST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
  };

  return (
    <ContactContext.Provider value={{ sendRequest }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
