import { CreatePaymentLink07Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink07Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 07`}
      src={CreatePaymentLink07Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink07Page;
