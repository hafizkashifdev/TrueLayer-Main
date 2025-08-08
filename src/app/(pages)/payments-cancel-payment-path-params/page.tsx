import { PaymentsCancelPaymentPathParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsCancelPaymentPathParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel payment_Path-Params`}
      src={PaymentsCancelPaymentPathParamsImage}
      backRoute="/payments-cancel-payment"
    />
  );
};

export default PaymentsCancelPaymentPathParamsPage;
