import { PaymentsCancelPaymentHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsCancelPaymentHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel payment_Headers`}
      src={PaymentsCancelPaymentHeadersImage}
      backRoute="/payments-cancel-payment"
    />
  );
};

export default PaymentsCancelPaymentHeadersPage;
