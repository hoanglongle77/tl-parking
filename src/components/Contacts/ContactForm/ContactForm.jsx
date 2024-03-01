import React from "react";
import styles from "../contacts.module.css";

const ContactForm = () => {
  return (
    <div className={`container bg-warning p-4 rounded`}>
      <form id="contactForm">
        <div className={`mb-3`}>
          <label for="name" className={`form-label`}>
            Họ và tên
          </label>
          <input
            type="text"
            className={`form-control`}
            id="name"
            name="name"
            required
          />
        </div>
        <div className={`mb-3`}>
          <label for="email" className={`form-label`}>
            Địa chỉ email
          </label>
          <input
            type="email"
            className={`form-control`}
            id="email"
            name="email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="phone" className={`form-label`}>
            Số điện thoại
          </label>
          <input
            type="tel"
            className={`form-control`}
            id="phone"
            name="phone"
            required
          />
        </div>
        <div className="mb-3">
          <label for="message" className={`form-label`}>
            Mô tả yêu cầu
          </label>
          <textarea
            className={`form-control`}
            id="message"
            name="message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className={`btn btn-primary`}>
          Gửi mail
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
