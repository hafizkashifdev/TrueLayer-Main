import { CreatePaymentBodyParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentBodyParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payment _ Body Params`}
      src={CreatePaymentBodyParamsImage}
      backRoute="/payments-create-payment"
    />
  );
};

export default CreatePaymentBodyParamsPage;
