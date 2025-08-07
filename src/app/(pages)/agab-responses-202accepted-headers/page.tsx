import { AgabResponses202AcceptedHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses202AcceptedHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgabResponses202AcceptedHeadersImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses202AcceptedHeadersPage;
