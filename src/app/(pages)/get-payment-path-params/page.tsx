import { GetPaymentPathParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentPathParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Get Payment_ Path  Params`}
      src={GetPaymentPathParamsImage}
      backRoute="/payments-get-payment"
    />
  );
};

export default GetPaymentPathParamsPage;
