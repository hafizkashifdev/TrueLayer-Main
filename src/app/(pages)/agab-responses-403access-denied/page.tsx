import { AgabResponses403AccessDeniedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses403AccessDeniedPage = () => {
  return (
    <CommonPage
      pageTitle={`403(Access Denied)`}
      src={AgabResponses403AccessDeniedImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses403AccessDeniedPage;
