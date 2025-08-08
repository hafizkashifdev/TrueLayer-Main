import { GetPaymentResponses404PaymentNotFoundImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentResponses404PaymentNotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment_ Responses 404 Payment Not Found`}
      src={GetPaymentResponses404PaymentNotFoundImage}
      backRoute="/payments-get-payment"
    />
  );
};

export default GetPaymentResponses404PaymentNotFoundPage;
