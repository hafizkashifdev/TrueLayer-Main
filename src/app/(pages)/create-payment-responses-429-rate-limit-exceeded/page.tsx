import { CreatePaymentResponses429RateLimitExceededImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentResponses429RateLimitExceededPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payment _ Responses_429  Rate Limit Exceeded`}
      src={CreatePaymentResponses429RateLimitExceededImage}
      backRoute="/payments-create-payment"
    />
  );
};

export default CreatePaymentResponses429RateLimitExceededPage;
