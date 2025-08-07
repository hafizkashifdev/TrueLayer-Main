import { AgabResponses404NotFoundHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses404NotFoundHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={` Headers`}
      src={AgabResponses404NotFoundHeadersImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses404NotFoundHeadersPage;
