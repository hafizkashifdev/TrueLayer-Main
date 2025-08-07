import { AgabResponses403AccessDeniedResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses403AccessDeniedResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={AgabResponses403AccessDeniedResponseBodyImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses403AccessDeniedResponseBodyPage;
