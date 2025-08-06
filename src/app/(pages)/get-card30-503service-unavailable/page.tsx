import { GetCard30503ServiceUnavailableImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard30503ServiceUnavailablePage = () => {
  return (
    <CommonPage
      pageTitle={`503(Service Unavailable) `}
      src={GetCard30503ServiceUnavailableImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard30503ServiceUnavailablePage;
