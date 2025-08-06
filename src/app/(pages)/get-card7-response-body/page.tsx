import { GetCard7ResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard7ResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response body`}
      src={GetCard7ResponseBodyImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard7ResponseBodyPage;
