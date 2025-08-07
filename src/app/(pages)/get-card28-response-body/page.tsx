import { GetCard28ResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard28ResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={GetCard28ResponseBodyImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard28ResponseBodyPage;
