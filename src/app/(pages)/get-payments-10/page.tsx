import { GetPayments10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments10Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 10`}
      src={GetPayments10Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments10Page;
