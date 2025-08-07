import { AgaResponses429RateLimitExceededImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses429RateLimitExceededPage = () => {
  return (
    <CommonPage
      pageTitle={` 429(Rate Limit Exceeded)`}
      src={AgaResponses429RateLimitExceededImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses429RateLimitExceededPage;
