import { GetPayments13Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments13Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 13`}
      src={GetPayments13Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments13Page;
