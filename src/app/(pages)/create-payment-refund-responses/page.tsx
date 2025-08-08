import { CreatePaymentRefundResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentRefundResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Create payment refund_Responses`}
      src={CreatePaymentRefundResponsesImage}
      backRoute="/payments-create-payment-refund"
    />
  );
};

export default CreatePaymentRefundResponsesPage;
