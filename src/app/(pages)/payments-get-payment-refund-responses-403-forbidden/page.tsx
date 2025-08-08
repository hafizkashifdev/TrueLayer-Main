import { PaymentsGetPaymentRefundResponses403ForbiddenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsGetPaymentRefundResponses403ForbiddenPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment refund_Responses-403 Forbidden`}
      src={PaymentsGetPaymentRefundResponses403ForbiddenImage}
      backRoute="/payments-get-payment-refund"
    />
  );
};

export default PaymentsGetPaymentRefundResponses403ForbiddenPage;
