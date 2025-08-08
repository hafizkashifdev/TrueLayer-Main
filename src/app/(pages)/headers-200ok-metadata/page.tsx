import { Headers200okMetadataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Headers200okMetadataPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={Headers200okMetadataImage}
      backRoute="/meta-main"
    />
  );
};

export default Headers200okMetadataPage;
