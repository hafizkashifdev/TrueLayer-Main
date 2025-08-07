import { CreatePaymentLink03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink03Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 03`}
      src={CreatePaymentLink03Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink03Page;
