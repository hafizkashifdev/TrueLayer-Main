import { GetCard35HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard35HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Header `}
      src={GetCard35HeaderImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard35HeaderPage;
