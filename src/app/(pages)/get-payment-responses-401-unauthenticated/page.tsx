import { GetPaymentResponses401UnauthenticatedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentResponses401UnauthenticatedPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment_ Responses_401 Unauthenticated`}
      src={GetPaymentResponses401UnauthenticatedImage}
      backRoute="/payments-get-payment"
    />
  );
};

export default GetPaymentResponses401UnauthenticatedPage;
