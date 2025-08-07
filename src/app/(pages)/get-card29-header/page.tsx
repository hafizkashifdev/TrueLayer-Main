import { GetCard29HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard29HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Header `}
      src={GetCard29HeaderImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard29HeaderPage;
