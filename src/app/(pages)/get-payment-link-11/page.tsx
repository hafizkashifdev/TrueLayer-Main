import { GetPaymentLink11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentLink11Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payment link 11`}
      src={GetPaymentLink11Image}
      backRoute="/get-payment-link"
    />
  );
};

export default GetPaymentLink11Page;
