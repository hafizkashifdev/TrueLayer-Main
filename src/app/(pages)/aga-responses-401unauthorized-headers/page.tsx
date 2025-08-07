import { AgaResponses401UnauthorizedHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses401UnauthorizedHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgaResponses401UnauthorizedHeadersImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses401UnauthorizedHeadersPage;
