import { PaymentsCancelPaymentResponses400InvalidRequestImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsCancelPaymentResponses400InvalidRequestPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel payment_responses-400 Invalid Request`}
      src={PaymentsCancelPaymentResponses400InvalidRequestImage}
      backRoute="/payments-cancel-payment"
    />
  );
};

export default PaymentsCancelPaymentResponses400InvalidRequestPage;
