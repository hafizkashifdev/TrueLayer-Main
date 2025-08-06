import { GetPaymentLink01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentLink01Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payment link 01`}
      src={GetPaymentLink01Image}
      backRoute="/get-payment-link"
    />
  );
};

export default GetPaymentLink01Page;
