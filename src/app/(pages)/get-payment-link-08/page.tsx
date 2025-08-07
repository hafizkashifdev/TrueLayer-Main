import { GetPaymentLink08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentLink08Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payment link 08`}
      src={GetPaymentLink08Image}
      backRoute="/get-payment-link"
    />
  );
};

export default GetPaymentLink08Page;
