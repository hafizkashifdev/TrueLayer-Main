import { GetPayments07Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments07Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 07`}
      src={GetPayments07Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments07Page;
