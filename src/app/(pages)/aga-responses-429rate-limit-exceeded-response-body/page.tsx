import { AgaResponses429RateLimitExceededResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses429RateLimitExceededResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={AgaResponses429RateLimitExceededResponseBodyImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses429RateLimitExceededResponseBodyPage;
