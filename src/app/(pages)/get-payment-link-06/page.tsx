import { GetPaymentLink06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentLink06Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payment link 06`}
      src={GetPaymentLink06Image}
      backRoute="/get-payment-link"
    />
  );
};

export default GetPaymentLink06Page;
