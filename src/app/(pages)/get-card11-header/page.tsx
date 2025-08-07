import { GetCard11HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard11HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Header `}
      src={GetCard11HeaderImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard11HeaderPage;
