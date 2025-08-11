import { CreatePaymentRefundBodyParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentRefundBodyParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Create payment refund_ Body  Params`}
      src={CreatePaymentRefundBodyParamsImage}
      backRoute="/payments-create-payment-refund"
    />
  );
};

export default CreatePaymentRefundBodyParamsPage;
