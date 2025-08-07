import { AgabResponses501NotImplementedHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses501NotImplementedHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgabResponses501NotImplementedHeadersImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses501NotImplementedHeadersPage;
