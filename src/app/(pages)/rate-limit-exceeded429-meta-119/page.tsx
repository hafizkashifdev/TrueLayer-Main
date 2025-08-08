import { RateLimitExceeded429Meta119Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RateLimitExceeded429Meta119Page = () => {
  return (
    <CommonPage
      pageTitle={`429(Rate Limit Exceeded)`}
      src={RateLimitExceeded429Meta119Image}
      backRoute="/meta-main"
    />
  );
};

export default RateLimitExceeded429Meta119Page;
