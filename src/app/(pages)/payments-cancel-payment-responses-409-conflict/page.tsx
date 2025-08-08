import { PaymentsCancelPaymentResponses409ConflictImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsCancelPaymentResponses409ConflictPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel payment_responses 409 Conflict`}
      src={PaymentsCancelPaymentResponses409ConflictImage}
      backRoute="/payments-cancel-payment"
    />
  );
};

export default PaymentsCancelPaymentResponses409ConflictPage;
