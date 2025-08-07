import { AgaResponses403AccessDeniedHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses403AccessDeniedHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`403(Access Denied) Headers`}
      src={AgaResponses403AccessDeniedHeadersImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses403AccessDeniedHeadersPage;
