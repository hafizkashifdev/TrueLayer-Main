import { AgaResponses503ServiceUnavailableHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses503ServiceUnavailableHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgaResponses503ServiceUnavailableHeadersImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses503ServiceUnavailableHeadersPage;
