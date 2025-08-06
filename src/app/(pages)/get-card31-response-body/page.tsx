import { GetCard31ResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard31ResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={GetCard31ResponseBodyImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard31ResponseBodyPage;
