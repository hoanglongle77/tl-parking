import ContactForm from "@/components/Contacts/ContactForm/ContactForm";
import Contacts from "@/components/Contacts/Contacts";
import Maps from "@/components/Contacts/Maps/Maps";
import MainBanner from "@/layout/MainBanner/MainBanner";
import React from "react";

export const metadata = {
  title: "Liên hệ",
  description: "Smart Parking",
};

const ContactPage = () => {
  return (
    <>
      <MainBanner title={metadata.title} />
      <div className={`container my-2 my-lg-5`}>
        <Contacts />
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-lg-5`}>
              <ContactForm />
            </div>
            <div className={`col-lg-7`}>
              <Maps />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
