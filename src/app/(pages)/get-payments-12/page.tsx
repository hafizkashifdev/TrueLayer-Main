import { GetPayments12Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments12Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 12`}
      src={GetPayments12Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments12Page;
