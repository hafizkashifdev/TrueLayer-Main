import { GetPaymentResponses200PaymentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentResponses200PaymentPage = () => {
  return (
    <CommonPage
      pageTitle={`Get Payment_ Responses_200 Payment`}
      src={GetPaymentResponses200PaymentImage}
      backRoute="/payments-get-payment"
    />
  );
};

export default GetPaymentResponses200PaymentPage;
