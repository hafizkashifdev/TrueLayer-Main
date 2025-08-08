import { RateLimitExceeded429547Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RateLimitExceeded429547Page = () => {
  return (
    <CommonPage
      pageTitle={`rate limit exceeded 429 5.4.7`}
      src={RateLimitExceeded429547Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default RateLimitExceeded429547Page;
