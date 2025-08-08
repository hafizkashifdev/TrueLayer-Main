import { AgaResponses202AcceptedHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses202AcceptedHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={` Headers`}
      src={AgaResponses202AcceptedHeadersImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses202AcceptedHeadersPage;
