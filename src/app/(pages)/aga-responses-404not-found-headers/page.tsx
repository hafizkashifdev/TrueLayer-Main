import { AgaResponses404NotFoundHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses404NotFoundHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={` Headers`}
      src={AgaResponses404NotFoundHeadersImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses404NotFoundHeadersPage;
