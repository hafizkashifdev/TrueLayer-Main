import { CreatePaymentLink12Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink12Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 12`}
      src={CreatePaymentLink12Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink12Page;
