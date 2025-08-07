import { GetPaymentsProvider02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentsProvider02Page = () => {
  return (
    <CommonPage
      pageTitle={`Get payments provider 02`}
      src={GetPaymentsProvider02Image}
      backRoute="/get-payments-provider"
    />
  );
};

export default GetPaymentsProvider02Page;
