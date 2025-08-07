import { PaymentsCancelPaymentResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsCancelPaymentResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel payment_Responses`}
      src={PaymentsCancelPaymentResponsesImage}
      backRoute="/payments-cancel-payment"
    />
  );
};

export default PaymentsCancelPaymentResponsesPage;
