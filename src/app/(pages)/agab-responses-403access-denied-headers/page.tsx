import { AgabResponses403AccessDeniedHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses403AccessDeniedHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgabResponses403AccessDeniedHeadersImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses403AccessDeniedHeadersPage;
