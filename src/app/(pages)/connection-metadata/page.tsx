import { ConnectionMetadataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConnectionMetadataPage = () => {
  return (
    <CommonPage
      pageTitle={`Connection`}
      src={ConnectionMetadataImage}
      backRoute="/meta-main"
    />
  );
};

export default ConnectionMetadataPage;
