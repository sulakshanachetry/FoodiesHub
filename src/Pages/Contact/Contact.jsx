import React from "react";
import image from "../../assets/backgroundContact.avif";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.contact}>
      <div
        className={styles.leftSide}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.rightSide}>
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;