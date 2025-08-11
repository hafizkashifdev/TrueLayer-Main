import { NotImplementedMetaData5011Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const NotImplementedMetaData5011Page = () => {
  return (
    <CommonPage
      pageTitle={`501(Not Implemented)`}
      src={NotImplementedMetaData5011Image}
      backRoute="/meta-main"
    />
  );
};

export default NotImplementedMetaData5011Page;
