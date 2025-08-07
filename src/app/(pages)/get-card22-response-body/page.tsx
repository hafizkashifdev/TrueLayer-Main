import { GetCard22ResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard22ResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={GetCard22ResponseBodyImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard22ResponseBodyPage;
