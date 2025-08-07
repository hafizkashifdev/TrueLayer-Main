import { GetCard8HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard8HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Header`}
      src={GetCard8HeaderImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard8HeaderPage;
