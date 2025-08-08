import { PaymentsGetPaymentsRefundResponses404RefundNotFoundImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsGetPaymentsRefundResponses404RefundNotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment refunds_Responses 404 Refund Not Found`}
      src={PaymentsGetPaymentsRefundResponses404RefundNotFoundImage}
      backRoute="/payments-get-payment-refunds"
    />
  );
};

export default PaymentsGetPaymentsRefundResponses404RefundNotFoundPage;
