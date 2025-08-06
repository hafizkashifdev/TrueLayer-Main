import { GetPayments08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments08Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 08`}
      src={GetPayments08Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments08Page;
