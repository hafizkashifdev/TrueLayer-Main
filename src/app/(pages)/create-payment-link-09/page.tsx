import { CreatePaymentLink09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink09Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 09`}
      src={CreatePaymentLink09Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink09Page;
