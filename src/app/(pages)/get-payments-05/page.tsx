import { GetPayments05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments05Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 05`}
      src={GetPayments05Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments05Page;
