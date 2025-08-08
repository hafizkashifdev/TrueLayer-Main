import { GetCard23HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard23HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Header `}
      src={GetCard23HeaderImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard23HeaderPage;
