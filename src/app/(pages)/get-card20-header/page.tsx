import { GetCard20HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard20HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Header`}
      src={GetCard20HeaderImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard20HeaderPage;
