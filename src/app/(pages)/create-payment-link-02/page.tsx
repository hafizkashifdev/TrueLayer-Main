import { CreatePaymentLink02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink02Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 02`}
      src={CreatePaymentLink02Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink02Page;
