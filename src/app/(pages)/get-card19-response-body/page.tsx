import { GetCard19ResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard19ResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={GetCard19ResponseBodyImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard19ResponseBodyPage;
