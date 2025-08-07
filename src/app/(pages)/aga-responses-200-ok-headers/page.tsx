import { AgaResponses200OkHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses200OkHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgaResponses200OkHeadersImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses200OkHeadersPage;
