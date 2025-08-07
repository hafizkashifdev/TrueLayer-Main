import { GetPaymentLink09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentLink09Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payment link 09`}
      src={GetPaymentLink09Image}
      backRoute="/get-payment-link"
    />
  );
};

export default GetPaymentLink09Page;
