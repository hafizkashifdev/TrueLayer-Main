import { CreatePaymentLink04Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink04Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 04`}
      src={CreatePaymentLink04Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink04Page;
