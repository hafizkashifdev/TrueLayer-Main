import { PaymentsCancelPaymentResponses401UnauthenticatedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsCancelPaymentResponses401UnauthenticatedPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel payment_responses-401 Unauthenticated`}
      src={PaymentsCancelPaymentResponses401UnauthenticatedImage}
      backRoute="/payments-cancel-payment"
    />
  );
};

export default PaymentsCancelPaymentResponses401UnauthenticatedPage;
