import { PaymentsGetPaymentRefundResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsGetPaymentRefundResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment refund_Responses`}
      src={PaymentsGetPaymentRefundResponsesImage}
      backRoute="/payments-get-payment-refund"
    />
  );
};

export default PaymentsGetPaymentRefundResponsesPage;
