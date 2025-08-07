import { CreatePaymentResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payment _ Responses`}
      src={CreatePaymentResponsesImage}
      backRoute="/payments-create-payment"
    />
  );
};

export default CreatePaymentResponsesPage;
