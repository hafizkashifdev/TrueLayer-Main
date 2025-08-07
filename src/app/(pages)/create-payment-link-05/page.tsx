import { CreatePaymentLink05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink05Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 05`}
      src={CreatePaymentLink05Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink05Page;
