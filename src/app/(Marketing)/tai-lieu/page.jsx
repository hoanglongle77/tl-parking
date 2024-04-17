import MainBanner from "@/layout/MainBanner/MainBanner";
import React from "react";

export const metadata = {
  title: "Tài liệu",
  description: "Smart Parking",
};

const DocumentsPage = () => {
  return (
    <>
      <MainBanner title={metadata.title} />
    </>
  );
};

export default DocumentsPage;
