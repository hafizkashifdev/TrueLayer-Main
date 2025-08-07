import { AgabResponses200OkResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses200OkResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={AgabResponses200OkResponseBodyImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses200OkResponseBodyPage;
