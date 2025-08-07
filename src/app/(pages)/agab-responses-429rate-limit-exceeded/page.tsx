import { AgabResponses429RateLimitExceededImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses429RateLimitExceededPage = () => {
  return (
    <CommonPage
      pageTitle={`429(Rate Limit Exceeded)`}
      src={AgabResponses429RateLimitExceededImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses429RateLimitExceededPage;
