import { CreatePaymentLink08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink08Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 08`}
      src={CreatePaymentLink08Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink08Page;
