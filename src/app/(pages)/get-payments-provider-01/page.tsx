import { GetPaymentsProvider01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentsProvider01Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments provider 01`}
      src={GetPaymentsProvider01Image}
      backRoute="/get-payments-provider"
    />
  );
};

export default GetPaymentsProvider01Page;
