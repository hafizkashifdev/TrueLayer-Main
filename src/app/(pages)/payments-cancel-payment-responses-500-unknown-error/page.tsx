import { PaymentsCancelPaymentResponses500UnknownErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsCancelPaymentResponses500UnknownErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel payment_responses-500 Unknown Error`}
      src={PaymentsCancelPaymentResponses500UnknownErrorImage}
      backRoute="/payments-cancel-payment"
    />
  );
};

export default PaymentsCancelPaymentResponses500UnknownErrorPage;
