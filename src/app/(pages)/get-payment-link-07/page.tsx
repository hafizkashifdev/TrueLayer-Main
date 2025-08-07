import { GetPaymentLink07Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentLink07Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payment link 07`}
      src={GetPaymentLink07Image}
      backRoute="/get-payment-link"
    />
  );
};

export default GetPaymentLink07Page;
