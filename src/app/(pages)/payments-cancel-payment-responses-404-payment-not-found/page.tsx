import { PaymentsCancelPaymentResponses404PaymentNotFoundImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsCancelPaymentResponses404PaymentNotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel payment_responses 404 Payment Not Found`}
      src={PaymentsCancelPaymentResponses404PaymentNotFoundImage}
      backRoute="/payments-cancel-payment"
    />
  );
};

export default PaymentsCancelPaymentResponses404PaymentNotFoundPage;
