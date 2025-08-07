import { CreatePaymentLink13Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink13Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 13`}
      src={CreatePaymentLink13Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink13Page;
