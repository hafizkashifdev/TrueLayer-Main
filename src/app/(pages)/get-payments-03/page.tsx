import { GetPayments03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments03Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 03`}
      src={GetPayments03Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments03Page;
