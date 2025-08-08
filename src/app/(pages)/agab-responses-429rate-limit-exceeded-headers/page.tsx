import { AgabResponses429RateLimitExceededHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses429RateLimitExceededHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgabResponses429RateLimitExceededHeadersImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses429RateLimitExceededHeadersPage;
