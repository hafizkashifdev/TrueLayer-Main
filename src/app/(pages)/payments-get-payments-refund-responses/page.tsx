import { PaymentsGetPaymentsRefundResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsGetPaymentsRefundResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment refunds_-Responses`}
      src={PaymentsGetPaymentsRefundResponsesImage}
      backRoute="/payments-get-payment-refunds"
    />
  );
};

export default PaymentsGetPaymentsRefundResponsesPage;
