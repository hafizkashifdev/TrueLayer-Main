import { GetCard14HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard14HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Header `}
      src={GetCard14HeaderImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard14HeaderPage;
