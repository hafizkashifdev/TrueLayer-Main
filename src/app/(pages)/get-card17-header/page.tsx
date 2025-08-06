import { GetCard17HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard17HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Header`}
      src={GetCard17HeaderImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard17HeaderPage;
