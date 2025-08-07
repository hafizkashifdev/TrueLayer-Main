import { AgabQueryParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabQueryParamsPage = () => {
  return (
    <CommonPage
      pageTitle={` Query Params`}
      src={AgabQueryParamsImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabQueryParamsPage;
