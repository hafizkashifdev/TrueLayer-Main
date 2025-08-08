import { AgabPathParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabPathParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Path Params`}
      src={AgabPathParamsImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabPathParamsPage;
