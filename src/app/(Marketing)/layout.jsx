import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";
import React from "react";

const MarketingLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="my-3 min-vh-100">{children}</div>
      <Footer />
    </>
  );
};

export default MarketingLayout;
