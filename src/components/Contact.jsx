import React from "react";
import "../styles/contact.css";
import firebase from "../FirebaseConfig";

export default function Contact() {
  //create database in firebase
  const contactForm = firebase.database().ref("contactMessage");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const contactFormSubmit = () => {
    let name = getElemVal("name");
    let email = getElemVal("email");
    let subject = getElemVal("subject");
    let message = getElemVal("message");

    saveMessages(name, email, subject, message);
  };

  const saveMessages = (name, email, subject, message) => {
    var newContactFormRef = contactForm.push();
    newContactFormRef.set({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
  };

  const getElemVal = (id) => {
    return document.getElementById(id).value;
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h1 className="contact-title">contact</h1>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="name"
              required
              className="contact-input"
            />
            <input
              type="email"
              id="email"
              placeholder="email"
              required
              className="contact-input"
            />
            <input
              type="text"
              id="subject"
              placeholder="subject"
              required
              className="contact-input"
            />
            <textarea
              id="message"
              placeholder="message"
              required
              className="contact-input"
              rows={5}
            />
            <button
              type="submit"
              className="contact-submit"
              onClick={contactFormSubmit}
            >
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
