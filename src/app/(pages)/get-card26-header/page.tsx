import { GetCard26HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard26HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={` Header `}
      src={GetCard26HeaderImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard26HeaderPage;
