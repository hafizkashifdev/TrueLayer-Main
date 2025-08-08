import { CreatePaymentRefundHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentRefundHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Create payment refund_ Headers`}
      src={CreatePaymentRefundHeadersImage}
      backRoute="/payments-create-payment-refund"
    />
  );
};

export default CreatePaymentRefundHeadersPage;
