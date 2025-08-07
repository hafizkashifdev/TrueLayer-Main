import { GetCard32HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard32HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Header `}
      src={GetCard32HeaderImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard32HeaderPage;
