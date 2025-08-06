import { GetCard9202AcceptedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard9202AcceptedPage = () => {
  return (
    <CommonPage
      pageTitle={`202(Accepted) `}
      src={GetCard9202AcceptedImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard9202AcceptedPage;
