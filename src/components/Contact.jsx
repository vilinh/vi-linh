import React from "react";
import "../styles/contact.css";
import firebase from "../FirebaseConfig";

export default function Contact() {
  //create database in firebase
  const contactForm = firebase.database().ref("contactMessage");

  const contactFormSubmit = () => {
    let name = getElemVal("name");
    let email = getElemVal("email");
    let subject = getElemVal("subject");
    let message = getElemVal("message");
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
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="name"
              placeholder="name"
              required
              className="contact-input"
            />
            <input
              type="email"
              id="name"
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
