import { GetPaymentLink02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentLink02Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payment link 02`}
      src={GetPaymentLink02Image}
      backRoute="/get-payment-link"
    />
  );
};

export default GetPaymentLink02Page;
