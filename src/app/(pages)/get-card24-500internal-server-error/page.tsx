import { GetCard24500InternalServerErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard24500InternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={` 500(Internal Server Error) `}
      src={GetCard24500InternalServerErrorImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard24500InternalServerErrorPage;
