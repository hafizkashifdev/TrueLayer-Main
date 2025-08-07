import { RateLimitExceeded429136Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RateLimitExceeded429136Page = () => {
  return (
    <CommonPage
      pageTitle={`rate limit exceeded 429 1.3.6`}
      src={RateLimitExceeded429136Image}
      backRoute="/batch"
    />
  );
};

export default RateLimitExceeded429136Page;
