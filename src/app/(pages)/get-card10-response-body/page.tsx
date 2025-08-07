import { GetCard10ResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard10ResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={GetCard10ResponseBodyImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard10ResponseBodyPage;
