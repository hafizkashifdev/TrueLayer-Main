import { AgabResponses401UnauthorizedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses401UnauthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`401(Unauthorized)`}
      src={AgabResponses401UnauthorizedImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses401UnauthorizedPage;
