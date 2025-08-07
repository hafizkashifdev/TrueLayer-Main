import { ResponseBodyMetadataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBodyMetadataPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={ResponseBodyMetadataImage}
      backRoute="/meta-main"
    />
  );
};

export default ResponseBodyMetadataPage;
