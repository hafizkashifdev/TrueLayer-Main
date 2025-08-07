import { AgaPathParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaPathParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Path Params`}
      src={AgaPathParamsImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaPathParamsPage;
