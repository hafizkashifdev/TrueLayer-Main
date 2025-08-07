import { GetPaymentLink04Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentLink04Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payment link 04`}
      src={GetPaymentLink04Image}
      backRoute="/get-payment-link"
    />
  );
};

export default GetPaymentLink04Page;
