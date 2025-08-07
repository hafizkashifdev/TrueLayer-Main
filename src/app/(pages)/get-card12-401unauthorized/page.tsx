import { GetCard12401UnauthorizedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard12401UnauthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`401(Unauthorized) `}
      src={GetCard12401UnauthorizedImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard12401UnauthorizedPage;
