import { GetCard25ResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard25ResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={GetCard25ResponseBodyImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard25ResponseBodyPage;
