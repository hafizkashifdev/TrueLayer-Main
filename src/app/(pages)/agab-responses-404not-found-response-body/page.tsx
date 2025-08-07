import { AgabResponses404NotFoundResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses404NotFoundResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={AgabResponses404NotFoundResponseBodyImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses404NotFoundResponseBodyPage;
