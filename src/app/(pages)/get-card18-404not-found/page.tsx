import { GetCard18404NotFoundImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard18404NotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={`404(Not Found) `}
      src={GetCard18404NotFoundImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard18404NotFoundPage;
