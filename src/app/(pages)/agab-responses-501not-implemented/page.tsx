import { AgabResponses501NotImplementedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses501NotImplementedPage = () => {
  return (
    <CommonPage
      pageTitle={`501(Not Implemented)`}
      src={AgabResponses501NotImplementedImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses501NotImplementedPage;
