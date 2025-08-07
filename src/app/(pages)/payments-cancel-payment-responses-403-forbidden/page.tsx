import { PaymentsCancelPaymentResponses403ForbiddenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsCancelPaymentResponses403ForbiddenPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel payment_responses-403 Forbidden`}
      src={PaymentsCancelPaymentResponses403ForbiddenImage}
      backRoute="/payments-cancel-payment"
    />
  );
};

export default PaymentsCancelPaymentResponses403ForbiddenPage;
