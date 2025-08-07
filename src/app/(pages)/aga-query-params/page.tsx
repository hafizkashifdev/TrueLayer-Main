import { AgaQueryParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaQueryParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Query Params`}
      src={AgaQueryParamsImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaQueryParamsPage;
