import { CreatePaymentLink10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink10Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 10`}
      src={CreatePaymentLink10Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink10Page;
