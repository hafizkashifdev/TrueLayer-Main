import { GetPaymentLink10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentLink10Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payment link 10`}
      src={GetPaymentLink10Image}
      backRoute="/get-payment-link"
    />
  );
};

export default GetPaymentLink10Page;
