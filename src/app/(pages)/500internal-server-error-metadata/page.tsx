import { InternalServerErrorMetadataImage500 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InternalServerErrorMetadataPage500 = () => {
  return (
    <CommonPage
      pageTitle={`500(Internal Server Error)`}
      src={InternalServerErrorMetadataImage500}
      backRoute="/meta-main"
    />
  );
};

export default InternalServerErrorMetadataPage500;
