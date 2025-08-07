import { CreatePaymentLink06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentLink06Page = () => {
  return (
    <CommonPage
      pageTitle={`Create payment link 06`}
      src={CreatePaymentLink06Image}
      backRoute="/create-payment-link"
    />
  );
};

export default CreatePaymentLink06Page;
