import { GetCard16ResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard16ResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={GetCard16ResponseBodyImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard16ResponseBodyPage;
