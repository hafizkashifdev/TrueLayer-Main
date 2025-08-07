import { GetPayments11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments11Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 11`}
      src={GetPayments11Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments11Page;
