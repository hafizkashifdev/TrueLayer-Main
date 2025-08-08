import { AgaResponses429RateLimitExceededHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses429RateLimitExceededHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={` Headers`}
      src={AgaResponses429RateLimitExceededHeadersImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses429RateLimitExceededHeadersPage;
