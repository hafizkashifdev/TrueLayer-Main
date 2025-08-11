import { RateLimitExceededMetadataaImage429 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RateLimitExceededMetadataaPage429 = () => {
  return (
    <CommonPage
      pageTitle={`429(Rate Limit Exceeded)`}
      src={RateLimitExceededMetadataaImage429}
      backRoute="/meta-main"
    />
  );
};

export default RateLimitExceededMetadataaPage429;
