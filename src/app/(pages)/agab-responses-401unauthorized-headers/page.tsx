import { AgabResponses401UnauthorizedHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses401UnauthorizedHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgabResponses401UnauthorizedHeadersImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses401UnauthorizedHeadersPage;
