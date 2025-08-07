import { AgabResponses503ServiceUnavailableHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses503ServiceUnavailableHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={` Headers`}
      src={AgabResponses503ServiceUnavailableHeadersImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses503ServiceUnavailableHeadersPage;
