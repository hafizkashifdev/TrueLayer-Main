import { ResponseBodyMetadata4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBodyMetadata4Page = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={ResponseBodyMetadata4Image}
      backRoute="/meta-main"
    />
  );
};

export default ResponseBodyMetadata4Page;
