import { GetPaymentLink05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentLink05Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payment link 05`}
      src={GetPaymentLink05Image}
      backRoute="/get-payment-link"
    />
  );
};

export default GetPaymentLink05Page;
