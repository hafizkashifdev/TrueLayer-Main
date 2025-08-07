import { GetPayments04Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments04Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 04`}
      src={GetPayments04Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments04Page;
