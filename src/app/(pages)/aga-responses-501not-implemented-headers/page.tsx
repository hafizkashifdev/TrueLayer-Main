import { AgaResponses501NotImplementedHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses501NotImplementedHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgaResponses501NotImplementedHeadersImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses501NotImplementedHeadersPage;
