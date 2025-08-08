import { HeadersMetadataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HeadersMetadataPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={HeadersMetadataImage}
      backRoute="/meta-main"
    />
  );
};

export default HeadersMetadataPage;
