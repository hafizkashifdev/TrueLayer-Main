import { GetPayments01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments01Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 01`}
      src={GetPayments01Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments01Page;
