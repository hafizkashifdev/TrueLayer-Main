import { GetPaymentLink03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentLink03Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payment link 03`}
      src={GetPaymentLink03Image}
      backRoute="/get-payment-link"
    />
  );
};

export default GetPaymentLink03Page;
