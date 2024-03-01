import ContactForm from "@/components/Contacts/ContactForm/ContactForm";
import Contacts from "@/components/Contacts/Contacts";
import Maps from "@/components/Contacts/Maps/Maps";
import React from "react";

const page = () => {
  return (
    <div className="container py-4">
      <h1 className={`text-center`}>Liên hệ với chúng tôi</h1>
      <Contacts />
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-lg-4`}>
            <ContactForm />
          </div>
          <div className={`col-lg-8`}>
            <Maps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
