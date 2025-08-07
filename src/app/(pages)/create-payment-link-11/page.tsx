import { CreatePaymentLink11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink11Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 11`}
      src={CreatePaymentLink11Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink11Page;
