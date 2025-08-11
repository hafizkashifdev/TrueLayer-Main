import { PaymentsGetPaymentsRefundPathParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsGetPaymentsRefundPathParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment refunds_Path-Params`}
      src={PaymentsGetPaymentsRefundPathParamsImage}
      backRoute="/payments-get-payment-refunds"
    />
  );
};

export default PaymentsGetPaymentsRefundPathParamsPage;
