import { GetPayments06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments06Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 06`}
      src={GetPayments06Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments06Page;
