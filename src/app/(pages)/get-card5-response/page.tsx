import { GetCard5ResponseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard5ResponsePage = () => {
  return (
    <CommonPage
      pageTitle={`Response`}
      src={GetCard5ResponseImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard5ResponsePage;
