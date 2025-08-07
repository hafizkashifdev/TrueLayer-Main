import { GetCard3QueryParametersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard3QueryParametersPage = () => {
  return (
    <CommonPage
      pageTitle={`Query Parameters`}
      src={GetCard3QueryParametersImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard3QueryParametersPage;
