import { ResponsesMetadataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponsesMetadataPage = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={ResponsesMetadataImage}
      backRoute="/meta-main"
    />
  );
};

export default ResponsesMetadataPage;
