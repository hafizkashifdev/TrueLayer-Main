import { GetCard4HeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard4HeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={GetCard4HeadersImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard4HeadersPage;
