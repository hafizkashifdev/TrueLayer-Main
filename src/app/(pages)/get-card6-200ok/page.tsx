import { GetCard6200OkImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard6200OkPage = () => {
  return (
    <CommonPage
      pageTitle={`200(Ok) `}
      src={GetCard6200OkImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard6200OkPage;
