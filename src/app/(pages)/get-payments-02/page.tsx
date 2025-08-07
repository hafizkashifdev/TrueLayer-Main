import { GetPayments02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPayments02Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments 02`}
      src={GetPayments02Image}
      backRoute="/get-payments"
    />
  );
};

export default GetPayments02Page;
