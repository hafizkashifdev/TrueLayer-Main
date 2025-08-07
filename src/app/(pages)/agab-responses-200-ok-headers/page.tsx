import { AgabResponses200OkHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses200OkHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgabResponses200OkHeadersImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses200OkHeadersPage;
