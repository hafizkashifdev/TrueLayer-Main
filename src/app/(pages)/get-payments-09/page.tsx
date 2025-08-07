import { GetPayments09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments09Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 09`}
      src={GetPayments09Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments09Page;
