import { GetCard34ResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard34ResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={GetCard34ResponseBodyImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard34ResponseBodyPage;
