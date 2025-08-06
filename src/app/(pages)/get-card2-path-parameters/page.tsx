import { GetCard2PathParametersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard2PathParametersPage = () => {
  return (
    <CommonPage
      pageTitle={`Path Parameters`}
      src={GetCard2PathParametersImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard2PathParametersPage;
