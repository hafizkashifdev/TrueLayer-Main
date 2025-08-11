import { PaymentsGetPaymentsRefundResponses403ForbiddenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsGetPaymentsRefundResponses403ForbiddenPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment refunds_Responses_403 Forbidden`}
      src={PaymentsGetPaymentsRefundResponses403ForbiddenImage}
      backRoute="/payments-get-payment-refunds"
    />
  );
};

export default PaymentsGetPaymentsRefundResponses403ForbiddenPage;
