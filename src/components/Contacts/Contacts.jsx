import React from "react";
import styles from "./contacts.module.css";
import { contactData } from "@/libs/ContactData";

const Contacts = () => {
  return (
    <div className={`container py-3`}>
      <div className="row">
        {contactData.map((contact) => (
          <div key={contact.id} className={`col-lg-4`}>
            <ContactCard
              icon={contact.icon}
              title={contact.title}
              text={contact.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, text }) => {
  return (
    <div
      className={`${styles.contactCard} card text-center mb-4 border-warning`}
    >
      <h1 className={`bg-warning my-3 mx-3 p-3 rounded`}>{icon}</h1>
      <div className={`card-body`}>
        <h5 className={`card-title`}>{title}</h5>
        <p className={`card-text`}>{text}</p>
      </div>
    </div>
  );
};

export default Contacts;
