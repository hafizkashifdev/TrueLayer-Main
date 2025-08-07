import { GetCard13ResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard13ResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={GetCard13ResponseBodyImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard13ResponseBodyPage;
