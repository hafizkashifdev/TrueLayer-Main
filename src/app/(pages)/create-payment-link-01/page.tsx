import { CreatePaymentLink01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink01Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 01`}
      src={CreatePaymentLink01Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink01Page;
